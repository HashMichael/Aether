export function Footer() {
  return (
    <footer className="relative border-t hairline mt-32 bg-obsidian">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-5">
          <div className="font-display text-6xl text-aurora mb-5">AETHER.</div>
          <p className="text-bone/60 max-w-md leading-relaxed">A new lens for reality. Built in California, manufactured in Kyoto, available worldwide Q3 2026.</p>
        </div>
        {[
          ['Product',['Vision Pro 2','Specs','Accessories','Comparisons']],
          ['Studio',['About','Newsroom','Sustainability','Careers']],
          ['Support',['Setup','Warranty','Repairs','Contact']]
        ].map(([h, items]) => (
          <div key={h as string} className="col-span-6 md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.25em] text-iris-glow mb-5">{h as string}</div>
            <ul className="space-y-3 text-sm text-bone/70">{(items as string[]).map(l => <li key={l}><a href="#" className="hover:text-bone transition-colors">{l}</a></li>)}</ul>
          </div>
        ))}
        <div className="col-span-12 md:col-span-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">© MMXXVI</div>
      </div>
      <div className="border-t hairline py-5 text-center text-[10px] uppercase tracking-[0.3em] text-bone/40">
        Designed in Cupertino · Crafted in Kyoto · Shipped from Rotterdam
      </div>
    </footer>
  );
}
