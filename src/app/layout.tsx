import '@/styles/globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/nav/Navbar';

export const metadata: Metadata = {
  title: 'Tpmt — Where Creators Meet Their Audience',
  description:
    'Tpmt connects learners with experienced creators for mentorship, career guidance, and skill growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-dark text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
