'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

export function Film() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);

  return (
    <section id="vision" ref={ref} className="relative py-24 md:py-40 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-[11px] uppercase tracking-[0.4em] text-iris-glow mb-5">§ Vision · The Film</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-16 max-w-4xl">
          A new chapter for <span className="italic text-aurora">computing.</span>
        </h2>
        <motion.div style={{ scale, opacity }} className="relative aspect-video rounded-3xl overflow-hidden glass-strong">
          {/* HTML5 video — replace with a real CDN-hosted file for production */}
          <video
            className="w-full h-full object-cover"
            autoPlay loop muted playsInline
            poster="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1920&q=80"
            src="https://cdn.coverr.co/videos/coverr-a-woman-using-vr-glasses-3493/1080p.mp4"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"/>
          <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 flex items-end justify-between gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-plasma-glow mb-3 font-mono">Director&apos;s Cut · 02:14</div>
              <div className="font-display text-3xl md:text-5xl max-w-2xl leading-[0.95]">&ldquo;What if every wall could be a window?&rdquo;</div>
            </div>
            <button className="shrink-0 h-16 w-16 md:h-20 md:w-20 rounded-full bg-bone text-void grid place-items-center hover:scale-110 transition-transform shadow-2xl">
              <Play className="w-7 h-7 fill-current"/>
            </button>
          </div>
          {/* corner brackets */}
          {[
            'top-4 left-4 border-l border-t',
            'top-4 right-4 border-r border-t',
            'bottom-4 left-4 border-l border-b',
            'bottom-4 right-4 border-r border-b'
          ].map((c,i) => <div key={i} className={`absolute w-6 h-6 border-iris-glow/60 ${c}`}/>)}
        </motion.div>
      </div>
    </section>
  );
}
