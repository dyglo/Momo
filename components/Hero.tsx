import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(textRef.current.children, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 1, 
          ease: "power4.out",
          delay: 0.2
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="relative bg-mammoth-yellow min-h-screen flex flex-col justify-center px-4 pt-24 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h1 ref={textRef} className="font-display text-[15vw] leading-[0.85] tracking-tighter uppercase text-mammoth-black mix-blend-multiply break-words">
          <div className="inline-block">Murals That</div>
          <div className="inline-block">Make Your</div>
          <div className="inline-block">Business</div>
          <div className="inline-block text-white lg:text-mammoth-black lg:text-stroke">Impossible</div>
          <div className="inline-block">To Ignore.</div>
        </h1>
        
        <div className="mt-12 max-w-xl">
          <p className="font-sans text-lg font-medium leading-relaxed mb-8">
            We paint bold, hand-crafted walls for real estate developers and design-driven brands that stop traffic, spark conversation, and turn every space into a landmark.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-4 font-condensed font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Book a Discovery Call
            </button>
            <button className="border-2 border-black px-8 py-4 font-condensed font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
              See Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Image overlay */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 object-cover opacity-20 pointer-events-none hidden lg:block">
        <img src="https://picsum.photos/800/1200?grayscale" alt="Mural Texture" className="w-full h-full object-cover mix-blend-multiply" />
      </div>
    </section>
  );
};

export default Hero;
