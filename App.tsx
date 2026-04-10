import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { AIModal } from './components/AIModal';

const App: React.FC = () => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header onOpenAI={() => setIsAIModalOpen(true)} />
      
      <main>
        <Hero />
        <Methodology />
        <Services />
      </main>
      
      <Footer />
      
      <AIModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
      />
    </div>
  );
};

export default App;