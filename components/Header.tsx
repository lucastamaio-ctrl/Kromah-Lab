import React, { useState, useEffect } from 'react';
import { Menu, X, Beaker } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  onOpenAI: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAI }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-kromah-stone/90 backdrop-blur-md border-zinc-200 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer z-50" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-3 h-3 bg-kromah-black rotate-45" />
          <span className="text-lg tracking-[0.2em] font-bold uppercase font-sans">Kromah Lab</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs font-medium uppercase tracking-widest text-zinc-600 hover:text-kromah-black transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={onOpenAI}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-100 border border-zinc-200 text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all rounded-sm"
          >
            <Beaker className="w-3 h-3" />
            <span>Lab AI</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-kromah-stone z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-serif italic text-kromah-black"
            >
              {item.label}
            </button>
          ))}
           <button 
            onClick={() => { setMobileMenuOpen(false); onOpenAI(); }}
            className="flex items-center gap-2 px-6 py-3 bg-kromah-black text-white mt-4"
          >
            <Beaker className="w-4 h-4" />
            <span>Open Lab AI</span>
          </button>
        </div>
      </div>
    </header>
  );
};