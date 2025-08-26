import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
// Layout
import Navbar from "../components/Navbar";
// UI Components
import Cards from "../components/ui/Cards";
import FAQ from "../components/ui/FAQ";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import HeroImage from "../assets/Hero.png";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // small timeout to allow layout/render; slightly longer to avoid race conditions
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          // ensure element is focusable so assistive tech can follow
          if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          try {
            el.focus({ preventScroll: true });
          } catch (e) {
            // ignore focus errors in some browsers
          }
        }
      }, 120);

      return () => clearTimeout(t);
    }
  }, [location]);


  return (
    <div className="relative w-full min-h-screen ">
      {/* Animated Background */}
      <AnimatedBackground />
      
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent -z-20" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen w-full flex flex-col">
        <Navbar />

  {/* Hero Section */}
  <div id="overview" tabIndex={-1} className="anchor-offset flex-grow flex flex-col mt-30 md:flex-row items-center justify-center px-4 md:px-20 py-20">
          <div className="text-center md:text-left max-w-2xl mb-12 md:mb-0 md:mr-12">
            <h1 className="mt-20 text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Study Smarter. <span className="text-emerald-400">Together.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              PeerSync is a collaborative, AI-powered platform that helps students
              study more effectively by connecting them with peers and leveraging AI tutors.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white font-semibold rounded-full px-6 py-3 shadow-lg">
                Get Started
              </button>
              <button className="relative px-6 py-3 text-white font-bold bg-black rounded-full overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-white before:scale-y-0 before:origin-bottom before:transition-transform before:duration-500 hover:text-black transition-all duration-500 hover:before:scale-y-100">
                <span className="relative z-10">Learn More</span>
              </button>
            </div>
          </div>

          <div className="mt-12 md:mt-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-violet-500 rounded-3xl opacity-70 group-hover:opacity-100 blur-lg transition duration-300"></div>
            <img
              src={HeroImage}
              alt="Students studying"
              className="relative w-full max-w-[500px] drop-shadow-2xl rounded-3xl transform rotate-0 group-hover:rotate-3 transition-transform duration-700"
              style={{ transformOrigin: 'center' }}
            />
          </div>
        </div>

        {/* Features / Cards Section */}
        <div id="features" tabIndex={-1} className="anchor-offset py-20 px-4 md:px-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 flex items-center justify-center">
            Why Choose <span className="text-violet-500">PeerSync?</span> <img src="/src/assets/brainstorm.png" alt="brain" className="ml-2 w-14 h-14 mt-2" />
          </h2>
          <Cards />
        </div>

        {/* FAQ Section */}
        <div id="faq" tabIndex={-1} className="anchor-offset bg-gray-900/50 py-20">
          <FAQ />
        </div>

        {/* Footer */}
        <footer className="py-6 text-center text-white text-sm border-t border-gray-700">
          ©{new Date().getFullYear()} PeerSync. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Index;
