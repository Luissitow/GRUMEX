'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const schema = z.object({
  nombre: z.string().min(2, 'Mínimo 2 caracteres'),
  empresa: z.string().optional(),
  email: z.string().email('Email inválido'),
  telefono: z.string().optional(),
  servicio: z.string().min(1, 'Selecciona un servicio'),
  mensaje: z.string().min(10, 'Mínimo 10 caracteres'),
})

type FormData = z.infer<typeof schema>

const servicios = [
  'Manufactura',
  'Mobiliaria',
  'Construcción',
  'Mármol',
  'Importación',
  'Logística y Maniobras',
]

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

  return (
    <section id="contacto" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="text-dark mb-4 text-4xl font-extrabold">¿Listo para cotizar?</h2>
            <p className="mb-8 leading-relaxed text-gray-500">
              Cuéntanos tu proyecto y nuestro equipo te contactará en menos de 24 horas con una
              propuesta personalizada.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                { icon: '📞', texto: '+52 722 966 6219', href: 'tel:+527229666219' },
                { icon: '✉️', texto: 'contacto@grumex.mx', href: 'mailto:contacto@grumex.mx' },
                { icon: '📍', texto: 'Toluca de Lerdo, Estado de México', href: null },
              ].map((item) => (
                <li key={item.texto} className="flex items-center gap-3 text-gray-600">
                  <span className="text-xl">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-primary transition-colors">
                      {item.texto}
                    </a>
                  ) : (
                    <span>{item.texto}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulario */}
          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">
            {enviado ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <span className="text-5xl">✅</span>
                <h3 className="text-dark text-2xl font-bold">¡Mensaje enviado!</h3>
                <p className="text-gray-500">Te contactaremos en menos de 24 horas.</p>
                <button
                  onClick={() => setEnviado(false)}
                  className="text-primary mt-4 font-semibold underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <input
                      {...register('nombre')}
                      placeholder="Nombre *"
                      className="focus:border-primary w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors outline-none"
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-xs text-red-500">{errors.nombre.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register('empresa')}
                      placeholder="Empresa"
                      className="focus:border-primary w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="Email *"
                      className="focus:border-primary w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register('telefono')}
                      placeholder="Teléfono"
                      className="focus:border-primary w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors outline-none"
                    />
                  </div>
                </div>

                <div>
                  <select
                    {...register('servicio')}
                    className="focus:border-primary w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-500 transition-colors outline-none"
                  >
                    <option value="">Servicio de interés *</option>
                    {servicios.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.servicio && (
                    <p className="mt-1 text-xs text-red-500">{errors.servicio.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register('mensaje')}
                    placeholder="Cuéntanos tu proyecto *"
                    rows={4}
                    className="focus:border-primary w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors outline-none"
                  />
                  {errors.mensaje && (
                    <p className="mt-1 text-xs text-red-500">{errors.mensaje.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={enviando}
                  className="bg-primary hover:bg-primary-dark w-full rounded-xl py-4 font-semibold text-white transition-colors disabled:opacity-60"
                >
                  {enviando ? 'Enviando...' : 'Cotiza ahora'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
