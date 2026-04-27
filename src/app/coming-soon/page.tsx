import React from 'react';
import Link from 'next/link';
import { LuArrowLeft } from 'react-icons/lu';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-6xl font-bold text-gray-900">
          Coming <span className="text-primary italic">Soon</span>
        </h1>
        <p className="text-gray-500 text-lg">
          We are working hard to bring you this feature. Please check back later!
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
        >
          <LuArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
