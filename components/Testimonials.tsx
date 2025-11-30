import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="relative z-40 bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-24">
             <span className="font-condensed font-bold uppercase tracking-widest text-sm md:text-base mb-6 block">
                Hear from our clients
             </span>

             <div className="relative inline-block mx-auto">
                 {/* Top Left Quote */}
                 <span className="absolute -top-8 -left-4 md:-top-14 md:-left-10 text-mammoth-yellow font-display text-[8rem] md:text-[12rem] leading-none z-0 select-none">
                    “
                 </span>
                 
                 {/* Main Title */}
                 <h2 className="relative z-10 font-display text-[13vw] md:text-[180px] lg:text-[220px] leading-[0.8] text-mammoth-black uppercase tracking-tighter">
                    TESTIMONIALS
                 </h2>

                 {/* Bottom Right Quote */}
                 <span className="absolute -bottom-8 -right-4 md:-bottom-14 md:-right-10 text-mammoth-yellow font-display text-[8rem] md:text-[12rem] leading-none z-0 select-none">
                    ”
                 </span>
             </div>

             <p className="max-w-2xl mx-auto mt-12 font-sans font-medium text-lg leading-relaxed">
                From national campaigns to neighborhood landmarks, hear how our clients use hand-painted murals to boost visibility, build trust, and make a bold first impression that lasts.
             </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { name: "Olivia Jenks", role: "Project Supervisor, North Italia", text: "Andrew and Shane turn rough ideas into extraordinary murals. They consistently exceed expectations." },
                { name: "Birmingham Tattoo", role: "Client", text: "Mammoth Murals transformed our vision into a bold storefront that stops people in their tracks. Flawless execution." },
                { name: "Thornton Ratliff", role: "Founder, SRV Housing", text: "Andrew and the team brought Avondale's story to life with precision and energy. Every detail was perfect." }
            ].map((t, i) => (
                <div key={i} className="border-2 border-dashed border-gray-300 p-8 hover:border-black transition-colors group cursor-default">
                    <div className="h-64 mb-6 bg-gray-100 overflow-hidden relative">
                         <img src={`https://picsum.photos/400/500?random=${i + 20}`} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <p className="font-sans font-medium text-lg mb-6 leading-relaxed">"{t.text}"</p>
                    <div className="font-condensed uppercase border-t border-gray-200 pt-4 group-hover:border-black transition-colors">
                        <p className="font-bold text-xl">{t.name}</p>
                        <p className="text-sm text-gray-500 tracking-wider group-hover:text-black transition-colors">{t.role}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;