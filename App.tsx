
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeServe from './components/WhoWeServe';
import Services from './components/Services';
import WhyWyzela from './components/WhyWyzela';
import HowWeWork from './components/HowWeWork';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const toggleModal = () => setShowInquiryModal(prev => !prev);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-white bg-slate-950">
      <Navbar onCtaClick={toggleModal} />
      
      <main className="flex-grow">
        <Hero onPrimaryCta={toggleModal} />
        
        <section id="mission" className="py-24 bg-slate-900/50 border-y border-slate-800/50">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">From invention to defensible IP</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Wyzela LLC helps innovators transform early-stage technical ideas into clear, well-structured patent applications 
              aligned with real-world product and technology roadmaps. With over 20 years of engineering experience, we bridge 
              the gap between technical invention and effective intellectual property protection.
            </p>
          </div>
        </section>

        <WhoWeServe />
        <Services />
        <WhyWyzela />
        
        <HowWeWork />

        {/* Final CTA Section */}
        <section className="py-24 bg-slate-950">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="bg-blue-900/10 rounded-3xl p-12 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading">Ready to take the next step?</h2>
              <p className="text-xl text-slate-400 mb-10">
                Schedule a confidential consultation to discuss your invention, patent strategy, or innovation goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={toggleModal}
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20"
                >
                  Book a consultation
                </button>
                <button 
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="px-8 py-4 bg-slate-900 text-blue-400 border border-blue-500/20 rounded-xl font-semibold hover:bg-slate-800 transition-all"
                >
                  Contact Wyzela LLC
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Basic Inquiry Modal Mock */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 rounded-2xl w-full max-w-lg p-8 border border-slate-800 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold font-heading text-white">Confidential Inquiry</h3>
              <button onClick={toggleModal} className="text-slate-500 hover:text-slate-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <p className="text-slate-400 mb-6">Tell us briefly about your innovation goals. We'll respond within 24 hours.</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent successfully!'); toggleModal(); }}>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                <input required type="text" className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input required type="email" className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea required rows={4} className="w-full px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Briefly describe your patent needs..."></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
