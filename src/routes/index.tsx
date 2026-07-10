import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Menu, X, Instagram, MapPin, Clock, Calendar, Star, Sparkles,
  ArrowRight, ChevronDown, MessageCircle, Bike, Car, Gem,
} from "lucide-react";
import {
  SITE, CAR_SERVICES, MOTO_SERVICES, PLANOS, BEFORE_AFTER,
  REVIEWS, FAQ, DIFERENCIAIS, HERO_IMAGE, INTERIOR_IMAGE,
} from "@/lib/turbo-data";
import logoUrl from "@/assets/turbodetails-logo.png";
import { Reveal } from "@/components/turbo/Reveal";
import { ServiceCard } from "@/components/turbo/ServiceCard";
import { BeforeAfter } from "@/components/turbo/BeforeAfter";

export const Route = createFileRoute("/")({
  component: Index,
});

function getWhatsAppHref() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";
  const text = `${greeting} Turbo, gostaria de saber mais sobre os serviços.`;
  return `https://wa.me/${SITE.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

function useWhatsAppHref() {
  const [href, setHref] = useState(SITE.whatsapp);
  useEffect(() => setHref(getWhatsAppHref()), []);
  return href;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <StatusStrip />
        <About />
        <BeforeAfterSection />
        <Pricing />
        <Reviews />
        <FAQSection />
        <Location />
        <CTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

/* ---------------- NAV ---------------- */

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#precos", label: "Serviços & Preços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <img
              src={logoUrl}
              alt="Turbo Details"
              className="h-8 w-8 rounded-lg object-cover shadow-neon"
            />
            <span>
              TURBO<span className="text-neon">DETAILS</span>
            </span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <a href="#orcamento" className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-foreground hover:bg-white/5">
              Orçamento
            </a>
            <a href={SITE.agendar} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-neon px-4 py-2 text-sm font-semibold text-neon-foreground shadow-neon transition-transform hover:scale-105">
              <Calendar className="h-4 w-4" /> Agendar
            </a>
          </div>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl lg:hidden"
      >
        <div className="flex h-16 items-center justify-between px-4">
          <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <img
              src={logoUrl}
              alt="Turbo Details"
              className="h-8 w-8 rounded-lg object-cover shadow-neon"
            />
            <span>TURBO<span className="text-neon">DETAILS</span></span>
          </a>
          <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5">
            <X className="h-5 w-5" />
          </button>
        </div>
        <motion.nav
          initial={false}
          animate={{ y: open ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-1 px-4 pt-6"
        >
          {NAV_LINKS.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : -20 }}
              transition={{ delay: open ? 0.05 * i : 0 }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-xl font-semibold"
            >
              {l.label}
              <ArrowRight className="h-5 w-5 text-neon" />
            </motion.a>
          ))}
          <div className="mt-6 grid grid-cols-2 gap-2">
            <a href="#orcamento" onClick={() => setOpen(false)} className="rounded-full border border-white/15 px-4 py-3 text-center text-sm font-semibold">Orçamento</a>
            <a href={SITE.agendar} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full bg-neon px-4 py-3 text-sm font-semibold text-neon-foreground shadow-neon">
              <Calendar className="h-4 w-4" /> Agendar
            </a>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid radial-fade opacity-70" />
        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-violet/40 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-neon/20 blur-3xl" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge />
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            <MapPin className="h-3 w-3" /> {SITE.location}
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[2.5rem] font-bold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl"
        >
          Seu carro,
          <br />
          <span className="inline-flex items-baseline">
            <span className="text-muted-foreground/40">no </span>
            <span className="text-gradient-neon">&nbsp;nível máximo.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg"
        >
          Estética automotiva profissional com técnica real, produtos certos e atenção em cada detalhe. Do mais simples ao mais completo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href={SITE.agendar}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-neon px-6 py-4 text-base font-semibold text-neon-foreground shadow-neon transition-transform hover:scale-[1.02]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70 animate-shine" />
            <Calendar className="h-5 w-5" />
            Agendar agora
          </a>
          <a
            href="#precos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/[0.08]"
          >
            Ver serviços <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {SITE.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
              <div className="font-display text-xl font-bold text-foreground sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatusBadge() {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${
      SITE.status.open
        ? "border-neon/40 bg-neon/10 text-neon"
        : "border-destructive/40 bg-destructive/10 text-destructive"
    }`}>
      <span className={`h-1.5 w-1.5 rounded-full ${SITE.status.open ? "bg-neon" : "bg-destructive"} animate-pulse`} />
      {SITE.status.label}
    </span>
  );
}

/* ---------------- STATUS STRIP ---------------- */

