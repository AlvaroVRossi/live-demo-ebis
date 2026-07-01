"use client";

export default function ScrollToFormButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const scrollToForm = () => {
    const el = document.getElementById("inscripcion");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <button type="button" onClick={scrollToForm} className={className}>
      {children}
    </button>
  );
}
