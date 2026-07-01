import ScrollToFormButton from "./ScrollToFormButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-[clamp(18px,5vw,40px)] py-[13px]">
        <span className="font-[var(--font-display)] text-lg font-extrabold tracking-tight text-[var(--ebis-navy)]">
          EBIS
        </span>
        <div className="flex items-center gap-[18px]">
          <span className="hidden font-[var(--font-mono)] text-[0.8rem] text-[var(--text-muted)] md:inline">
            25 SEP · IFEMA MADRID
          </span>
          <ScrollToFormButton className="rounded-full bg-[var(--ebis-teal)] px-[22px] py-[11px] font-[var(--font-display)] text-[0.9rem] font-bold tracking-[0.01em] text-white shadow-[var(--shadow-sm)] transition-all duration-150 hover:-translate-y-px hover:bg-[var(--ebis-teal-600)]">
            Inscríbete gratis
          </ScrollToFormButton>
        </div>
      </div>
    </header>
  );
}
