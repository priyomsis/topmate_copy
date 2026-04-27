'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(
          cardsRef.current?.children || [],
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15 },
          '-=0.3'
        )
        .fromTo(badgeRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.2');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-gray-50" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2
          ref={headingRef}
          id="pricing-heading"
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 opacity-0"
        >
          We earn only when <span className="text-primary">you earn</span>
        </h2>
        <p ref={subtitleRef} className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0">
          Transparent pricing with no hidden fees. Focus on growing your audience while we handle the rest.
          <br />
          <span className="text-gray-400 text-sm mt-4 block italic">No credit card required • No upfront fees • No recurring charges</span>
        </p>
      </div>

      {/* Pricing Cards */}
      <div ref={cardsRef} className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Card 1 - Standard */}
        <article className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden opacity-0 flex flex-col group hover:border-primary/30 transition-colors">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" aria-hidden="true"></div>
          <div className="relative z-10">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Standard</div>
            <h3 className="text-6xl font-bold text-gray-900 mb-4">10%</h3>
            <p className="text-gray-600 text-lg mb-8">
              On every booking or sale made through your personal Tpmt profile or shared links.
            </p>
            <ul className="space-y-3 mb-10 text-gray-500">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Instant Payouts
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Custom Profile URL
              </li>
            </ul>
          </div>
        </article>

        {/* Card 2 - Marketplace */}
        <article className="bg-gray-900 rounded-3xl p-10 shadow-2xl border border-gray-800 relative overflow-hidden opacity-0 flex flex-col group transform md:-translate-y-4">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="relative z-10 text-white">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full mb-4 border border-primary/20">Recommended</div>
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Marketplace</div>
            <h3 className="text-6xl font-bold text-primary mb-4">20%</h3>
            <p className="text-gray-300 text-lg mb-8">
              When new customers discover and book you directly through the Tpmt Marketplace.
            </p>
            <ul className="space-y-3 mb-10 text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Priority Listing
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                AI Search Optimization
              </li>
            </ul>
          </div>
          <Link href="/coming-soon" className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-black px-6 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-colors">
            Get Started
            <LuArrowRight />
          </Link>
        </article>

        {/* Card 3 - Enterprise */}
        <article className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden opacity-0 flex flex-col group hover:border-orange-500/30 transition-colors">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors" aria-hidden="true"></div>
          <div className="relative z-10">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Enterprise</div>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Custom</h3>
            <p className="text-gray-600 text-lg mb-8">
              Processing high volume or need specialized infrastructure? We offer tailored plans for top creators.
            </p>
            <ul className="space-y-3 mb-10 text-gray-500">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Dedicated Manager
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                0% Transaction Fees*
              </li>
            </ul>
          </div>
          <Link href="/coming-soon" className="mt-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-4 rounded-2xl font-bold hover:bg-black transition-colors">
            Contact Sales
            <LuArrowRight />
          </Link>
        </article>
      </div>

      {/* Stats Badge */}
      <div
        ref={badgeRef}
        className="max-w-2xl mx-auto mt-20 bg-white shadow-lg border border-primary/20 rounded-2xl p-8 text-center opacity-0"
      >
        <p className="text-xl font-medium text-gray-600">
          Join <span className="font-bold text-gray-900">50,000+</span> creators who trust <span className="font-bold text-primary">Tpmt</span> to power their business.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
