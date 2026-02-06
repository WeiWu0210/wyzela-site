
import React from 'react';

interface HeroProps {
  onPrimaryCta: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPrimaryCta }) => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-slate-950">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Boutique Patent Agent Practice
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 font-heading">
            For Serious <span className="gradient-text">Innovators</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-3xl mx-auto">
            Wyzela provides premium patent drafting and invention strategy services for technical founders, 
            R&D teams, and individual inventors, offering accessible entry points without compromising on quality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onPrimaryCta}
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 active:scale-95"
            >
              Book a confidential consultation
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-slate-300 text-lg font-bold rounded-2xl border border-slate-800 hover:bg-slate-800 transition-all active:scale-95"
            >
              Explore services
            </button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represent trust icons */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-widest text-slate-500">FOUNDERS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-widest text-slate-500">R&D TEAMS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-widest text-slate-500">INVENTORS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
