import React from 'react';
import { Button } from './Button';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 z-10 flex flex-col gap-8">
          <div className="inline-flex items-center gap-4">
            <span className="h-[1px] w-12 bg-kromah-black"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Est. 2024 — Research & Development</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] text-kromah-black tracking-tight">
            The Science <br />
            <span className="italic font-light">of Dark Fiber</span>
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
            Redefining lift and tone for high-melanin hair structures. 
            We replace formulation guesswork with repeatable, chemistry-based methodologies engineered for resistance.
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <Button onClick={() => document.getElementById('methodology')?.scrollIntoView({behavior: 'smooth'})}>
              Discover The Methodology
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Consulting Inquiry
            </Button>
          </div>
        </div>

        {/* Visual / Abstract Image */}
        <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] w-full">
           {/* Abstract "Hair Fiber" representation */}
          <div className="absolute inset-0 bg-zinc-200 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/hairscience/800/1200" 
              alt="Microscopic fiber analysis" 
              className="w-full h-full object-cover grayscale contrast-125 opacity-90 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kromah-stone/50 to-transparent mix-blend-overlay"></div>
          </div>
          
          {/* Data overlay */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 border border-zinc-200 max-w-[200px]">
            <p className="font-mono text-xs text-zinc-500 mb-1">MELANIN DENSITY</p>
            <div className="h-px w-full bg-zinc-300 mb-2"></div>
            <p className="font-sans text-sm font-semibold">High Concentration</p>
            <p className="font-mono text-[10px] text-zinc-400 mt-1">Eumelanin &gt; 85%</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-zinc-400" />
      </div>
    </section>
  );
};