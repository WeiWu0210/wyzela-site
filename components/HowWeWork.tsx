
import React from 'react';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Initial consultation",
      desc: "Confidential discussion of the invention, goals, and timeline. We establish clarity on the path forward."
    },
    {
      step: "02",
      title: "Invention development",
      desc: "Structured refinement of technical concepts and identification of patentable aspects within the context of your roadmap."
    },
    {
      step: "03",
      title: "Drafting and strategy",
      desc: "Professional preparation of patent specifications aligned with product goals, focusing on defensibility."
    },
    {
      step: "04",
      title: "Ongoing support",
      desc: "Continued guidance as technology and IP strategy evolve. We grow with your innovation."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 scroll-mt-20" id="process">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">The Process</h2>
          <h3 className="text-4xl font-bold text-white font-heading">How we transform ideas into IP</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, idx) => (
            <div key={idx} className="relative group p-8">
              <div className="text-6xl font-bold text-blue-500/10 mb-6 font-heading group-hover:text-blue-500/20 transition-colors">
                {s.step}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white font-heading">{s.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">{s.desc}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
