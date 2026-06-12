'use client';
import { motion } from 'framer-motion';
import { Eye, Cpu, Hand, Waves, Layers, Battery } from 'lucide-react';

const F = [
  { i: Eye,    t: 'Foveated 6K',    d: 'Two custom micro-OLED panels at 4096×4096 each, sharpened by your gaze in under 4ms.' },
  { i: Cpu,    t: 'Neural M9',      d: 'A 5nm vision chip running 24 billion ops per second — on-device, no cloud, no latency.' },
  { i: Hand,   t: 'Hand & Eye',     d: 'Twelve infrared cameras track every micro-gesture. No controllers. No menus. Just intent.' },
  { i: Waves,  t: 'Spatial Audio',  d: 'Personalized HRTF rendered for the geometry of your own ears. Sound arrives from where it lives.' },
  { i: Layers, t: 'Passthrough HDR',d: '4,000-nit color passthrough with sub-frame compositor — reality and virtuality, indistinguishable.' },
  { i: Battery,t: '8-hour Battery', d: 'Hot-swappable graphene cells, magnetically docked, no cables to the head. Ever.' }
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-40 px-6 md:px-10">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"/>
      <div className="relative mx-auto max-w-[1500px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] uppercase tracking-[0.4em] text-iris-glow mb-5">§ Specifications · Engineered</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.02em] max-w-3xl">
              Six breakthroughs.<br/><span className="italic text-aurora">One device.</span>
            </h2>
          </div>
          <a href="#tech" className="text-[11px] uppercase tracking-[0.3em] text-bone/60 hover:text-bone border-b border-iris/40 pb-2">Full Spec Sheet →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {F.map((f, i) => (
            <motion.article key={f.t} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-50px'}}
              transition={{duration:0.7, delay:i*0.05, ease:[0.22,1,0.36,1]}}
              className="group relative glass rounded-2xl p-8 hover:border-iris-glow/40 transition-colors overflow-hidden">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-iris/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"/>
              <div className="relative">
                <div className="h-12 w-12 rounded-xl glass-strong grid place-items-center mb-6 text-iris-glow group-hover:text-plasma-glow transition-colors">
                  <f.i className="w-5 h-5"/>
                </div>
                <div className="font-display text-3xl mb-3">{f.t}</div>
                <p className="text-bone/60 text-sm leading-relaxed">{f.d}</p>
                <div className="mt-6 text-[10px] uppercase tracking-[0.3em] font-mono text-bone/40">0{i+1} / 06</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
