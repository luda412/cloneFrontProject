import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'airbnb',
  description: 'Airbnb clone',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='font.className'>
        <Navbar />
        {props.children}
      </body>
    </html>
  );
}
