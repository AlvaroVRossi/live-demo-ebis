import Reveal from "./Reveal";
import RegistrationForm from "./RegistrationForm";

export default function RegistrationSection() {
  return (
    <section
      id="inscripcion"
      className="relative overflow-hidden"
      style={{ background: "var(--grad-navy)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[160px] left-1/2 h-[420px] w-[680px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(50,152,179,.3) 0%, rgba(50,152,179,0) 70%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-[720px] px-[clamp(18px,5vw,40px)] py-[clamp(60px,8vw,96px)]">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/25 px-4 py-2 font-[var(--font-display)] text-sm font-bold uppercase tracking-[0.14em] text-[var(--ebis-mint)]">
            Reserva tu plaza
          </span>
          <h2 className="mt-[18px] font-[var(--font-display)] text-[clamp(2rem,4.4vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
            Reserva tu plaza
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[1.0625rem] leading-[1.55] text-[var(--text-on-dark-muted)]">
            Las plazas son limitadas a 60 participantes. Completa el formulario y
            te confirmamos por email.
          </p>
        </div>

        <div
          className="mt-[clamp(34px,5vw,48px)] overflow-hidden rounded-[18px] bg-white shadow-[var(--shadow-lg)]"
        >
          <div className="h-[6px]" style={{ background: "var(--grad-teal)" }} />
          <RegistrationForm />
        </div>
      </Reveal>
    </section>
  );
}
