
import React from 'react';

const WhyWyzela: React.FC = () => {
  const points = [
    "Boutique practice offering individualized attention.",
    "Led by registered U.S. Patent Agents.",
    "Over 20 years of engineering and technology experience.",
    "Clear, structured process for invention disclosure and drafting.",
    "Trusted by founders, engineers, and independent inventors."
  ];

  return (
    <section className="py-24 bg-slate-950 scroll-mt-20" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/patent/800/800" 
                alt="Technical Drafting" 
                className="rounded-3xl shadow-2xl grayscale brightness-75 border border-slate-800"
              />
              <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-3xl text-white shadow-xl hidden lg:block max-w-[280px]">
                <p className="text-lg font-bold leading-tight">"We intentionally limit client engagements to maintain high standards."</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Why Wyzela</h2>
            <h3 className="text-4xl font-bold text-white mb-8 font-heading leading-tight">Boutique approach. <br/>Engineering depth.</h3>
            
            <div className="space-y-6">
              {points.map((pt, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400 mt-1 border border-blue-500/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-lg text-slate-300 font-medium">{pt}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-900 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 italic leading-relaxed">
                Wyzela LLC is built on the philosophy that intellectual property is most powerful when it remains closely tethered 
                to technical reality and business strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWyzela;
