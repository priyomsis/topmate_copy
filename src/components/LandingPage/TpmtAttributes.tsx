'use client';

import React, { useState, memo, useCallback, useRef, useLayoutEffect, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Calendar, Play, BookOpen, Target, User, Star, Briefcase, GraduationCap } from 'lucide-react';
import gsap from 'gsap';

const BookSessionCard = memo(() => (
  <article className='bg-gradient-to-br from-primary/10 to-primary/5 rounded-[2.5rem] p-8 shadow-2xl w-full max-w-md border border-primary/20'>
    <div className='bg-white rounded-3xl p-8 shadow-xl'>
      <header className='flex items-start gap-4 mb-8'>
        <div className='w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0'>
          T
        </div>
        <div className='flex-1'>
          <h3 className='text-lg font-bold text-gray-900'>Book Session</h3>
          <p className='text-sm text-gray-500'>Choose your slot</p>
        </div>
      </header>
      <div className='mb-8'>
        <div className='grid grid-cols-4 gap-2'>
          {[
            { day: 'Mon', date: '12 May', selected: false },
            { day: 'Tue', date: '13 May', selected: true },
            { day: 'Wed', date: '14 May', selected: false },
            { day: 'Thu', date: '15 May', selected: false },
          ].map((item, idx) => (
            <div key={idx} className='text-center'>
              <div className='text-[10px] text-gray-500 mb-1'>{item.day}</div>
              <div className={`rounded-xl py-3 px-1 cursor-pointer transition-all ${item.selected ? 'bg-primary text-white shadow-lg scale-105' : 'bg-gray-50 hover:bg-gray-100 text-gray-800'}`}>
                <div className='text-xs font-bold'>{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href='/coming-soon' className='block w-full bg-gray-900 text-white rounded-xl py-4 font-bold hover:bg-black transition-colors shadow-lg text-center'>
        Confirm Booking
      </Link>
    </div>
  </article>
));
BookSessionCard.displayName = 'BookSessionCard';

const ExpertSupportCard = memo(() => (
  <article className='bg-gradient-to-br from-primary/10 to-primary/5 rounded-[2.5rem] p-8 shadow-2xl w-full max-w-md border border-primary/20'>
    <div className='bg-white rounded-3xl p-8 shadow-xl'>
      <header className='flex items-start gap-4 mb-6'>
        <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-lg flex-shrink-0'>
          <Target className='w-6 h-6' />
        </div>
        <div className='flex-1'>
          <h3 className='text-lg font-bold text-gray-900'>Career Strategy</h3>
          <p className='text-sm text-gray-500'>Plan your next move</p>
        </div>
      </header>
      <ul className='space-y-3 mb-8'>
        {[
          { icon: Briefcase, title: 'Portfolio Review', desc: 'Expert feedback on your work' },
          { icon: User, title: 'Resume Audit', desc: 'Optimize for ATS and recruiters' },
          { icon: Star, title: 'Negotiation Tips', desc: 'Get the package you deserve' },
        ].map((item, idx) => (
          <li key={idx} className='flex items-center gap-3 bg-gray-50 rounded-xl p-3'>
            <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm'>
              <item.icon className='w-5 h-5 text-primary' />
            </div>
            <div>
              <p className='font-bold text-gray-900 text-sm'>{item.title}</p>
              <p className='text-[10px] text-gray-500'>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
      <Link href='/coming-soon' className='block w-full bg-primary text-white rounded-xl py-4 font-bold hover:bg-primary/90 transition-all shadow-lg text-center'>
        Unlock Access
      </Link>
    </div>
  </article>
));
ExpertSupportCard.displayName = 'ExpertSupportCard';

const DefaultCard = memo(({ onSelect }: { onSelect: (id: number) => void }) => (
  <article className='bg-white rounded-[2.5rem] p-8 shadow-2xl w-full max-w-md border border-gray-100'>
    <div className='bg-gray-50 rounded-3xl p-8'>
      <header className='flex items-start gap-4 mb-8'>
        <div className='w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0'>
          T
        </div>
        <div className='flex-1'>
          <h3 className='text-lg font-bold text-gray-900'>Tpmt Features</h3>
          <p className='text-sm text-gray-500'>Click to explore our tools</p>
        </div>
      </header>
      <nav className='space-y-2 mb-6'>
        {[
          { id: 1, icon: Calendar, label: 'Session Scheduling' },
          { id: 2, icon: Target, label: 'Career Strategy' },
          { id: 3, icon: BookOpen, label: 'Resource Library' },
        ].map((item) => (
          <button key={item.id} onClick={() => onSelect(item.id)} className='w-full flex items-center gap-3 bg-white rounded-xl p-4 hover:border-primary/30 border border-transparent transition-all shadow-sm text-left group'>
            <div className='w-8 h-8 bg-gray-50 group-hover:bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors'>
              <item.icon className='w-4 h-4 text-gray-400 group-hover:text-primary' />
            </div>
            <p className='font-bold text-gray-700 text-sm'>{item.label}</p>
          </button>
        ))}
      </nav>
      <p className='text-center text-gray-400 text-xs italic'>Explore how Tpmt empowers your growth</p>
    </div>
  </article>
));
DefaultCard.displayName = 'DefaultCard';

const features = [
  { id: 1, number: '01', title: 'Smart Scheduling', description: 'Our automated booking system handles time zones, payments, and reminders so you can focus on the conversation.' },
  { id: 2, number: '02', title: 'Targeted Preparation', description: 'Access domain-specific mock interviews and resume reviews tailored to your target roles at top companies.' },
  { id: 3, number: '03', title: 'Premium Resources', description: 'Unlock a library of curated playbooks, templates, and mini-courses designed by industry veterans for your success.' },
];

const TpmtAttributes = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    features.forEach((feature) => {
      const isOpen = openAccordion === feature.id;
      const contentEl = contentRefs.current[feature.id];
      if (contentEl) {
        gsap.to(contentEl, {
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 16 : 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    });
  }, [openAccordion]);

  useLayoutEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4 });
    }
  }, [openAccordion]);

  return (
    <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center lg:items-start">
        {/* Left - Card */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
          <div ref={cardRef} className="w-full flex justify-center">
            {openAccordion === 1 ? <BookSessionCard /> : openAccordion === 2 ? <ExpertSupportCard /> : <DefaultCard onSelect={setOpenAccordion} />}
          </div>
        </div>

        {/* Right - List */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <header className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to <br /><span className="text-primary italic">Succeed</span>
            </h2>
          </header>
          <div className="space-y-4">
            {features.map((f) => (
              <div key={f.id} className={`p-6 rounded-2xl border transition-all ${openAccordion === f.id ? 'bg-gray-50 border-primary/20' : 'bg-white border-gray-100 hover:border-primary/10'}`}>
                <button onClick={() => setOpenAccordion(openAccordion === f.id ? null : f.id)} className="w-full flex items-center gap-4 text-left">
                  <span className={`text-xs font-bold ${openAccordion === f.id ? 'text-primary' : 'text-gray-300'}`}>{f.number}</span>
                  <h3 className={`text-xl font-bold ${openAccordion === f.id ? 'text-gray-900' : 'text-gray-500'}`}>{f.title}</h3>
                  <ChevronDown className={`ml-auto w-5 h-5 transition-transform ${openAccordion === f.id ? 'rotate-180 text-primary' : 'text-gray-300'}`} />
                </button>
                <div ref={(el) => { contentRefs.current[f.id] = el; }} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
                  <p className="text-gray-600 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TpmtAttributes);
