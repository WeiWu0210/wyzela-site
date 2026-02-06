
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Patent agent services",
      description: "Professional drafting support for provisional and non-provisional patent applications, along with comprehensive prior art searching to inform strategy.",
      points: ["Prior Art Searches", "Provisional & Non-Provisional Apps", "Office Action Responses"]
    },
    {
      title: "Invention and innovation strategy",
      description: "Invention shaping, claim-scope brainstorming, and IP strategy aligned with product and technology roadmaps.",
      points: ["Claim-scope brainstorming", "IP Strategy", "Technical vetting"]
    },
    {
      title: "Structured engagements",
      description: "Clear scopes, defined deliverables, and professional workflows designed to reduce friction and improve outcomes.",
      points: ["Defined deliverables", "Fixed-scope entry", "Transparent pricing"]
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white scroll-mt-20" id="services">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Services Overview</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight">Comprehensive technical and strategic support.</h3>
          </div>
          <div className="text-slate-400 max-w-sm">
            Our approach blends deep engineering background with precise patent agency practice to secure your competitive advantage.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 rounded-3xl overflow-hidden border border-slate-800">
          {services.map((service, idx) => (
            <div key={idx} className={`p-12 transition-colors duration-300 hover:bg-slate-800 ${idx !== services.length - 1 ? 'border-b md:border-b-0 md:border-r border-slate-800' : ''}`}>
              <h4 className="text-2xl font-bold mb-6 font-heading text-blue-400">{service.title}</h4>
              <p className="text-slate-300 leading-relaxed mb-8">{service.description}</p>
              <ul className="space-y-4">
                {service.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
