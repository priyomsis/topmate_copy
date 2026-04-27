'use client';
import React, { useState, memo, useCallback, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

const categories = [
  'Career',
  'Data & AI',
  'Software',
  'Finance',
  'Marketing',
  'Design',
  'Startup',
  'Management',
  'Sales',
  'Product',
];

const experts = [
  { id: 1, name: "Priya Sharma", role: "Tech Mentor", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop", category: "Career" },
  { id: 2, name: "Rohan Iyer", role: "Data Scientist", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=400&fit=crop", category: "Data & AI" },
  { id: 3, name: "Sneha Kapoor", role: "UX Designer", image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop", category: "Design" },
  { id: 4, name: "Aditya Verma", role: "Product Manager", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop", category: "Product" },
  { id: 5, name: "Neha Reddy", role: "Startup Advisor", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop", category: "Startup" },
  { id: 6, name: "Vikram Singh", role: "DevOps Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", category: "Software" },
  { id: 7, name: "Ananya Desai", role: "AI Specialist", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", category: "Data & AI" },
  { id: 8, name: "Rahul Chatterjee", role: "Marketing Strategist", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop", category: "Marketing" },
  { id: 9, name: "Kavya Nair", role: "Finance Advisor", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop", category: "Finance" },
  { id: 10, name: "Manish Kulkarni", role: "Cloud Architect", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop", category: "Software" },
];

const ExpertCard = memo(({ expert }: { expert: typeof experts[0] }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleEnter = () => {
      gsap.to(card, {
        y: -4,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        borderColor: '#ef444433',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        borderColor: '#f3f4f6',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mouseleave', handleLeave);
    return () => {
      card.removeEventListener('mouseenter', handleEnter);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <Link
      ref={cardRef}
      href="/coming-soon"
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer block transition-colors"
    >
      <div className="aspect-[4/5] bg-gray-50 relative overflow-hidden">
        <Image
          src={expert.image}
          alt={expert.name}
          fill
          sizes="(max-width: 640px) 50vw, 20vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sm text-gray-900 mb-1">{expert.name}</h3>
        <p className="text-xs text-gray-500">{expert.role}</p>
      </div>
    </Link>
  );
});
ExpertCard.displayName = 'ExpertCard';

const PlatformExperts = () => {
  const [selectedCategory, setSelectedCategory] = useState('Career');
  const categoryButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    categories.forEach((category) => {
      const button = categoryButtonRefs.current[category];
      if (!button) return;

      const isSelected = selectedCategory === category;
      gsap.to(button, {
        backgroundColor: isSelected ? '#ef4444' : '#f3f4f6',
        color: isSelected ? '#ffffff' : '#4b5563',
        duration: 0.2,
      });
    });
  }, [selectedCategory]);

  const filteredExperts = useMemo(() => 
    experts.filter(e => e.category === selectedCategory || experts.indexOf(e) < 5), 
    [selectedCategory]
  );

  return (
    <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white" aria-labelledby="experts-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="experts-heading" className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Discover <span className="text-primary italic">Top Tier</span> Experts
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse through our curated list of professionals who use Tpmt to share their knowledge and grow their brand.
          </p>
        </header>

        <nav className="mb-12 overflow-x-auto scrollbar-hide -mx-4 px-4" aria-label="Expert categories">
          <div className="flex justify-start sm:justify-center gap-3 min-w-max pb-2">
            {categories.map((category) => (
              <button
                key={category}
                ref={(node) => { categoryButtonRefs.current[category] = node; }}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PlatformExperts);
