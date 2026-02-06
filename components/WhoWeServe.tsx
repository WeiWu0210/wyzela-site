
import React from 'react';

const WhoWeServe: React.FC = () => {
  const audiences = [
    {
      title: "Startups and technical founders",
      description: "Strategic patent support aligned with product development and fundraising milestones. We speak the language of growth and technical viability.",
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Engineering and R&D teams",
      description: "Invention development, portfolio planning, and high-quality patent drafting support. Deep technical integration with your engineering workflow.",
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Individual inventors",
      description: "Structured, fixed-scope entry services designed to help resource-constrained innovators take meaningful first steps toward protecting their ideas.",
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-950" id="who-we-serve">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Who we serve</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white font-heading">Focused expertise for technical innovators</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, idx) => (
            <div key={idx} className="group p-10 bg-slate-900 border border-slate-800 rounded-3xl transition-all duration-300 hover:bg-slate-800/50 hover:border-slate-700 hover:-translate-y-1">
              <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white font-heading">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
