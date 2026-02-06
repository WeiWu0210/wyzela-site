
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">W</div>
              <span className="text-lg font-bold tracking-tight text-white font-heading">Wyzela LLC</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Boutique patent agent practice dedicated to protecting the technical vision of serious innovators.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Prior Art Searches</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Patent Drafting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Patent Prosecution</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">IP Strategy</a></li>
  
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Invention Checklist</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">IP Roadmap Guide</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing Structure</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Located in the United States.<br/>
              Serving innovators globally.
            </p>
            <p className="text-sm font-bold text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">info@wyzela.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-[11px] text-slate-600 leading-relaxed uppercase tracking-widest mb-2 font-bold">Footer Disclaimer</p>
              <p className="text-[12px] text-slate-500 leading-relaxed">
                Wyzela LLC provides patent agent and technology consulting services. This website is for informational purposes only 
                and does not constitute legal advice. No professional relationship is formed by submitting an inquiry or visiting this site. 
                Engagements are subject to a written agreement. Registered with the USPTO as a Patent Agent.
              </p>
            </div>
            <div className="text-[12px] text-slate-600 whitespace-nowrap">
              &copy; {currentYear} Wyzela LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
