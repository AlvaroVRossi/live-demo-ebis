export default function Footer() {
  return (
    <footer style={{ background: "var(--ebis-navy-deep)", color: "var(--text-on-dark-muted)" }}>
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-start justify-between gap-8 px-[clamp(18px,5vw,40px)] py-[clamp(48px,6vw,72px)]">
        <div className="flex max-w-[30ch] flex-col gap-[18px]">
          <p className="m-0 text-[0.95rem] leading-[1.6]">
            HackIA Madrid · Viernes 25 de septiembre de 2026 · IFEMA Madrid.
            <br />
            Organiza: EBIS Business Techschool.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] text-[0.95rem]">
          <span className="mb-1 font-[var(--font-display)] text-[0.8125rem] font-bold uppercase tracking-[0.14em] text-[var(--ebis-mint)]">
            Contacto
          </span>
          <a href="mailto:hola@ebiseducation.com" className="text-white no-underline">
            hola@ebiseducation.com
          </a>
          <a
            href="https://www.ebiseducation.com"
            target="_blank"
            rel="noopener"
            className="text-[var(--text-on-dark-muted)] no-underline"
          >
            ebiseducation.com
          </a>
          <div className="mt-1.5 flex gap-4">
            <a
              href="https://www.linkedin.com/company/ebiseducation"
              target="_blank"
              rel="noopener"
              className="text-[var(--text-on-dark-muted)] no-underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/ebiseducation"
              target="_blank"
              rel="noopener"
              className="text-[var(--text-on-dark-muted)] no-underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-3 px-[clamp(18px,5vw,40px)] py-[18px] font-[var(--font-mono)] text-[0.8125rem] text-[var(--ebis-ink-40)]">
          <span>© 2026 HackIA Madrid</span>
          <span>Construido con IA, en una jornada.</span>
        </div>
      </div>
    </footer>
  );
}
