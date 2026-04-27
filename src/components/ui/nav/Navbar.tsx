'use client';

import React, { useState, useEffect, useRef, memo } from 'react';
import Link from "next/link";
import gsap from "gsap";
import { LuChevronDown, LuMenu, LuX, LuUserPlus } from "react-icons/lu";

const useCases = [
  { label: 'For Creators', href: '#' },
  { label: 'For Mentors', href: '#' },
  { label: 'For Coaches', href: '#' },
  { label: 'For Experts', href: '#' },
];

const dashboards = [
  { label: 'Creator Dashboard', href: '/dashboard' },
  { label: 'Admin Panel', href: '/dashboard' },
];

const Navbar = () => {
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [isDashboardsOpen, setIsDashboardsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Dummy auth state for frontend-only
  const isAuthenticated = false;
  
  const navRef = useRef<HTMLElement>(null);
  const navStateRef = useRef<'default' | 'expanded'>('default');

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.set(nav, {
      maxWidth: '64rem',
      paddingTop: 12,
      paddingBottom: 12,
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nextState = currentScrollY < 50 ? 'default' : 'expanded';

      if (nextState !== navStateRef.current) {
        navStateRef.current = nextState;
        if (nextState === 'expanded') {
          gsap.to(nav, {
            maxWidth: '56rem',
            paddingTop: 8,
            paddingBottom: 8,
            duration: 0.4,
            ease: 'power2.out',
          });
        } else {
          gsap.to(nav, {
            maxWidth: '64rem',
            paddingTop: 12,
            paddingBottom: 12,
            duration: 0.4,
            ease: 'power2.out',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4'>
        <nav
          ref={navRef}
          className='mx-auto bg-white/80 backdrop-blur-xl border border-gray-100 flex items-center justify-between shadow-lg rounded-full px-8 py-3 transition-all'
        >
          {/* Logo */}
          <div className='flex gap-8 items-center'>
            <Link href="/" className='text-2xl font-black text-gray-900 tracking-tighter'>
              Tpmt
            </Link>

            {/* Desktop Links */}
            <div className='hidden lg:flex items-center gap-6'>
              <div className='relative'>
                <button
                  className='flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-primary transition-colors'
                  onMouseEnter={() => setIsUseCasesOpen(true)}
                  onMouseLeave={() => setIsUseCasesOpen(false)}
                >
                  Solutions <LuChevronDown className={`w-4 h-4 transition-transform ${isUseCasesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isUseCasesOpen && (
                  <div 
                    className='absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-50 py-2 min-w-[200px]'
                    onMouseEnter={() => setIsUseCasesOpen(true)}
                    onMouseLeave={() => setIsUseCasesOpen(false)}
                  >
                    {useCases.map((item, i) => (
                      <Link key={i} href={item.href} className='block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary'>{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="#" className='text-sm font-bold text-gray-600 hover:text-primary transition-colors'>Pricing</Link>
              <Link href="#" className='text-sm font-bold text-gray-600 hover:text-primary transition-colors'>About</Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className='hidden md:flex gap-4 items-center'>
            <Link href="/coming-soon" className='text-sm font-bold text-gray-600 hover:text-primary transition-colors'>
              Login
            </Link>
            <Link
              href="/coming-soon"
              className='bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/20'
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className='md:hidden text-gray-900' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <LuX className='w-6 h-6' /> : <LuMenu className='w-6 h-6' />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 bg-white z-40 md:hidden pt-24 px-6 flex flex-col gap-8'>
          <nav className='flex flex-col gap-6'>
            <p className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Solutions</p>
            {useCases.map((item, i) => (
              <Link key={i} href={item.href} className='text-2xl font-bold text-gray-900'>{item.label}</Link>
            ))}
            <div className='h-px bg-gray-100 my-4' />
            <Link href="#" className='text-2xl font-bold text-gray-900'>Pricing</Link>
            <Link href="#" className='text-2xl font-bold text-gray-900'>About</Link>
          </nav>
          <div className='mt-auto pb-12 flex flex-col gap-4'>
            <Link href="/coming-soon" className='w-full py-4 text-center font-bold text-gray-600 border border-gray-100 rounded-2xl'>Login</Link>
            <Link href="/coming-soon" className='w-full py-4 text-center font-bold text-white bg-primary rounded-2xl shadow-xl shadow-primary/20'>Get Started</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Navbar);
