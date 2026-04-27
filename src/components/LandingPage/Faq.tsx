'use client';
import React, { useState, useCallback, memo, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What is Tpmt?',
    answer: 'Tpmt is a powerful platform designed for creators to showcase their services, manage bookings, and connect with their audience seamlessly. It handles the logistics so you can focus on what you do best.',
  },
  {
    id: 2,
    question: 'How do I get started?',
    answer: 'Getting started is simple. Just create your profile, list your services, and share your unique Tpmt link with your audience. You can start accepting bookings in minutes.',
  },
  {
    id: 3,
    question: 'Are there any upfront fees?',
    answer: 'No, Tpmt has no upfront costs or monthly subscriptions. We believe in your success, which is why we only earn when you do. Check out our transparent pricing for more details.',
  },
  {
    id: 4,
    question: 'Can I offer different types of services?',
    answer: 'Absolutely. Whether it is 1:1 sessions, digital products, workshops, or priority DM access, Tpmt supports a wide range of service types to suit your needs.',
  },
  {
    id: 5,
    question: 'How do payments work?',
    answer: 'Payments are processed securely through our integrated payment partners. Your earnings are tracked in your dashboard and can be withdrawn directly to your bank account.',
  },
  {
    id: 6,
    question: 'Is Tpmt available globally?',
    answer: 'Yes, Tpmt is built for creators worldwide. We support multiple currencies and provide a smooth experience for your audience, no matter where they are located.',
  },
];

const FAQItem = memo(({ faq, isOpen, onToggle, answerRef, iconRef }: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  answerRef: (node: HTMLDivElement | null) => void;
  iconRef: (node: SVGSVGElement | null) => void;
}) => (
  <div className="border-b border-gray-200 pb-3 sm:pb-4">
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${faq.id}`}
      className="w-full flex justify-between items-center text-left group py-4"
    >
      <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900 pr-3 sm:pr-4 group-hover:text-[#5ce1e6] transition-colors">
        {faq.question}
      </span>
      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
        <svg
          ref={iconRef}
          className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <div
      id={`faq-answer-${faq.id}`}
      ref={answerRef}
      className="overflow-hidden"
      style={{ height: 0, opacity: 0, marginTop: 0 }}
    >
      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed pb-4">
        {faq.answer}
      </p>
    </div>
  </div>
));
FAQItem.displayName = 'FAQItem';

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const answerRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const iconRefs = useRef<Record<number, SVGSVGElement | null>>({});

  const toggleFAQ = useCallback((id: number) => {
    setOpenId(prev => prev === id ? null : id);
  }, []);

  useEffect(() => {
    faqData.forEach((faq) => {
      const contentEl = answerRefs.current[faq.id];
      const iconEl = iconRefs.current[faq.id];
      const isOpen = openId === faq.id;

      if (contentEl) {
        gsap.to(contentEl, {
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 10 : 0,
          duration: isOpen ? 0.3 : 0.2,
          ease: isOpen ? 'power2.out' : 'power2.inOut',
          overwrite: true,
        });
      }

      if (iconEl) {
        gsap.to(iconEl, {
          rotate: isOpen ? 180 : 0,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: true,
        });
      }
    });
  }, [openId]);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <header className="text-center lg:text-left">
            <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Frequently Asked <br />
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Everything you need to know about Tpmt and how it can help you grow.
            </p>
            <div className="mt-8">
              <span className="text-gray-600 block mb-2">Can&apos;t find the answer?</span>
              <Link
                href="/coming-soon"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all duration-300"
              >
                Reach out to us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </header>

          <div className="space-y-2" role="region" aria-label="FAQ accordion">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
                answerRef={(node) => {
                  answerRefs.current[faq.id] = node;
                }}
                iconRef={(node) => {
                  iconRefs.current[faq.id] = node;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Faq);
