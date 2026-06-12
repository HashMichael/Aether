export function Tech() {
  const rows = [
    ['Display', '2× micro-OLED 4096×4096 · 120Hz · 4,000 nits HDR'],
    ['Optics', '21-element pancake stack · 120° FOV · automatic IPD'],
    ['Compute', 'Aether Neural M9 · 5nm · 24 TOPS · 32GB unified memory'],
    ['Sensors', '12 IR cameras · 3 LiDAR · 6-axis IMU · biosignal array'],
    ['Audio', 'Personalized spatial · 8-driver array · sub-2ms latency'],
    ['Connectivity', 'Wi-Fi 7 · UWB · USB-C 4 · optional fiber tether'],
    ['Power', 'Hot-swap graphene cell · 8h continuous · 30-min charge'],
    ['Materials', 'Grade-5 titanium · recycled aluminium · Italian merino'],
    ['Weight', '487 g (with strap) · 312 g (head-only)']
  ];
  return (
    <section id="tech" className="relative py-24 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-[1500px] grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.4em] text-iris-glow mb-5">§ Tech Sheet</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Every spec, <span className="italic text-aurora">unromanticised.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <dl className="divide-y hairline border-y hairline">
            {rows.map(([k,v]) => (
              <div key={k} className="grid grid-cols-12 gap-4 py-6">
                <dt className="col-span-12 md:col-span-3 text-[10px] uppercase tracking-[0.3em] text-iris-glow font-mono">{k}</dt>
                <dd className="col-span-12 md:col-span-9 font-display text-xl md:text-2xl text-bone">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
