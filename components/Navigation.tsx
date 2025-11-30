import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Handle internal page routing
    if (href.startsWith('/') && href.length > 1) {
      onNavigate(href);
      return;
    }

    // Handle home link
    if (href === '/') {
      onNavigate('/');
      return;
    }

    // Handle hash links (anchors)
    if (href.startsWith('#')) {
      if (currentPath !== '/' && currentPath !== '') {
        // If not on home page, go to home page first, then scroll
        onNavigate('/');
        // Small delay to allow home to mount before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-mammoth-yellow py-2 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
            href="/" 
            onClick={(e) => handleLinkClick(e, '/')}
            className="font-display text-2xl tracking-tighter uppercase text-black cursor-pointer"
        >
          Mammoth Murals
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#work" onClick={(e) => handleLinkClick(e, '#work')} className="font-condensed font-bold text-sm tracking-widest uppercase hover:text-white transition-colors cursor-pointer">Work</a>
          <a href="#generator" onClick={(e) => handleLinkClick(e, '#generator')} className="font-condensed font-bold text-sm tracking-widest uppercase hover:text-white transition-colors cursor-pointer">AI Studio</a>
          <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className={`font-condensed font-bold text-sm tracking-widest uppercase transition-colors cursor-pointer ${currentPath === '/services' ? 'text-white' : 'hover:text-white'}`}>Services</a>
          <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className={`font-condensed font-bold text-sm tracking-widest uppercase transition-colors cursor-pointer ${currentPath === '/about' ? 'text-white' : 'hover:text-white'}`}>About</a>
          <button className="bg-black text-white px-6 py-2 font-condensed font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
            Start a Project
          </button>
        </div>

        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-mammoth-yellow border-t border-black p-4 flex flex-col space-y-4 md:hidden shadow-xl">
          <a href="#work" onClick={(e) => handleLinkClick(e, '#work')} className="font-display text-4xl uppercase">Work</a>
          <a href="#generator" onClick={(e) => handleLinkClick(e, '#generator')} className="font-display text-4xl uppercase">AI Studio</a>
          <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="font-display text-4xl uppercase">Services</a>
          <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="font-display text-4xl uppercase">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;