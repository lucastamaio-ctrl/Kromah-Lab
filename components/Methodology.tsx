import React from 'react';
import { METHODOLOGY_STEPS } from '../constants';

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-serif">Liquid Hair <span className="italic text-zinc-400">Methodology</span></h2>
          </div>
          <div className="pb-2">
            <p className="text-zinc-600 font-light leading-relaxed max-w-md">
              A proprietary three-phase system designed to navigate the structural complexities of Asian and resistant hair types, ensuring predictable outcomes without compromising fiber elasticity.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
          {METHODOLOGY_STEPS.map((step, index) => (
            <div key={index} className="bg-white p-12 hover:bg-zinc-50 transition-colors duration-500 group min-h-[400px] flex flex-col justify-between">
              <div>
                <span className="block text-6xl font-light text-zinc-200 mb-8 group-hover:text-zinc-900 transition-colors duration-500 font-serif">
                  {step.number}
                </span>
                <h3 className="text-xl font-medium mb-4 uppercase tracking-wide">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light text-sm">
                  {step.content}
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-zinc-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-mono uppercase">Clinical Data</span>
                <div className="h-[1px] w-12 bg-black"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Visual Breaker */}
        <div className="mt-32 w-full h-[400px] bg-zinc-900 relative overflow-hidden flex items-center justify-center">
            <img 
                src="https://picsum.photos/seed/chemistry/1600/600" 
                alt="Chemical Reaction" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-overlay"
            />
            <div className="z-10 text-center text-white px-4">
                <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4">The Standard of Purity</p>
                <p className="font-serif text-3xl md:text-4xl italic max-w-2xl mx-auto leading-snug">
                    "Precision is not an option; it is the only variable we control."
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};