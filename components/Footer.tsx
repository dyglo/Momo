import React from 'react';

interface FooterProps {
    onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLSpanElement>, path: string) => {
    e.preventDefault();
    if (path.startsWith('/') && path.length > 1) {
        onNavigate(path);
        window.scrollTo(0,0);
    } else if (path === '/') {
        onNavigate('/');
        window.scrollTo(0,0);
    } else if (path.startsWith('#')) {
         onNavigate('/');
         setTimeout(() => {
            const el = document.querySelector(path);
            if (el) el.scrollIntoView({ behavior: 'smooth'});
         }, 100);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-24">
             <div className="inline-block relative">
                 {/* Decorative sparks */}
                 <span className="absolute -top-12 -left-12 text-mammoth-yellow text-6xl transform -rotate-12">\</span>
                 <span className="absolute -bottom-12 -right-12 text-mammoth-yellow text-6xl transform rotate-12">/</span>
                 
                 <h2 className="font-display text-6xl md:text-8xl uppercase leading-none mb-8">
                    Let's Paint Something<br />
                    <span className="text-transparent text-stroke-white md:text-outline-white">Unforgettable</span>
                 </h2>
             </div>
             <p className="font-sans text-gray-400 mb-8 max-w-lg mx-auto">
                Let's talk strategy, locations, and how a mural can give your brand a powerful local presence.
             </p>
             <button className="bg-white text-black px-8 py-4 font-condensed font-bold uppercase tracking-widest hover:bg-mammoth-yellow transition-colors">
                Book a Discovery Call
             </button>
        </div>

        {/* Image Grid Marquee (Simulated) */}
        <div className="flex space-x-4 mb-24 opacity-50 overflow-hidden w-full whitespace-nowrap">
            {[1,2,3,4,5].map(i => (
                <img key={i} src={`https://picsum.photos/400/250?random=${i+50}`} className="inline-block w-80 h-48 object-cover transform rotate-2 md:rotate-0" alt="Work" />
            ))}
        </div>

        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-zinc-800 pt-12 pb-24 text-center md:text-left">
            <div className="col-span-2 md:col-span-1 cursor-pointer hover:text-mammoth-yellow transition-colors">
                <span className="font-display text-3xl uppercase" onClick={(e) => handleLinkClick(e, '/')}>Home</span>
            </div>
            <div className="col-span-2 md:col-span-1 cursor-pointer hover:text-mammoth-yellow transition-colors">
                <span className="font-display text-3xl uppercase" onClick={(e) => handleLinkClick(e, '#work')}>Work</span>
            </div>
            <div className="col-span-2 md:col-span-1 cursor-pointer hover:text-mammoth-yellow transition-colors">
                <span className="font-display text-3xl uppercase" onClick={(e) => handleLinkClick(e, '/about')}>About</span>
            </div>
            <div className="col-span-2 md:col-span-1 cursor-pointer hover:text-mammoth-yellow transition-colors">
                <span className="font-display text-3xl uppercase" onClick={(e) => handleLinkClick(e, '/services')}>Services</span>
            </div>
            <div className="col-span-2 md:col-span-1 cursor-pointer hover:text-mammoth-yellow transition-colors">
                <span className="font-display text-3xl uppercase" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</span>
            </div>
        </div>

        <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-[22vw] leading-[0.7] text-mammoth-yellow opacity-100 mix-blend-screen pointer-events-none select-none">
                MAMMOTH
            </h1>
            <h1 className="font-display text-[22vw] leading-[0.7] text-white opacity-20 pointer-events-none select-none -mt-8 md:-mt-24">
                MURALS
            </h1>
        </div>

        <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row justify-between text-zinc-500 font-condensed uppercase text-xs tracking-widest">
            <div>Andrew@mammothmurals.com</div>
            <div>2816 Crestwood Blvd, Irondale AL</div>
            <div>Instagram</div>
            <div>Website by HUY ©2025 — All Rights Reserved</div>
        </div>
    </footer>
  );
};

export default Footer;