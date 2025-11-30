import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "How do I share my ideas with a custom project?", a: "We start with a discovery call to understand your vision, brand, and space. Then we move to concepts." },
  { q: "Can I collaborate with Mammoth Murals on a unique project?", a: "Absolutely. We love collaboration with architects, designers, and other creatives." },
  { q: "Do you require a deposit for your services?", a: "Yes, we require a 50% deposit to schedule the project and order materials." },
  { q: "Are your signs, murals, and ghost signs water resistant?", a: "Yes, we use high-grade exterior paints and sealants designed to withstand the elements for years." },
  { q: "How long does it take to create a custom sign?", a: "Depending on complexity and size, usually between 1 to 3 weeks once on site." },
  { q: "What kind of paint do you use?", a: "We use professional-grade acrylics and enamels specifically formulated for outdoor longevity." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-mammoth-white py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
           <img src="https://picsum.photos/600/800?random=99" alt="FAQ" className="w-full h-auto object-cover border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]" />
           <div className="mt-8">
              <h3 className="font-sans font-bold text-xl mb-2">Still got unanswered questions?</h3>
              <button className="bg-black text-white px-6 py-3 font-condensed font-bold uppercase tracking-widest hover:bg-mammoth-yellow hover:text-black transition-colors">
                 Chat With Us
              </button>
           </div>
        </div>
        
        <div>
            <h2 className="font-display text-7xl uppercase mb-12 leading-[0.9]">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-black pb-4">
                        <button 
                            className="w-full flex justify-between items-center py-4 text-left group"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="font-condensed font-bold text-lg uppercase tracking-wide group-hover:text-mammoth-blue transition-colors pr-8">
                                {faq.q}
                            </span>
                            <span className="flex-shrink-0">
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </span>
                        </button>
                        <div 
                            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="font-sans text-gray-700 pb-4 pr-8">
                                {faq.a}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
