const Q = [
  { l:'WIRED', q:'AETHER doesn’t just leapfrog the competition — it rewrites the category.' },
  { l:'The Verge', q:'The first headset that disappears the moment you put it on.' },
  { l:'MKBHD', q:'Pixels you can’t see. Latency you can’t feel. This is the one.' },
  { l:'Bloomberg', q:'The most ambitious consumer device since the iPhone.' }
];
export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 px-6 md:px-10 bg-obsidian border-y hairline overflow-hidden">
      <div className="mx-auto max-w-[1500px]">
        <div className="text-[11px] uppercase tracking-[0.4em] text-iris-glow mb-5">§ Press</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-16 max-w-3xl">The room is <span className="italic text-aurora">talking.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Q.map((q,i) => (
            <figure key={i} className="glass rounded-2xl p-10 hover:border-plasma-glow/40 transition-colors">
              <div className="font-display text-3xl md:text-4xl leading-snug mb-6">&ldquo;{q.q}&rdquo;</div>
              <figcaption className="text-[10px] uppercase tracking-[0.3em] text-iris-glow font-mono">— {q.l}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
