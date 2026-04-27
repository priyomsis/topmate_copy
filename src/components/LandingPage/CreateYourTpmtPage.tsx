'use client';

import React, { memo, useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { LuArrowRight, LuCalendar, LuStar, LuTrendingUp, LuUsers, LuBookOpen, LuBriefcase } from 'react-icons/lu';

const slides = [
  {
    id: 'seeker',
    headline: 'Your Dream Career Starts with the',
    highlight: 'Right Advice',
    sub: 'Explore top experts, book personalized sessions, and get the roadmap you need to succeed on Tpmt.',
    cta: 'Book Your First Session',
    href: '/coming-soon',
  },
  {
    id: 'creator',
    headline: 'Share Your Expertise and Build',
    highlight: 'Your Brand',
    sub: 'Create your Tpmt profile in minutes, set your own pricing, and start helping others grow while you earn.',
    cta: 'Start Creating Now',
    href: '/coming-soon',
  },
];

const SeekerCard = () => (
  <div className='relative w-full bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100'>
    <div className='bg-gray-50 rounded-3xl p-6 mb-6 shadow-sm'>
      <div className='flex items-center gap-4 mb-4'>
        <div className='w-16 h-16 rounded-full bg-primary/10 border-4 border-white flex items-center justify-center text-primary font-bold text-2xl shadow-sm'>
          S
        </div>
        <div>
          <h3 className='text-lg font-bold text-gray-900'>Sarah Jenkins</h3>
          <p className='text-xs text-primary font-bold uppercase tracking-wider'>Senior Design Lead</p>
          <div className='flex items-center gap-1 mt-1'>
            {[...Array(5)].map((_, i) => <LuStar key={i} className='w-3 h-3 text-amber-400 fill-amber-400' />)}
            <span className='text-[10px] text-gray-400 ml-1'>5.0 (243)</span>
          </div>
        </div>
      </div>
      <div className='flex gap-2'>
        {['Portfolio', 'Interview', 'Career'].map(tag => (
          <span key={tag} className='text-[10px] bg-white text-gray-600 px-3 py-1 rounded-full font-bold shadow-sm border border-gray-50'>{tag}</span>
        ))}
      </div>
    </div>
    <div className='grid grid-cols-2 gap-4'>
      <div className='bg-primary rounded-2xl p-4 flex flex-col items-center justify-center text-white shadow-lg shadow-primary/20'>
        <LuCalendar className='w-6 h-6 mb-1' />
        <span className='text-[10px] font-bold'>Book Session</span>
      </div>
      <div className='space-y-2'>
        <div className='bg-white rounded-xl p-3 border border-gray-50 shadow-sm flex items-center gap-2'>
          <div className='w-2 h-2 rounded-full bg-green-500' />
          <span className='text-[10px] font-bold text-gray-700'>Confirmed</span>
        </div>
        <div className='bg-white rounded-xl p-3 border border-gray-50 shadow-sm flex items-center gap-2 opacity-50'>
          <div className='w-2 h-2 rounded-full bg-primary' />
          <span className='text-[10px] font-bold text-gray-400'>Pending</span>
        </div>
      </div>
    </div>
  </div>
);

const CreatorCard = () => (
  <div className='relative w-full bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100'>
    <div className='bg-gray-900 rounded-3xl p-8 mb-6 shadow-xl'>
      <div className='flex justify-between items-start mb-6'>
        <div>
          <p className='text-xs text-gray-400 font-medium'>Total Earnings</p>
          <p className='text-3xl font-bold text-white'>$12,450</p>
        </div>
        <div className='w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40'>
          <LuTrendingUp className='w-6 h-6 text-white' />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {[
          { icon: LuUsers, val: '150+', label: 'Sessions' },
          { icon: LuStar, val: '4.9', label: 'Rating' },
          { icon: LuBriefcase, val: '12', label: 'Products' },
        ].map((item, idx) => (
          <div key={idx} className='bg-white/5 rounded-xl p-2 text-center border border-white/5'>
            <item.icon className='w-4 h-4 text-primary mx-auto mb-1' />
            <p className='text-sm font-bold text-white'>{item.val}</p>
            <p className='text-[9px] text-gray-500'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    <div className='flex gap-4'>
      <div className='flex-1 bg-gray-50 rounded-2xl p-4 flex items-center gap-3 border border-gray-100'>
        <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold'>T</div>
        <div className='text-[10px]'>
          <p className='font-bold text-gray-900'>My Tpmt Page</p>
          <p className='text-gray-400'>tpmt.com/alex</p>
        </div>
      </div>
    </div>
  </div>
);

const CreateYourTpmtPage = () => {
  const [active, setActive] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    if (textRef.current && cardRef.current) {
      gsap.fromTo([textRef.current, cardRef.current], 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
      );
    }
  }, [active]);

  const slide = slides[active];

  return (
    <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left - Content */}
        <div ref={textRef} className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            {slide.headline} <br />
            <span className="text-primary italic">{slide.highlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
            {slide.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href={slide.href} className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
              {slide.cta} <LuArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex gap-3 justify-center lg:justify-start">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${active === i ? 'w-12 bg-primary' : 'w-2 bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

        {/* Right - Preview */}
        <div ref={cardRef} className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md">
            {active === 0 ? <SeekerCard /> : <CreatorCard />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(CreateYourTpmtPage);
