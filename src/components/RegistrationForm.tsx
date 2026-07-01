"use client";

import { useState } from "react";

type FormState = {
  nombre: string;
  email: string;
  perfil: string;
  nivel: string;
  equipo: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  nombre: "",
  email: "",
  perfil: "",
  nivel: "",
  equipo: "",
};

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {};
  const { nombre, email, perfil, nivel, equipo } = state;

  if (!nombre || nombre.trim().length < 2) errors.nombre = "Dinos cómo te llamas.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    errors.email = "Introduce un email válido.";
  if (!perfil) errors.perfil = "Elige tu perfil.";
  if (!nivel) errors.nivel = "Indica tu nivel.";
  if (!equipo) errors.equipo = "Cuéntanos sobre tu equipo.";

  return errors;
}

const fieldClass =
  "rounded-[11px] border-[1.5px] border-[var(--border-strong)] px-[15px] py-[13px] font-[var(--font-body)] text-base text-[var(--ebis-navy)] outline-none transition-shadow duration-150 focus:border-[var(--ebis-teal)] focus:shadow-[0_0_0_3px_rgba(50,152,179,.25)]";

const labelClass = "font-[var(--font-display)] text-[0.875rem] font-semibold text-[var(--ebis-navy)]";

const errorClass = "text-[0.8125rem] text-[var(--status-danger)]";

export default function RegistrationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[name as keyof FormState];
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      const first = (["nombre", "email", "perfil", "nivel", "equipo"] as const).find(
        (k) => newErrors[k]
      );
      if (first) document.getElementById("f-" + first)?.focus();
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(initialState);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-[18px] px-[clamp(26px,4.5vw,44px)] py-[clamp(40px,6vw,64px)] text-center">
        <div
          className="grid h-[72px] w-[72px] place-items-center rounded-full text-2xl font-extrabold"
          style={{ background: "var(--ebis-mint-100)", color: "var(--ebis-teal-600)" }}
        >
          ✓
        </div>
        <h3 className="m-0 font-[var(--font-display)] text-[clamp(1.4rem,3vw,1.9rem)] font-extrabold text-[var(--ebis-navy)]">
          ¡Listo! Hemos recibido tu inscripción
        </h3>
        <p className="m-0 max-w-[42ch] text-[1.0625rem] leading-[1.55] text-[var(--text-body)]">
          Te enviaremos los detalles a tu correo. Nos vemos en HackIA Madrid 🚀
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-1.5 cursor-pointer border-none bg-transparent font-[var(--font-display)] text-[0.9rem] font-bold text-[var(--ebis-teal)]"
        >
          Inscribir a otra persona
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 px-[clamp(26px,4.5vw,44px)] py-[clamp(26px,4.5vw,44px)]"
    >
      <div className="flex flex-col gap-[7px]">
        <label htmlFor="f-nombre" className={labelClass}>
          Nombre completo
        </label>
        <input
          id="f-nombre"
          name="nombre"
          type="text"
          value={form.nombre}
          onChange={handleChange}
          autoComplete="name"
          placeholder="Tu nombre y apellidos"
          className={fieldClass}
        />
        {errors.nombre && <span className={errorClass}>{errors.nombre}</span>}
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="f-email" className={labelClass}>
          Email
        </label>
        <input
          id="f-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          placeholder="tucorreo@ejemplo.com"
          className={fieldClass}
        />
        {errors.email && <span className={errorClass}>{errors.email}</span>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-[7px]">
          <label htmlFor="f-perfil" className={labelClass}>
            Tu perfil
          </label>
          <select
            id="f-perfil"
            name="perfil"
            value={form.perfil}
            onChange={handleChange}
            required
            className={`${fieldClass} cursor-pointer bg-white`}
          >
            <option value="" disabled>
              Selecciona…
            </option>
            <option value="dev">Desarrollo</option>
            <option value="diseno">Diseño</option>
            <option value="negocio">Negocio</option>
            <option value="estudiante">Estudiante</option>
            <option value="otro">Otro</option>
          </select>
          {errors.perfil && <span className={errorClass}>{errors.perfil}</span>}
        </div>

        <div className="flex flex-col gap-[7px]">
          <label htmlFor="f-nivel" className={labelClass}>
            Nivel con IA
          </label>
          <select
            id="f-nivel"
            name="nivel"
            value={form.nivel}
            onChange={handleChange}
            required
            className={`${fieldClass} cursor-pointer bg-white`}
          >
            <option value="" disabled>
              Selecciona…
            </option>
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
          {errors.nivel && <span className={errorClass}>{errors.nivel}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-[7px]">
        <label htmlFor="f-equipo" className={labelClass}>
          ¿Vienes con equipo o buscas uno?
        </label>
        <select
          id="f-equipo"
          name="equipo"
          value={form.equipo}
          onChange={handleChange}
          required
          className={`${fieldClass} cursor-pointer bg-white`}
        >
          <option value="" disabled>
            Selecciona…
          </option>
          <option value="con-equipo">Vengo con mi equipo</option>
          <option value="busco-equipo">Busco equipo en el evento</option>
          <option value="indiferente">Aún no lo sé</option>
        </select>
        {errors.equipo && <span className={errorClass}>{errors.equipo}</span>}
      </div>

      <button
        type="submit"
        className="mt-2 rounded-full bg-[var(--ebis-teal)] px-[30px] py-4 font-[var(--font-display)] text-[1.0625rem] font-bold tracking-[0.01em] text-white shadow-[var(--shadow-md)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[var(--ebis-teal-600)]"
      >
        Quiero participar
      </button>
      <p className="m-0 text-center text-[0.8125rem] text-[var(--text-muted)]">
        Al enviar aceptas que te contactemos sobre HackIA Madrid. Sin spam.
      </p>
    </form>
  );
}
