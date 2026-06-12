export function Marquee() {
  const items = ['MICRO-OLED','PANCAKE OPTICS','NEURAL COMPOSITOR','SPATIAL AUDIO','EYE-TRACKING','HAND-TRACKING','PASSTHROUGH HDR','120Hz','LIDAR ×3','TITANIUM CHASSIS'];
  return (
    <div className="border-y hairline bg-obsidian/60 overflow-hidden py-5">
      <div className="flex animate-[ticker_50s_linear_infinite] whitespace-nowrap font-mono text-sm tracking-[0.3em] text-bone/50">
        {[...items, ...items, ...items].map((t,i) => (
          <span key={i} className="mx-8 flex items-center gap-8">{t}<span className="text-plasma">◆</span></span>
        ))}
      </div>
      <style>{`@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
