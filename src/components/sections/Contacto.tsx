'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '527229666219'

const schema = z.object({
  nombre: z.string().min(2, 'Mínimo 2 caracteres'),
  empresa: z.string().optional(),
  email: z.string().email('Email inválido'),
  telefono: z.string().optional(),
  mensaje: z.string().min(10, 'Mínimo 10 caracteres'),
})

type FormData = z.infer<typeof schema>

const inputCls =
  'w-full border-0 border-b border-white bg-transparent p-[1.5rem] text-white outline-none md:w-4/5 md:border-black md:text-black'

/**
 * Sección de contacto, réplica de `.formulario` del legacy:
 * fondo dividido (negro/gris en móvil vertical, negro/blanco en ≥960px),
 * columna de contacto + formulario con inputs de borde inferior.
 * Conserva la validación con React Hook Form + Zod.
 */
export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setEnviando(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setEnviado(true)
      reset()
    } finally {
      setEnviando(false)
    }
  }

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '¡Hola GRUMEX! Me interesa conocer más de sus servicios.'
  )}`

  return (
    <section
      id="contacto"
      className="bg-[linear-gradient(to_bottom,rgb(29,29,29)_50%,#000_50%)] md:bg-[linear-gradient(to_left,#fff_50%,#000_50%)]"
    >
      <div className="mx-auto grid w-[min(95%,140rem)] items-center gap-[2rem] md:grid-cols-[40%_60%] md:gap-0">
        {/* Contacto (negro) — fila 2 en móvil, izquierda en desktop */}
        <div className="row-start-2 flex flex-col items-center bg-black text-center text-white md:row-start-1 md:gap-[5rem] md:pr-[5rem]">
          <h3 className="inline-block w-4/5 border-b border-white pb-[3rem] text-[1.8rem] font-bold">
            Descubre cómo podemos transformar tus proyectos
          </h3>

          <div className="flex flex-col md:flex-col">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[1rem] py-[3rem] transition-opacity hover:opacity-80"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[2.5rem] w-[2.5rem]"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-[1.8rem]">722 966 6219</span>
            </a>
            <a
              href="mailto:contacto@grumex.mx"
              className="flex items-center justify-center gap-[1rem] py-[3rem] transition-opacity hover:opacity-80"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[2.5rem] w-[2.5rem]"
                aria-hidden="true"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span className="text-[1.8rem]">contacto@grumex.mx</span>
            </a>
          </div>

          <a href={waHref} target="_blank" rel="noopener noreferrer">
            <span className="mt-[1rem] inline-block border border-white bg-black px-[6rem] py-[1.5rem] text-[1.8rem] font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black">
              Sobre Nosotros
            </span>
          </a>
        </div>

        {/* Formulario — fila 1 en móvil (gris), derecha en desktop (blanco) */}
        <div className="row-start-1 bg-[rgb(29,29,29)] pt-[5rem] pl-[5rem] text-white md:bg-white md:pl-[8rem] md:text-black">
          <h2 className="pt-[2rem] pb-[1rem] text-center text-[3rem] font-bold uppercase md:inline-block md:text-left md:text-[4.5rem]">
            Contacto
          </h2>

          {enviado ? (
            <div className="flex flex-col items-center gap-[1rem] py-[6rem] pr-[5rem] text-center md:pr-0">
              <span className="text-[4rem]">✅</span>
              <h3 className="text-[2.4rem] font-bold">¡Mensaje enviado!</h3>
              <p className="text-[1.6rem] opacity-70">Te contactaremos en menos de 24 horas.</p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-[1rem] text-[1.6rem] font-semibold underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col py-[2rem] pr-[5rem] md:pr-0"
            >
              <Campo label="Nombre" error={errors.nombre?.message}>
                <input {...register('nombre')} placeholder="Tu nombre" className={inputCls} />
              </Campo>

              <Campo label="Empresa">
                <input
                  {...register('empresa')}
                  placeholder="Nombre de tu empresa"
                  className={inputCls}
                />
              </Campo>

              <Campo label="Correo electrónico" error={errors.email?.message}>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Tu correo electrónico"
                  className={inputCls}
                />
              </Campo>

              <Campo label="Teléfono">
                <input {...register('telefono')} placeholder="Tu teléfono" className={inputCls} />
              </Campo>

              <Campo label="Mensaje" error={errors.mensaje?.message}>
                <textarea {...register('mensaje')} rows={3} className={`${inputCls} resize-none`} />
              </Campo>

              <button
                type="submit"
                disabled={enviando}
                className="mt-[2rem] ml-auto bg-white px-[6rem] py-[1.5rem] text-[1.8rem] font-bold text-black transition-colors duration-300 hover:bg-black hover:text-white md:mt-[4rem] md:bg-black md:text-white md:hover:bg-white md:hover:text-black"
              >
                {enviando ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Campo({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-[1rem]">
      <label className="my-[1rem] block text-[1.6rem] uppercase">{label}</label>
      {children}
      {error && <p className="mt-1 text-[1.3rem] text-red-400">{error}</p>}
    </div>
  )
}
