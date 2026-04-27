'use client';

import React, { useEffect, useMemo, useRef, memo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import { gsap } from 'gsap';

const profiles = [
  {
    name: 'Priya Sharma',
    role: 'Tech Mentor',
    badge: 'Verified',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&auto=format&q=80',
  },
  {
    name: 'Rohan Iyer',
    role: 'Data Scientist',
    badge: 'Featured',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=400&fit=crop&auto=format&q=80',
  },
  {
    name: 'Sneha Kapoor',
    role: 'UX Designer',
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop&auto=format&q=80',
  },
  {
    name: 'Aditya Verma',
    role: 'Product Manager',
    badge: 'Expert',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format&q=80',
  },
  {
    name: 'Neha Reddy',
    role: 'Startup Advisor',
    badge: 'Trending',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format&q=80',
  },
  {
    name: 'Vikram Singh',
    role: 'DevOps Engineer',
    badge: 'Top Rated',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format&q=80',
  },
  {
    name: 'Ananya Desai',
    role: 'AI Specialist',
    badge: 'Featured',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format&q=80',
  },
  {
    name: 'Rahul Chatterjee',
    role: 'Marketing Strategist',
    badge: 'Verified',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&auto=format&q=80',
  },
  {
    name: 'Kavya Nair',
    role: 'Finance Advisor',
    badge: 'Popular',
    image:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&auto=format&q=80',
  },
  {
    name: 'Manish Kulkarni',
    role: 'Cloud Architect',
    badge: 'Expert',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format&q=80',
  },
  {
    name: 'Ishita Banerjee',
    role: 'Content Strategist',
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&auto=format&q=80',
  },
];

export { profiles };

const ProfileCard = memo(
  ({
    name,
    role,
    badge,
    image,
  }: {
    name: string;
    role: string;
    badge: string;
    image?: string;
  }) => (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden w-[200px] lg:w-[240px] flex-shrink-0 mb-4 lg:mb-5 will-change-transform">
      <div className="h-28 lg:h-36 relative flex items-end justify-center pb-2 bg-gray-200">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="240px"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 text-gray-500 text-3xl font-bold">
            {name.charAt(0)}
          </div>
        )}
        <span className="absolute top-2 right-2 lg:top-3 lg:right-3 bg-primary text-black text-[9px] lg:text-[10px] px-2 py-1 lg:px-2.5 rounded-full font-semibold shadow-sm z-20">
          {badge}
        </span>
      </div>
      <div className="p-2.5 lg:p-3 pt-2 bg-white relative z-10">
        <h3 className="font-semibold text-gray-900 text-xs lg:text-sm truncate">
          {name}
        </h3>
        <p className="text-gray-500 text-[10px] lg:text-xs truncate">{role}</p>
      </div>
    </article>
  )
);
ProfileCard.displayName = 'ProfileCard';

function Hero() {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const nextIsMobile = window.innerWidth < 1024;
      setIsMobile((previousIsMobile) =>
        previousIsMobile === nextIsMobile ? previousIsMobile : nextIsMobile
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (
      isMobile ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      if (column1Ref.current) {
        const height = column1Ref.current.scrollHeight / 2;

        gsap.to(column1Ref.current, {
          y: -height,
          duration: 20,
          ease: 'none',
          repeat: -1,
        });
      }

      if (column2Ref.current) {
        const height = column2Ref.current.scrollHeight / 2;

        gsap.fromTo(
          column2Ref.current,
          { y: -height },
          {
            y: 0,
            duration: 20,
            ease: 'none',
            repeat: -1,
          }
        );
      }
    });
    return () => ctx.revert();
  }, [isMobile]);

  const { column1Profiles, column2Profiles } = useMemo(() => {
    const half = Math.ceil(profiles.length / 2);
    return {
      column1Profiles: [
        ...profiles.slice(0, half),
        ...profiles.slice(0, half),
      ],
      column2Profiles: [...profiles.slice(half), ...profiles.slice(half)],
    };
  }, []);

  return (
    <section
      className="min-h-[100svh] lg:h-[85vh] pt-20 sm:pt-24 lg:mt-[5rem] lg:pt-0 flex flex-col lg:flex-row justify-center lg:justify-between overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24"
      aria-labelledby="hero-heading"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 lg:py-0">
        <div>
          <h1
            id="hero-heading"
            className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight text-center lg:text-left"
          >
            Where Creators Meet
            <br />
            <span className="font-bold text-primary">Their Audience</span>
          </h1>
          <p className="font-medium text-lg sm:text-xl md:text-2xl py-4 lg:py-5 text-gray-600 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            Tpmt connects ambitious learners with experienced creators for
            mentorship, career guidance, and skill growth — all in one powerful
            platform.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 justify-center lg:justify-start">
          <Link
            href="/coming-soon"
            className="bg-primary text-black text-base sm:text-lg px-5 sm:px-6 py-3 sm:py-4 rounded-xl h-fit flex items-center gap-4 sm:gap-8 hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center cursor-pointer"
          >
            Book Your First Session
            <span
              className="bg-black text-white rounded-lg p-1.5 sm:p-2"
              aria-hidden="true"
            >
              <LuArrowRight />
            </span>
          </Link>
        </div>
      </div>

      {/* Profile Cards — hidden on mobile/tablet, visible on desktop */}
      <aside
        className="hidden lg:flex w-1/2 justify-center items-stretch gap-4 xl:gap-5 h-full"
        aria-label="Featured experts"
      >
        <div className="h-full overflow-hidden">
          <div ref={column1Ref} className="flex flex-col">
            {column1Profiles.map((profile, index) => (
              <ProfileCard key={`col1-${index}`} {...profile} />
            ))}
          </div>
        </div>
        <div className="h-full overflow-hidden">
          <div ref={column2Ref} className="flex flex-col">
            {column2Profiles.map((profile, index) => (
              <ProfileCard key={`col2-${index}`} {...profile} />
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}

export default memo(Hero);

