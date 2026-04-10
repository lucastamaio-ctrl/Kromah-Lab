import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { AI_SYSTEM_INSTRUCTION } from '../constants';

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Kromah Lab Intelligence. I am ready to assist with inquiries regarding fiber chemistry, Liquid Hair Methodology, or formulation science.' }
  ]);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoadingState(LoadingState.LOADING);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key is missing.");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // We construct a chat history for context, but for simplicity in this demo, 
      // we'll send the immediate query with system instruction context 
      // or use the chat API if we wanted full history.
      // Let's use ai.chats.create for proper conversation flow.
      
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: AI_SYSTEM_INSTRUCTION,
        },
        // In a real app, you'd map `messages` to the history format expected by the SDK
        // For this localized component, we'll let the model start fresh or just pass the last query
        // A robust implementation would map existing React state messages to `history`
      });

      // Simple one-off generation for now to demonstrate capability, 
      // effectively treating it as a Q&A bot for the specific question.
      // To keep it simple and stateless on the API side for this demo:
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Previous context: ${messages.map(m => `${m.role}: ${m.text}`).join('\n')}\nUser Question: ${userMessage}`,
        config: {
            systemInstruction: AI_SYSTEM_INSTRUCTION,
        }
      });

      const text = response.text || "I apologize, but I cannot process that request at the moment.";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
      setLoadingState(LoadingState.SUCCESS);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection to Lab Server interrupted. Please verify credentials or try again later." }]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-[#FDFCFB] w-full max-w-2xl h-[600px] shadow-2xl flex flex-col overflow-hidden border border-zinc-200 animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-100 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-sm uppercase tracking-wider">Lab Intelligence</h3>
              <p className="text-[10px] text-zinc-400 font-mono uppercase">Powered by Gemini 3 Flash</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-zinc-500" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-sm text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-zinc-900 text-white' 
                  : 'bg-white border border-zinc-200 text-zinc-700 shadow-sm'
              }`}>
                {msg.role === 'model' && (
                    <p className="mb-2 text-[10px] font-mono uppercase text-zinc-400">Kromah Scientist</p>
                )}
                <div className="markdown-prose">{msg.text}</div>
              </div>
            </div>
          ))}
          {loadingState === LoadingState.LOADING && (
             <div className="flex justify-start">
               <div className="bg-white border border-zinc-200 p-4 rounded-sm flex items-center gap-3">
                 <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
                 <span className="text-xs text-zinc-400 font-mono">Analyzing fiber data...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-zinc-100">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about high-melanin formulation or chemistry..."
              className="flex-1 bg-zinc-50 border border-zinc-200 p-3 text-sm focus:outline-none focus:border-zinc-400 transition-colors font-light placeholder:text-zinc-400"
            />
            <button 
              onClick={handleSend}
              disabled={loadingState === LoadingState.LOADING || !query.trim()}
              className="px-4 bg-kromah-black text-white hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};