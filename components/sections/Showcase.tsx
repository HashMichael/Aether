'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const FloatingLens = dynamic(
  () => import('@/components/three/HeadsetScene').then((mod) => ({ default: mod.FloatingLens })),
  { ssr: false }
);

export function Showcase() {
  return (
    <section className="relative py-32 px-6 md:px-10 overflow-hidden bg-obsidian noise">
      <div className="mx-auto max-w-[1500px] grid grid-cols-12 gap-10 items-center">
        <div className="col-span-12 md:col-span-5 order-2 md:order-1">
          <div className="text-[11px] uppercase tracking-[0.4em] text-plasma-glow mb-5">§ The Glass</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
            Pancake optics, <span className="italic text-plasma">reimagined.</span>
          </h2>
          <p className="text-bone/70 text-lg leading-relaxed mb-8">
            Twenty-one stacked elements, each individually polished to a 0.2-micron tolerance — half the thickness of comparable systems, with twice the field of view.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[['120°','field of view'],['21','optical elements'],['0.2µm','polish tolerance'],['43g','per eyepiece']].map(([n,l]) => (
              <div key={l} className="border-l-2 border-iris/40 pl-4">
                <div className="font-display text-4xl text-bone-grad">{n}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-bone/40 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 order-1 md:order-2">
          <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:1.2}}
            className="relative aspect-square rounded-3xl overflow-hidden glass-strong">
            <FloatingLens/>
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] font-mono text-iris-glow glass px-3 py-1.5 rounded-full">● Live · Iridescent Coating</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
