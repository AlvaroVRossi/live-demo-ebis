import Reveal from "./Reveal";

const servicios = [
  "Espacio de trabajo y conexión de alta velocidad durante toda la jornada",
  "Café, snacks y comida para no parar de construir",
  "Mentores que te ayudan a desbloquear y dar forma a tu proyecto",
  "Equipos de hasta 4 personas — ven solo o con quien quieras",
  "Demo final: presenta tu proyecto funcional ante el resto",
];

export default function QueEs() {
  return (
    <section style={{ background: "var(--ebis-paper)" }}>
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-start gap-10 px-[clamp(18px,5vw,40px)] py-[clamp(64px,9vw,110px)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-[clamp(40px,6vw,80px)]">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-[var(--border-strong)] px-4 py-2 font-[var(--font-display)] text-sm font-bold uppercase tracking-[0.14em] text-[var(--text-accent)]">
            Qué es HackIA Madrid
          </span>
          <h2 className="mt-[18px] max-w-[20ch] font-[var(--font-display)] text-[clamp(1.9rem,3.6vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--ebis-navy)]">
            Ven con ganas de construir. Del resto nos encargamos nosotros.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.65] text-[var(--text-body)]">
            HackIA Madrid es un hackathon presencial dedicado a la inteligencia
            artificial. Durante una jornada intensiva reunimos a desarrolladores,
            estudiantes, diseñadores y curiosos de la IA para formar equipos,
            prototipar y presentar un proyecto funcional ante el resto de
            participantes.
          </p>
          <p className="mt-[18px] max-w-[52ch] text-[1.0625rem] leading-[1.65] text-[var(--text-body)]">
            No necesitas ser experto: necesitas ganas de construir. Pondremos a tu
            disposición espacio, conexión, café y mentores para que lo único de lo
            que te preocupes sea de crear. Vengas solo o con equipo, aquí
            encontrarás con quién hacerlo.
          </p>
        </Reveal>

        <Reveal className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white shadow-[var(--shadow-card)]">
          <div className="h-[5px]" style={{ background: "var(--grad-teal)" }} />
          <div className="p-[clamp(26px,4vw,38px)]">
            <p className="mb-[22px] font-[var(--font-display)] text-[0.8125rem] font-bold uppercase tracking-[0.14em] text-[var(--text-accent)]">
              Lo que ponemos nosotros
            </p>
            <ul className="flex flex-col gap-4">
              {servicios.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: "var(--ebis-teal)" }}
                  >
                    ✓
                  </span>
                  <span className="text-[0.95rem] leading-[1.5] text-[var(--text-body)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
