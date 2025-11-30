import React from 'react';

interface ServicesProps {
    onNavigate: (path: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section id="services" className="stacked-panel min-h-screen relative z-20 bg-mammoth-blue py-24 text-black flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
             <span className="font-condensed font-bold text-xl border-2 border-black px-4 py-2 inline-block mb-6 uppercase">25+ Years Experience</span>
             <h2 className="font-display text-5xl uppercase leading-tight">
               Here's how we help you transform empty walls into local landmarks and lasting brand impressions.
             </h2>
          </div>
          <div className="hidden lg:block">
            {/* Optional decorative element */}
          </div>
        </div>

        <div className="flex flex-col border-t-4 border-black">
          {['Murals', 'Signs', 'Ghost Signs'].map((service, index) => (
            <div 
                key={index} 
                onClick={() => onNavigate('/services')}
                className="group border-b-4 border-black py-12 flex flex-col md:flex-row items-baseline md:items-center justify-between hover:bg-black hover:text-white transition-colors px-4 cursor-pointer"
            >
              <div className="flex items-baseline gap-8">
                <span className="font-display text-8xl text-outline group-hover:text-outline-white transition-all">0{index + 1}.</span>
                <span className="font-display text-8xl uppercase">{service}</span>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <img src={`https://picsum.photos/300/150?random=${index + 10}`} alt={service} className="w-64 h-32 object-cover grayscale" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <div 
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center gap-4 font-display text-3xl uppercase border-b-2 border-black pb-1 hover:gap-8 transition-all cursor-pointer"
            >
                <span>→→→</span>
                <span>Learn About Our Services</span>
                <span>←←←</span>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Services;