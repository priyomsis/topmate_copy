'use client';

import React, { useState, memo, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { LuArrowDownRight, LuArrowUpLeft } from 'react-icons/lu';

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Global Reach",
    subtitle: "Connect with audience from 100+ countries.",
    description: "Tpmt provides the infrastructure to reach a global audience. We handle currency conversion and localized payments so you can focus on your content.",
  },
  {
    id: 2,
    title: "1:1 Coaching",
    subtitle: "Deliver personalized value through video sessions.",
    description: "Our integrated video platform allows you to conduct 1:1 sessions without leaving the app. Automated scheduling and reminders keep you organized.",
  },
  {
    id: 3,
    title: "Digital Products",
    subtitle: "Sell ebooks, templates, and courses easily.",
    description: "Host and sell your digital assets directly on your Tpmt profile. Instant delivery to your customers and secure payment processing for you.",
  },
  {
    id: 4,
    title: "Brand Analytics",
    subtitle: "Track your growth with detailed insights.",
    description: "Understand your audience better with Tpmt's advanced analytics. Track clicks, conversions, and revenue growth in real-time through your dashboard.",
  },
  {
    id: 5,
    title: "Seamless Payments",
    subtitle: "Get paid instantly to your bank account.",
    description: "We partner with leading payment processors to ensure you get paid on time, every time. No more chasing clients or managing complex invoices.",
  },
  {
    id: 6,
    title: "Priority Support",
    subtitle: "We are here to help you succeed 24/7.",
    description: "Our dedicated support team is always available to help you with any technical or business questions. Your success is our top priority.",
  }
];

const FlipCard = memo(({ card, index }: { card: CardData; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardInnerRef.current) return;
    gsap.to(cardInnerRef.current, {
      rotateY: isFlipped ? 180 : 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [isFlipped]);

  const handleFlip = useCallback(() => setIsFlipped(prev => !prev), []);

  return (
    <div ref={cardRef} className="relative group">
      <div
        className="w-full h-[260px] perspective-1000 cursor-pointer"
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleFlip()}
      >
        <div 
          ref={cardInnerRef} 
          className="relative w-full h-full will-change-transform"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Side */}
          <div 
            className="absolute inset-0 rounded-3xl p-8 flex flex-col justify-between bg-white border border-gray-100 shadow-lg group-hover:border-primary/20 transition-all duration-300"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                {card.subtitle}
              </p>
            </div>
            <div className="w-12 h-1 bg-gray-100 rounded-full group-hover:bg-primary transition-colors" />
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 rotate-y-180 rounded-3xl p-8 flex flex-col justify-center text-center bg-primary"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="text-white text-base font-medium leading-relaxed italic opacity-90">
              Details to be added soon
            </p>
          </div>
        </div>
      </div>

      {/* External Arrow Button */}
      <button
        onClick={handleFlip}
        className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-10 ${
          isFlipped ? 'bg-gray-900 text-white' : 'bg-primary text-white shadow-primary/30'
        }`}
      >
        {isFlipped ? <LuArrowUpLeft className="w-5 h-5" /> : <LuArrowDownRight className="w-5 h-5" />}
      </button>
    </div>
  );
});

FlipCard.displayName = 'FlipCard';

const EarnConvert = () => {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-gray-50" aria-labelledby="earn-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 px-2">
          <h2 id="earn-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Scale your <span className="text-primary italic">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to turn your expertise into a sustainable brand with <span className="font-bold text-primary">Tpmt</span>
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          {cards.map((card, index) => (
            <FlipCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(EarnConvert);
