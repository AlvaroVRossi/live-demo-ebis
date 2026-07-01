import ScrollToFormButton from "./ScrollToFormButton";

const stats = [
  { value: "24h", label: "construyendo sin parar", color: "var(--ebis-mint)" },
  { value: "60", label: "plazas presenciales", color: "var(--ebis-teal)" },
  { value: "Gratis", label: "inscripción para participar", color: "var(--ebis-mint)" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: "var(--grad-navy)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[140px] -top-[180px] h-[560px] w-[560px] rounded-full blur-sm"
        style={{
          background:
            "radial-gradient(circle, rgba(106,203,184,.42) 0%, rgba(106,203,184,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[220px] -left-[160px] h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(50,152,179,.34) 0%, rgba(50,152,179,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1160px] px-[clamp(18px,5vw,40px)] pb-[clamp(56px,8vw,96px)] pt-[clamp(64px,10vw,120px)]">
        <span
          className="inline-flex items-center rounded-full border border-white/25 px-4 py-2 font-[var(--font-display)] text-sm font-bold uppercase tracking-[0.14em] text-[var(--ebis-mint)]"
        >
          Hackathon presencial de IA · Madrid
        </span>

        <h1 className="mt-[22px] max-w-[16ch] font-[var(--font-display)] text-[clamp(2.5rem,6.4vw,4.6rem)] font-extrabold leading-[1.04] tracking-[-0.02em] text-white">
          Construye con IA en <span className="text-[var(--ebis-mint)]">24 horas</span>
        </h1>

        <p className="mt-6 max-w-[54ch] text-[clamp(1.05rem,2.1vw,1.3rem)] leading-[1.55] text-[var(--text-on-dark-muted)]">
          El hackathon presencial donde ideas, código e inteligencia artificial se
          convierten en proyectos reales. Una jornada intensiva para construir,
          aprender y conocer a gente que comparte tu energía.
        </p>

        <div className="mt-[30px] flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-[9px] rounded-full border border-white/22 px-4 py-[9px] text-[0.95rem] text-white">
            <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-[var(--ebis-mint)]" />
            Viernes 25 de septiembre de 2026 · 09:00–21:00
          </span>
          <span className="inline-flex items-center gap-[9px] rounded-full border border-white/22 px-4 py-[9px] text-[0.95rem] text-white">
            <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-[var(--ebis-teal)]" />
            IFEMA Madrid · Av. del Partenón, 5
          </span>
        </div>

        <div className="mt-[38px] flex flex-wrap items-center gap-[18px]">
          <ScrollToFormButton className="rounded-full bg-[var(--ebis-teal)] px-[34px] py-4 font-[var(--font-display)] text-[1.0625rem] font-bold tracking-[0.01em] text-white shadow-[0_10px_30px_rgba(50,152,179,.4)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[var(--ebis-teal-600)] hover:shadow-[0_14px_38px_rgba(50,152,179,.5)]">
            Inscríbete gratis →
          </ScrollToFormButton>
          <span className="font-[var(--font-mono)] text-[0.875rem] text-[var(--ebis-mint)]">
            Gratis · plazas limitadas a 60
          </span>
        </div>

        <div className="mt-[clamp(48px,7vw,72px)] flex flex-wrap gap-[clamp(28px,6vw,72px)] border-t border-white/14 pt-[clamp(32px,5vw,44px)]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span
                className="font-[var(--font-display)] text-[clamp(1.8rem,3.4vw,2.4rem)] font-extrabold"
                style={{ color: s.color }}
              >
                {s.value}
              </span>
              <span className="text-sm text-[var(--text-on-dark-muted)]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
