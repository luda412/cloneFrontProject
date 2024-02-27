import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'airbnb',
  description: 'Airbnb clone',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{props.children}</body>
    </html>
  );
}