function StatusStrip() {
  const items = [
    "Detalhamento técnico", "Sem terceirização", "Preço combinado é preço cobrado",
    "Carros & motos", "+1.200 carros atendidos", "4.9★ no Google",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative -mt-2 overflow-hidden border-y border-white/10 bg-neon py-3 text-neon-foreground">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-sm font-semibold uppercase tracking-widest">
            {t}
            <Sparkles className="h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <img src={INTERIOR_IMAGE} alt="Interior de carro após higienização na Turbo Details" className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
              <div className="rounded-2xl border border-white/15 bg-black/40 px-4 py-3 backdrop-blur">
                <div className="font-display text-3xl font-bold text-neon">+2 anos</div>
                <div className="text-xs text-white/80">no mercado</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-violet/30 blur-3xl -z-10" />
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-neon">Quem somos</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Detalhismo que faz a diferença.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A Turbo Details nasceu da crença de que estética automotiva de verdade não se faz com pressa. Cada veículo passa por um processo técnico e cuidadoso, sem linha de produção, só dedicação.
            </p>
          </Reveal>
          <ul className="mt-6 space-y-2">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal key={d} as="li" delay={0.15 + i * 0.05} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-neon text-neon-foreground">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <span className="text-sm text-foreground">{d}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BEFORE/AFTER ---------------- */

function BeforeAfterSection() {
  return (
    <section id="resultados" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-neon">Resultados reais</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">Antes &amp; Depois</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">Fotos reais de serviços realizados na Turbo Details.</p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {BEFORE_AFTER.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.08}>
              <div className="space-y-3">
                <BeforeAfter before={b.before} after={b.after} alt={b.title} />
                <div>
                  <h3 className="font-display text-lg font-bold">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */

const TABS = [
  { id: "carros", label: "Mais pedidos", icon: Car, data: CAR_SERVICES },
  { id: "motos", label: "Motos", icon: Bike, data: MOTO_SERVICES },
  { id: "planos", label: "Planos", icon: Gem, data: PLANOS },
] as const;

function Pricing() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("carros");
  const current = TABS.find((t) => t.id === tab)!;

  return (
    <section id="precos" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid radial-fade opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-neon">Investimento</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Preços claros,<br />sem letra pequena.
          </h2>
          <p className="mt-3 text-muted-foreground">Escolha o serviço e fale direto no WhatsApp para agendar.</p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur sm:inline-flex">
          {TABS.map((t) => {
            const active = tab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`relative inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:flex-none ${
                  active ? "text-neon-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span layoutId="pricing-tab" className="absolute inset-0 rounded-full bg-neon shadow-neon" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                )}
                <span className="relative flex items-center gap-2">
                  <Icon className="h-4 w-4" /> {t.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {current.data.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <a href={SITE.agendar} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground hover:bg-white/[0.08]">
            Ver tabela completa (32 serviços) <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */

function Reviews() {
  const row = [...REVIEWS, ...REVIEWS];
  return (
    <section id="avaliacoes" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-neon">Quem já veio</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            O que nossos<br />clientes dizem.
          </h2>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-neon text-neon" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9</span>
            <span>· avaliação Google</span>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-4 px-4">
          {row.map((r, i) => (
            <article key={i} className="flex w-[300px] shrink-0 flex-col rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur sm:w-[340px]">
              <div className="flex text-neon">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-neon/20 font-display text-sm font-bold text-neon">
                  {r.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.when} · Google</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-neon">Dúvidas</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">Perguntas frequentes.</h2>
        </Reveal>

        <div className="mt-10 space-y-2">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className={`overflow-hidden rounded-2xl border transition-colors ${isOpen ? "border-neon/40 bg-neon/[0.04]" : "border-white/10 bg-white/[0.03]"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-base font-semibold">{item.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-neon" : "text-muted-foreground"}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */

function Location() {
  const whatsappHref = useWhatsAppHref();

  return (
    <section id="localizacao" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-neon">Onde estamos</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              No centro de Jequié,<br />te esperando.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neon">
                  <MapPin className="h-4 w-4" /> Endereço
                </div>
                <p className="mt-3 text-lg font-semibold">{SITE.address}</p>
                <p className="text-sm text-muted-foreground">{SITE.city}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neon">
                  <Clock className="h-4 w-4" /> Horário
                </div>
                <ul className="mt-3 divide-y divide-white/5">
                  {SITE.hours.map(([day, hours]) => (
                    <li key={day} className="flex items-center justify-between py-2 text-sm">
                      <span className="text-muted-foreground">{day}</span>
                      <span className={`font-semibold ${hours === "Fechado" ? "text-destructive" : "text-foreground"}`}>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address + ", " + SITE.city)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold hover:bg-white/[0.08]"
                >
                  <MapPin className="h-4 w-4" /> Como chegar
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-neon px-5 py-3 text-sm font-semibold text-neon-foreground shadow-neon"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 lg:aspect-square">
            <iframe
              title="Mapa Turbo Details"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address + ", " + SITE.city)}&output=embed`}
              className="h-full w-full grayscale-[0.4] contrast-125"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTA() {
  return (
    <section id="orcamento" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neon/10 via-violet/10 to-transparent p-8 sm:p-14">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-neon/30 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-violet/40 blur-3xl" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neon">Pronto pra começar?</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Seu carro pode ficar<br />
              <span className="text-gradient-neon">assim hoje mesmo.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Agende seu serviço agora e a gente cuida do resto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={SITE.agendar} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-4 text-base font-semibold text-neon-foreground shadow-neon transition-transform hover:scale-[1.02]">
                <Calendar className="h-5 w-5" /> Agendar agora
              </a>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-base font-semibold text-foreground hover:bg-white/[0.08]">
                <Instagram className="h-5 w-5" /> {SITE.instagramHandle}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 font-display font-bold text-foreground">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-neon text-neon-foreground">
            <Sparkles className="h-3 w-3" strokeWidth={3} />
          </span>
          TURBO<span className="text-neon">DETAILS</span>
        </div>
        <div>© {new Date().getFullYear()} Turbo Details · Jequié, Bahia</div>
        <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
          <Instagram className="h-4 w-4" /> {SITE.instagramHandle}
        </a>
      </div>
    </footer>
  );
}

/* ---------------- STICKY WHATSAPP ---------------- */

function StickyWhatsApp() {
  const href = useWhatsAppHref();

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-neon text-neon-foreground shadow-neon transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-neon/40" />
    </a>
  );
}
