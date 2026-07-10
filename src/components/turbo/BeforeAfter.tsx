export function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black sm:aspect-[4/3]">
        <img src={before} alt={`${alt} - antes`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <figcaption className="pointer-events-none absolute top-2.5 left-2.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
          Antes
        </figcaption>
      </figure>
      <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black sm:aspect-[4/3]">
        <img src={after} alt={`${alt} - depois`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <figcaption className="pointer-events-none absolute top-2.5 right-2.5 rounded-full bg-neon px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-neon-foreground">
          Depois
        </figcaption>
      </figure>
    </div>
  );
}