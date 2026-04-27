'use client';

import React, { useEffect, useRef, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const NewOnTpmt = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;

    if (section && card) {
      const ctx = gsap.context(() => {
        gsap.set([section, card], { opacity: 0, y: 30 });

        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        });
      }, section);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white" aria-labelledby="new-on-tpmt-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="new-on-tpmt-heading" className="text-gray-900 text-4xl md:text-5xl font-light mb-12">
          New on <span className="text-primary font-bold">Tpmt</span>
        </h2>

        <article
          ref={cardRef}
          className="relative h-[25rem] md:h-[30rem] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-900 group"
        >
          {/* Background Image / Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
          </div>

          <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20">
            <div className="mb-10">
              <h3 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Creator <span className="text-primary italic">Awards</span>
              </h3>
              <p className="text-white text-xl md:text-3xl font-light mt-4 max-w-xl">
                Celebrating the most impactful voices of <span className="text-primary font-semibold">2026</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/coming-soon" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                View Winners
              </Link>
              <Link href="/coming-soon" className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                Learn More
              </Link>
            </div>
          </div>

          {/* Branding Badge */}
          <div className="absolute right-8 md:right-16 bottom-8 md:bottom-12 z-20">
            <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">T</div>
              <div>
                <p className="text-[10px] text-primary font-bold tracking-widest uppercase">Annual Review</p>
                <p className="text-lg font-bold text-white">Tpmt</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default memo(NewOnTpmt);
