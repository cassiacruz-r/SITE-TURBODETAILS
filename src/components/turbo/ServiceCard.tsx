import { motion } from "motion/react";
import type { Service } from "@/lib/turbo-data";
import { SITE } from "@/lib/turbo-data";

export function ServiceCard({ s, i = 0 }: { s: Service; i?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur transition-colors hover:border-neon/40"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      {s.tag && (
        <span className="absolute right-4 top-4 rounded-full border border-neon/40 bg-neon/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neon">
          {s.tag}
        </span>
      )}

      <h3 className="pr-16 text-lg font-bold leading-tight text-foreground">{s.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

      {s.tiers && (
        <div className="mt-4 grid grid-cols-3 gap-1.5">
          {s.tiers.map((t) => (
            <div key={t.size} className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1.5 text-center">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Porte {t.size}</div>
              <div className="text-sm font-bold text-foreground">R$ {t.price}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {s.tiers ? "a partir de" : "Valor"}
          </div>
          <div className="font-display text-2xl font-bold text-foreground">
            R$ {s.from ?? s.price}
            {s.unit && <span className="ml-1 text-xs font-medium text-muted-foreground">{s.unit}</span>}
          </div>
        </div>
        <a
          href={`${SITE.whatsapp}?text=${encodeURIComponent(`Olá! Tenho interesse no serviço "${s.name}". Pode me passar mais informações?`)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neon px-4 py-2 text-sm font-semibold text-neon-foreground transition-transform hover:scale-105"
        >
          Quero esse
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </motion.article>
  );
}