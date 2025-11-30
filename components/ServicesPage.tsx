import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Scope the selector to mainRef.current to ensure we only target elements inside this component
      const panels = gsap.utils.toArray('.service-panel', mainRef.current);
      panels.forEach((panel: any) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-mammoth-white w-full">
      {/* Hero / Intro Panel */}
      <section className="service-panel min-h-screen relative z-10 bg-[#FDFBF7] pt-32 pb-12 flex flex-col justify-center px-4">
         <div className="container mx-auto">
            <h1 className="font-display text-[18vw] leading-[0.75] uppercase tracking-tighter text-black mb-12 mix-blend-multiply">
                Our Services
            </h1>
            <div className="max-w-4xl border-t-4 border-black pt-8">
                <span className="font-condensed font-bold text-xl uppercase tracking-widest mb-4 block">What We Do</span>
                <p className="font-sans font-medium text-2xl md:text-4xl leading-tight text-black">
                    We specialize in high-impact visual storytelling. From hand-painted murals to custom signage, we bring walls to life with precision, craft, and an obsession with detail.
                </p>
            </div>
         </div>
      </section>

      {/* Murals Panel - Yellow */}
      <section className="service-panel min-h-screen relative z-20 bg-mammoth-yellow text-black flex items-center overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-24">
            <div className="order-2 lg:order-1">
                <span className="font-display text-9xl md:text-[12rem] leading-none mb-4 block opacity-100">(01)</span>
                <h2 className="font-display text-7xl md:text-9xl uppercase leading-[0.85] mb-8">
                    Custom <br/>Murals
                </h2>
                <p className="font-sans text-xl md:text-2xl font-medium mb-8 max-w-lg leading-relaxed">
                    Big, bold, and built for attention. Whether it's a campaign wall, building facade, or an interior statement piece, our murals create a sense of place.
                </p>
                <ul className="space-y-4 font-condensed font-bold uppercase tracking-wider text-lg border-t-2 border-black pt-6">
                    <li className="flex items-center gap-2"><ArrowRight size={20}/> Large Scale Exterior</li>
                    <li className="flex items-center gap-2"><ArrowRight size={20}/> Interior Branding</li>
                    <li className="flex items-center gap-2"><ArrowRight size={20}/> Public Art Installations</li>
                </ul>
            </div>
            <div className="order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full relative">
                <img src="https://picsum.photos/800/1200?random=201" alt="Mural Work" className="w-full h-full object-cover border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]" />
            </div>
        </div>
      </section>

      {/* Signs Panel - Blue */}
      <section className="service-panel min-h-screen relative z-30 bg-mammoth-blue text-black flex items-center overflow-hidden">
         <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-24">
            <div className="order-2 lg:order-1 h-[50vh] lg:h-[80vh] w-full relative">
                <img src="https://picsum.photos/800/1200?random=202" alt="Sign Painting" className="w-full h-full object-cover border-4 border-black shadow-[-15px_15px_0px_0px_rgba(0,0,0,1)]" />
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
                <span className="font-display text-9xl md:text-[12rem] leading-none mb-4 block text-outline opacity-100">(02)</span>
                <h2 className="font-display text-7xl md:text-9xl uppercase leading-[0.85] mb-8">
                    Hand Painted<br/>Signs
                </h2>
                <p className="font-sans text-xl md:text-2xl font-medium mb-8 max-w-lg leading-relaxed">
                    Hand-painted signs bring a level of craft and character that vinyl can't touch. From storefronts and window lettering to interior signage.
                </p>
                <ul className="space-y-4 font-condensed font-bold uppercase tracking-wider text-lg border-t-2 border-black pt-6">
                    <li className="flex items-center gap-2"><ArrowRight size={20}/> Storefront Signage</li>
                    <li className="flex items-center gap-2"><ArrowRight size={20}/> Gold Leaf Window Lettering</li>
                    <li className="flex items-center gap-2"><ArrowRight size={20}/> Wayfinding</li>
                </ul>
            </div>
        </div>
      </section>

       {/* Ghost Signs Panel - Black */}
      <section className="service-panel min-h-screen relative z-40 bg-black text-mammoth-white flex items-center overflow-hidden">
         <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-24">
            <div className="order-2 lg:order-1">
                <span className="font-display text-9xl md:text-[12rem] leading-none mb-4 block text-mammoth-yellow">(03)</span>
                <h2 className="font-display text-7xl md:text-9xl uppercase leading-[0.85] mb-8 text-white">
                    Ghost <br/>Signs
                </h2>
                <p className="font-sans text-xl md:text-2xl font-medium mb-8 max-w-lg leading-relaxed text-gray-400">
                    New signs with old soul. We recreate the charm and patina of vintage advertising with expertly aged paint techniques that tell a story.
                </p>
                <ul className="space-y-4 font-condensed font-bold uppercase tracking-wider text-lg border-t-2 border-zinc-700 pt-6 text-mammoth-yellow">
                    <li className="flex items-center gap-2"><ArrowRight size={20}/> Faux Aging & Distressing</li>
                    <li className="flex items-center gap-2"><ArrowRight size={20}/> Historical Restorations</li>
                    <li className="flex items-center gap-2"><ArrowRight size={20}/> Brick Patina Effects</li>
                </ul>
            </div>
            <div className="order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full relative">
                <img src="https://picsum.photos/800/1200?random=203" alt="Ghost Sign" className="w-full h-full object-cover border-4 border-zinc-800 grayscale" />
            </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;