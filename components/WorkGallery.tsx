import React, { useEffect, useRef } from 'react';
import { MuralProject } from '../types';
import gsap from 'gsap';

const projects: MuralProject[] = [
  { id: 1, title: "The Magic City", location: "Live Nation", year: "2025", imageUrl: "https://picsum.photos/800/600?random=1", tags: ["Murals"] },
  { id: 2, title: "Girl With The Pearl Earring", location: "Downtown District", year: "2025", imageUrl: "https://picsum.photos/800/600?random=2", tags: ["Murals"] },
  { id: 3, title: "Axel Row", location: "Midtown", year: "2022", imageUrl: "https://picsum.photos/800/600?random=3", tags: ["Murals"] },
  { id: 4, title: "Culinary Dropout", location: "Arts Center", year: "2024", imageUrl: "https://picsum.photos/800/600?random=4", tags: ["Murals"] },
  { id: 5, title: "Southeastern", location: "Ghost Signs", year: "2023", imageUrl: "https://picsum.photos/800/600?random=5", tags: ["Ghost Signs"] },
  { id: 6, title: "Mountaintop", location: "Retail Park", year: "2025", imageUrl: "https://picsum.photos/800/600?random=6", tags: ["Signs"] },
];

const WorkGallery: React.FC = () => {
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cloudRef.current) {
        // Create a living breathing cloud effect
        gsap.to(cloudRef.current, {
          scaleX: 1.15,
          scaleY: 1.1,
          filter: "blur(50px)",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="stacked-panel min-h-screen relative z-10 bg-[#FDFBF7] py-0 pb-24 overflow-hidden flex flex-col">
      {/* Redesigned Header Section */}
      <div className="relative w-full pt-32 pb-12 flex justify-center items-center overflow-hidden select-none">
        
        {/* Massive Background Typography */}
        <h2 className="font-display text-[22vw] leading-[0.7] text-black uppercase tracking-tighter text-center scale-y-110 origin-center z-0">
          OUR WORK
        </h2>

        {/* Animated Cloud Overlay Container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-10 pointer-events-none">
             {/* The Cloud Blur Layer */}
             <div 
                ref={cloudRef}
                className="w-[90%] md:w-[60%] h-[40%] bg-[#FDFBF7] blur-[40px] rounded-[50%] opacity-90 absolute"
            ></div>
            
            {/* The Text Content on top of the Cloud */}
            <div className="relative z-20 text-center max-w-[90%] md:max-w-3xl px-6">
                <p className="font-sans font-bold text-xl md:text-3xl lg:text-4xl leading-tight text-black text-center tracking-tight">
                Don’t let blank walls waste potential.<br className="hidden md:block"/>
                See how our clients turn empty space into<br className="hidden md:block"/>
                buzz, foot traffic, and business results.
                </p>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex-grow relative z-20 bg-[#FDFBF7]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-mammoth-yellow opacity-0 group-hover:opacity-20 transition-opacity z-10 duration-300"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-end border-b-2 border-black pb-2">
                <div>
                  <h3 className="font-display text-4xl uppercase">{project.title}</h3>
                  <p className="font-sans font-bold text-sm uppercase tracking-widest text-gray-600">{project.location}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-condensed border border-black px-2 py-1 text-xs font-bold uppercase mb-1">{project.tags[0]}</span>
                  <span className="font-condensed font-bold text-lg">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t-4 border-black pt-8 flex justify-between items-center group cursor-pointer hover:bg-black hover:text-white transition-colors p-4 mb-24">
            <span className="font-display text-4xl md:text-6xl uppercase">View All Work (42)</span>
            <span className="font-display text-4xl md:text-6xl transform group-hover:translate-x-4 transition-transform">→→→</span>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;