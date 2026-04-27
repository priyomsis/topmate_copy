'use client';

import React, { memo, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Tpmt helped me land my dream job at a top tech firm. The 1:1 sessions were a game changer for my interview preparation.",
    author: "James Wilson",
    role: "Software Engineer",
  },
  {
    id: 2,
    text: "The career guidance I received was incredibly practical. It's not just theory; it's real-world advice from people who are actually doing the work.",
    author: "Emma Thompson",
    role: "Product Manager",
  },
  {
    id: 3,
    text: "As a creator, Tpmt has given me a seamless way to monetize my expertise while helping others. The platform is intuitive and reliable.",
    author: "David Chen",
    role: "Tech Content Creator",
  },
  {
    id: 4,
    text: "The resource library is a goldmine. I've used several templates and playbooks that saved me dozens of hours of work.",
    author: "Sophia Martinez",
    role: "Marketing Specialist",
  },
  {
    id: 5,
    text: "Highly recommend Tpmt for anyone looking to level up their career. The mentors are genuinely invested in your success.",
    author: "Robert Brown",
    role: "UX Designer",
  },
  {
    id: 6,
    text: "I was struggling with my resume until I had a review session on Tpmt. My response rate from recruiters doubled overnight.",
    author: "Alice Johnson",
    role: "Data Analyst",
  },
];

const TestimonialCard = memo(({ testimonial }: { testimonial: Testimonial }) => (
  <article
    className="bg-primary rounded-[2rem] p-8 h-[260px] flex flex-col justify-between shadow-xl shadow-primary/10 hover:scale-[1.02] transition-all group"
  >
    <div className="mb-4">
      <FaQuoteLeft className="text-white/30 text-xl mb-4" />
      <p className="text-white text-sm leading-relaxed line-clamp-4 italic">{testimonial.text}</p>
      <div className="flex justify-end mt-4">
        <FaQuoteRight className="text-white/30 text-xl" />
      </div>
    </div>

    <div className="mt-auto">
      <p className="text-white text-sm font-bold">
        {testimonial.author}
      </p>
      <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider">
        {testimonial.role}
      </p>
    </div>
  </article>
));
TestimonialCard.displayName = 'TestimonialCard';

const MarqueeRow = memo(({ items, direction, speed = 40 }: { items: Testimonial[], direction: 'left' | 'right', speed?: number }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const cardWidth = 380;
  const gap = 24;

  useEffect(() => {
    if (!rowRef.current) return;
    const spacing = cardWidth + gap;
    const ctx = gsap.context(() => {
      const boxes = rowRef.current!.children;
      const totalWidth = boxes.length * spacing;

      gsap.set(boxes, {
        position: 'absolute',
        width: cardWidth,
        x: (i: number) => i * spacing,
      });

      const wrap = gsap.utils.wrap(-spacing, totalWidth - spacing);

      gsap.to(gsap.utils.toArray(boxes), {
        duration: speed,
        ease: 'none',
        repeat: -1,
        x: direction === 'left' ? `-=${totalWidth}` : `+=${totalWidth}`,
        modifiers: {
          x: (x: string) => wrap(parseFloat(x)) + 'px',
        },
      });
    }, rowRef);
    return () => ctx.revert();
  }, [direction, speed]);

  return (
    <div className="relative overflow-hidden h-[280px]" style={{
      maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
    }}>
      <div ref={rowRef} className="flex gap-6 h-full">
        {items.map((t, i) => (
          <div key={`${t.id}-${i}`} className="flex-shrink-0">
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>
    </div>
  );
});
MarqueeRow.displayName = 'MarqueeRow';

const Reviews = () => {
  const duplicate = (arr: Testimonial[], times: number) => {
    const result: Testimonial[] = [];
    for (let t = 0; t < times; t++) result.push(...arr);
    return result;
  };

  const row1 = duplicate(testimonials.slice(0, 3), 10);
  const row2 = duplicate(testimonials.slice(3), 10);

  return (
    <section className="py-24 bg-white overflow-hidden relative z-10" aria-labelledby="review-heading">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 id="review-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Trusted by <span className="text-primary italic">Thousand</span> of Creators
        </h2>
      </div>

      <div className="space-y-8">
        <MarqueeRow items={row1} direction="left" speed={60} />
        <MarqueeRow items={row2} direction="right" speed={50} />
      </div>
    </section>
  );
};

export default memo(Reviews);
