'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const HeadsetScene = dynamic(
  () => import('@/components/three/HeadsetScene').then((mod) => ({ default: mod.HeadsetScene })),
  { ssr: false }
);


export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 aurora overflow-hidden noise">
      <div className="absolute inset-0 grid-bg" />
      {/* scanline */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-iris-glow/50 to-transparent animate-scan" />
      </div>

      <div className="absolute inset-0">
        <HeadsetScene />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 min-h-[calc(100vh-6rem)] flex flex-col justify-between pb-14">
        <div className="pt-12 md:pt-20 max-w-3xl">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:1}}
            className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.35em] text-iris-glow mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-plasma animate-glow"/> AETHER · GENERATION III
          </motion.div>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1.2,delay:0.15}}
            className="font-display text-[clamp(3.2rem,10vw,9.5rem)] leading-[0.88] tracking-[-0.025em] text-balance">
            See <span className="italic text-aurora">beyond</span><br/>the screen.
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1, delay:0.4}}
            className="mt-8 text-lg md:text-xl text-bone/70 max-w-xl leading-relaxed">
            A 6K micro-OLED display per eye. Foveated rendering at 120Hz. A new operating system designed for the air between your hands.
          </motion.p>
        </div>

        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1, delay:0.6}}
          className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-5 flex flex-wrap gap-3">
            <a href="#preorder" className="btn-primary px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em]">Reserve Yours ↗</a>
            <a href="#vision" className="glass px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-white/5 transition-colors">Watch Film ▷</a>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-3">
            {[
              ['6K','per eye'],
              ['120Hz','foveated'],
              ['18ms','motion-to-photon']
            ].map(([n,l]) => (
              <div key={l} className="glass px-5 py-4 rounded-2xl">
                <div className="font-display text-3xl md:text-4xl text-bone-grad">{n}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-bone/40 mt-1 font-mono">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* HUD ticker */}
      <div className="relative border-t hairline bg-void/60 backdrop-blur">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-4 flex items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
          <span>● Streaming · neural compositor v4.2</span>
          <span className="hidden md:inline">Eye-tracking 240Hz · 12 cameras · 3 LiDAR</span>
          <span className="text-iris-glow">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
