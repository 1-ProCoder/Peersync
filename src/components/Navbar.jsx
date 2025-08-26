import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Overview', to: '/#overview', hash: 'overview' },
    { name: 'Features', to: '/#features', hash: 'features' },
    { name: 'FAQ', to: '/#faq', hash: 'faq' },
  ];
  const navigate = useNavigate();

  const handleHashNav = (hash) => (e) => {
    e.preventDefault();
    setIsOpen(false);
    // navigate to root + hash which updates location and triggers Index scroll effect
    navigate(`/#${hash}`);
  };

  return (
    <nav className="fixed inset-x-0 top-6 z-50 px-4 pointer-events-auto">
      <div className="max-w-3xl mx-auto">
        <div className="mx-auto  bg-white/10 backdrop-blur-lg rounded-full bg-gradient-to-b from-slate-900/80 to-slate-800/80 border border-slate-700 shadow-2xl py-2 px-4 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-violet-500 flex items-center justify-center">
                <img src="/src/assets/Logo.svg" alt="logo" className="w-5 h-5" />
              </div>
              <span className="text-white font-medium">PeerSync</span>
            </Link>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={handleHashNav(link.hash)}
                className={`text-sm font-medium px-3 py-2 rounded-full transition-colors ${
                  location.hash === `#${link.hash}` ? 'text-white' : 'text-slate-200/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center space-x-3">
            <Link to="/login" className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm">
              Login
            </Link>
            <Link to="/Dashboard" className="px-4 py-2 rounded-full bg-violet-500 hover:bg-violet-600 text-white font-semibold text-sm">
              Signup
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Toggle menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-3 mx-auto max-w-md rounded-lg bg-slate-900/80 border border-slate-700 p-3">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a key={link.to} href={link.to} onClick={(e) => { handleHashNav(link.hash)(e); }} className="block px-3 py-2 rounded text-white">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
