import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const handwritingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset scroll position when mounting standalone page
    window.scrollTo(0, 0);

    if (handwritingRef.current) {
      gsap.fromTo(handwritingRef.current,
        { opacity: 0, scale: 0.8, rotation: -10 },
        { opacity: 1, scale: 1, rotation: -5, duration: 1.5, ease: "elastic.out(1, 0.3)", scrollTrigger: {
          trigger: handwritingRef.current,
          start: "top 80%"
        }}
      );
    }
  }, []);

  return (
    <section className="min-h-screen relative z-10 bg-[#FDFBF7] pt-32 pb-24 text-black overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="relative mb-24 text-center">
            <h2 className="font-display text-[15vw] leading-[0.8] uppercase tracking-tighter text-black">
                Never Go Extinct
            </h2>
            <div 
                ref={handwritingRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-mammoth-yellow font-handwriting text-[10vw] md:text-[8vw] z-10 leading-none mix-blend-multiply opacity-0"
            >
                ABOUT US
            </div>
        </div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-24">
            <div className="text-center md:text-left">
                <span className="font-display text-4xl md:text-5xl uppercase">Est. 1997</span>
            </div>
            <div className="flex justify-center">
                 {/* Textured Image Mask Effect */}
                 <div className="w-full max-w-sm h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-mammoth-yellow mix-blend-multiply opacity-50 z-10"></div>
                    {/* Noise Overlay - Fixed */}
                    <div className="absolute inset-0 bg-noise opacity-30 z-20 mix-blend-overlay pointer-events-none"></div>
                    <img src="https://picsum.photos/600/400?random=88" alt="Texture" className="w-full h-full object-cover grayscale contrast-125 brightness-110" />
                 </div>
            </div>
            <div className="text-center md:text-right">
                <span className="font-display text-4xl md:text-5xl uppercase">Birmingham, AL</span>
            </div>
        </div>

        {/* Mission Text */}
        <div className="max-w-3xl mx-auto text-center mb-32">
            <p className="font-sans font-medium text-lg md:text-xl leading-relaxed mb-6">
                Mammoth Murals helps brands, developers, and communities turn walls into landmarks that make places feel intentional and impossible to ignore.
            </p>
            <p className="font-sans font-medium text-lg md:text-xl leading-relaxed">
                Every mural, sign, and ghost sign is built with real craft and business oriented thinking so your project doesn't just look good it creates a story people talk about for years.
            </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
            <div>
                <h3 className="font-display text-6xl md:text-7xl uppercase leading-none mb-8">
                    Where We Started <br /> And Our Story
                </h3>
                <p className="font-sans text-lg mb-6 leading-relaxed">
                    Mammoth Murals was built on an obsession with painting and getting it right. Co-founded by Andrew Tynes and Shane B, our roots blend old-school craft with real business sense.
                </p>
                <p className="font-sans text-lg leading-relaxed">
                    For us, a mural or sign serves as a lasting statement that feels authentically local and transforms any wall into something memorable. We select projects with intention, attend meticulously to every detail, and apply paint with the dedication that ensures our work endures for decades without losing its impact.
                </p>
            </div>
            <div className="relative">
                <img src="https://picsum.photos/800/600?random=102" alt="Painting Process" className="w-full h-auto object-cover shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
        </div>

        {/* Stats */}
        <div className="border-t-4 border-black mb-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b-2 border-black items-center">
                <div className="col-span-12 md:col-span-4">
                    <span className="font-display text-6xl">90+</span>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <span className="font-sans font-bold text-xl uppercase">Projects completed to date across 10 states of America</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b-2 border-black items-center">
                <div className="col-span-12 md:col-span-4">
                    <span className="font-display text-6xl">100%</span>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <span className="font-sans font-bold text-xl uppercase">In-house & Independent</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b-4 border-black items-center">
                <div className="col-span-12 md:col-span-4">
                    <span className="font-display text-6xl">25+</span>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <span className="font-sans font-bold text-xl uppercase">Years hand painting murals, signs and ghost signs.</span>
                </div>
            </div>
        </div>

        {/* Partners */}
        <div className="text-center mb-24">
            <p className="font-sans font-bold uppercase text-sm mb-12">Partners that trusted our work</p>
            <div className="flex flex-wrap justify-between items-center gap-12 opacity-80 grayscale">
                {/* Simulated Logos using text for now, in reality these would be SVGs */}
                <div className="font-display text-2xl uppercase tracking-widest">Live Nation</div>
                <div className="font-display text-2xl uppercase tracking-widest">Cheesecake Factory</div>
                <div className="font-display text-2xl uppercase tracking-widest">North Italia</div>
                <div className="font-display text-2xl uppercase tracking-widest">Culinary Dropout</div>
            </div>
        </div>

        {/* Team */}
        <div>
            <h3 className="font-display text-7xl md:text-9xl uppercase mb-12">Our Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src="https://picsum.photos/600/700?random=201" alt="Andrew Tynes" className="w-full h-[600px] object-cover mb-4 grayscale hover:grayscale-0 transition-all duration-500" />
                    <h4 className="font-display text-4xl uppercase">Andrew Tynes</h4>
                    <span className="font-condensed font-bold uppercase text-sm tracking-widest">Co-Founder</span>
                </div>
                <div>
                    <img src="https://picsum.photos/600/700?random=202" alt="Shane B" className="w-full h-[600px] object-cover mb-4 grayscale hover:grayscale-0 transition-all duration-500" />
                    <h4 className="font-display text-4xl uppercase">Shane B</h4>
                    <span className="font-condensed font-bold uppercase text-sm tracking-widest">Co-Founder</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;