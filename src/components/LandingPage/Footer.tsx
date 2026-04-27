import React, { memo } from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 border-t border-gray-100" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12">
          <div className="space-y-6 text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 justify-center sm:justify-start" aria-label="Tpmt Home">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight">Tpmt</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:border-primary transition-colors cursor-default">
              <span className="text-yellow-400" aria-hidden="true">⭐</span>
              <span className="text-sm font-medium">Top Rated Creators</span>
            </div>

            <address className="text-sm text-gray-500 space-y-1 not-italic">
              <p>123 Innovation Hub, Silicon Valley, CA</p>
              <p>©{currentYear} Tpmt Inc. All rights reserved.</p>
            </address>
          </div>

          <nav className="grid grid-cols-2 gap-8 sm:col-span-1 lg:col-start-3" aria-label="Footer navigation">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Platform</h4>
              <Link href="/coming-soon" className="block text-sm text-gray-600 hover:text-primary transition-colors">About Us</Link>
              <Link href="/coming-soon" className="block text-sm text-gray-600 hover:text-primary transition-colors">Contact</Link>
              <Link href="/coming-soon" className="block text-sm text-gray-600 hover:text-primary transition-colors">Careers</Link>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Legal</h4>
              <Link href="/coming-soon" className="block text-sm text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/coming-soon" className="block text-sm text-gray-600 hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/coming-soon" className="block text-sm text-gray-600 hover:text-primary transition-colors">Cookie Policy</Link>
            </div>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 border-t border-gray-100">
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
          </div>
          <p className="text-xs text-gray-400">Made with ❤️ for creators everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
