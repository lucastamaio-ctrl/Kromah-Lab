import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-kromah-black text-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-white rotate-45" />
              <span className="text-xl tracking-[0.2em] font-bold uppercase font-sans">Kromah Lab</span>
            </div>
            <p className="text-zinc-400 font-light max-w-sm leading-relaxed">
              Engineering the future of professional hair color for the global majority. 
              Science-backed, integrity-first, innovation-driven.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">Inquiries</h4>
            <ul className="space-y-4 text-sm font-light text-zinc-300">
              <li><a href="#" className="hover:text-white transition-colors">Education Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consulting Requests</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
          <p>© 2024 Kromah Lab. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};