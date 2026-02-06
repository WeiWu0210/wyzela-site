
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">W</div>
          <span className="text-xl font-bold tracking-tight text-white font-heading uppercase">Wyzela <span className="text-blue-500 italic lowercase font-normal">LLC</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Why Wyzela</a>
          <a href="#process" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">How We Work</a>
          <button 
            onClick={onCtaClick}
            className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-900/20"
          >
            Book Consultation
          </button>
        </div>

        <button className="md:hidden text-slate-300 p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
