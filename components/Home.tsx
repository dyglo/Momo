import React, { useLayoutEffect, useRef } from 'react';
import Hero from './Hero';
import MuralGenerator from './MuralGenerator';
import WorkGallery from './WorkGallery';
import Services from './Services';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
    onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.stacked-panel');
      panels.forEach((panel: any, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          // marker: true // debug
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} id="home-page">
      <Hero />
      <MuralGenerator />
      <WorkGallery />
      <Services onNavigate={onNavigate} />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;