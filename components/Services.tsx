import React from 'react';
import { SERVICES } from '../constants';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-kromah-stone border-b border-zinc-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <h2 className="text-4xl font-serif mb-6">Expertise & <br/><span className="italic text-zinc-500">Consultation</span></h2>
            <p className="text-zinc-600 mb-8 font-light leading-relaxed">
              We serve the entire ecosystem of professional hair color, from the chemists formulating the tubes to the artists applying them.
            </p>
            <Button variant="outline">Request Deck</Button>
          </div>

          {/* List */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group border-t border-zinc-300 pt-12 pb-4 transition-all hover:pl-4">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                  <h3 className="text-2xl font-medium">{service.title}</h3>
                  <div className="flex gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase border border-zinc-300 px-2 py-1 rounded-full text-zinc-500 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-600 font-light max-w-2xl leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};