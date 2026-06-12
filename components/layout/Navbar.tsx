'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const LINKS = [['#features','Features'],['#vision','Vision'],['#tech','Tech'],['#reviews','Press'],['#preorder','Reserve']];
export function Navbar() {
  const [s, setS] = useState(false);
  useEffect(() => { const f = () => setS(window.scrollY > 16); f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f); }, []);
  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all', s ? 'glass-strong py-3' : 'py-5')}>
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-iris to-plasma blur-md opacity-70"/>
            <div className="relative h-8 w-8 rounded-full border border-iris-glow/60 grid place-items-center text-xs font-mono">Æ</div>
          </div>
          <div className="font-display text-2xl tracking-[0.25em]">AETHER</div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-bone/70">
          {LINKS.map(([h,l]) => <a key={l} href={h} className="hover:text-bone transition-colors">{l}</a>)}
        </nav>
        <a href="#preorder" className="btn-primary px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] rounded-full">Reserve · $1,499</a>
      </div>
    </header>
  );
}
