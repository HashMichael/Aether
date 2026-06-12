'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const TIERS = [
  { id:'core', n:'Core', p:1499, d:'AETHER headset · woven strap · single battery · USB-C cable.', f:['256 GB storage','8h battery (1 cell)','Standard merino strap','2-year warranty'] },
  { id:'pro',  n:'Pro',  p:1999, d:'For the all-day creator. Twin batteries, premium strap, professional support.', f:['1 TB storage','16h battery (2 cells)','Carbon halo strap','3-year AppleCare-class support','Priority shipping'], featured:true },
  { id:'atelier', n:'Atelier', p:2999, d:'Coachbuilt with titanium accents, Italian leather, hand-finished in Kyoto.', f:['2 TB storage','Lifetime battery exchange','Titanium / leather strap','Concierge onboarding','Numbered edition · 1 of 999'] }
];
export function Preorder() {
  const [tier, setTier] = useState('pro');
  return (
    <section id="preorder" className="relative py-28 md:py-40 px-6 md:px-10 aurora overflow-hidden noise">
      <div className="absolute inset-0 grid-bg opacity-30"/>
      <div className="relative mx-auto max-w-[1500px]">
        <div className="text-[11px] uppercase tracking-[0.4em] text-iris-glow mb-5">§ Reserve · Ships Q3 2026</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-16 max-w-4xl">
          $200 holds yours.<br/><span className="italic text-aurora">Refundable in full.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((t,i) => (
            <motion.button key={t.id} onClick={()=>setTier(t.id)}
              initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7, delay:i*0.08}}
              className={`text-left relative rounded-3xl p-10 transition-all overflow-hidden ${tier===t.id ? 'glass-strong border-iris-glow/60 scale-[1.02]' : 'glass hover:border-iris/40'} ${t.featured ? 'ring-1 ring-plasma-glow/40' : ''}`}>
              {t.featured && <div className="absolute top-5 right-5 text-[9px] uppercase tracking-[0.3em] bg-plasma text-void px-2.5 py-1 rounded-full font-mono">Most Reserved</div>}
              <div className="text-[10px] uppercase tracking-[0.4em] text-iris-glow font-mono mb-3">AETHER</div>
              <div className="font-display text-5xl mb-2">{t.n}</div>
              <div className="font-display text-6xl text-bone-grad mb-2">${t.p.toLocaleString()}</div>
              <div className="text-bone/60 text-sm mb-6">{t.d}</div>
              <ul className="space-y-2.5 mb-8">
                {t.f.map(li => <li key={li} className="flex items-start gap-2 text-sm text-bone/80"><Check className="w-4 h-4 text-neon shrink-0 mt-0.5"/>{li}</li>)}
              </ul>
              <div className={`w-full text-center py-3 rounded-full text-[11px] uppercase tracking-[0.25em] ${tier===t.id ? 'btn-primary' : 'border border-bone/20 text-bone/70'}`}>
                {tier===t.id ? 'Selected — Reserve $200' : 'Select'}
              </div>
            </motion.button>
          ))}
        </div>
        <div className="mt-16 glass-strong rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-iris-glow font-mono mb-2">Ready when you are</div>
            <div className="font-display text-3xl md:text-4xl">Confirm reservation. We&apos;ll do the rest.</div>
            <div className="text-bone/50 text-sm mt-2">No commitment beyond the $200 deposit. Cancel any time before shipment.</div>
          </div>
          <button className="btn-primary px-10 py-5 rounded-full text-xs uppercase tracking-[0.3em] shrink-0">Reserve · $200 ↗</button>
        </div>
      </div>
    </section>
  );
}
