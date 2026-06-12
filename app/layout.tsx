import './globals.css';
import type { Metadata } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const sans = Inter({ subsets:['latin'], variable:'--font-sans', display:'swap' });
const display = Instrument_Serif({ subsets:['latin'], weight:'400', style:['normal','italic'], variable:'--font-display', display:'swap' });
const mono = JetBrains_Mono({ subsets:['latin'], variable:'--font-mono', display:'swap' });

export const metadata: Metadata = {
  title: 'AETHER — See Beyond The Screen',
  description: 'AETHER VR Generation III. 6K micro-OLED per eye, 120Hz foveated, neural compositor. Reserve from $1,499.',
  openGraph: { title: 'AETHER VR', description: 'A new lens for reality.', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans bg-void text-bone antialiased selection:bg-iris/40 selection:text-bone">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
