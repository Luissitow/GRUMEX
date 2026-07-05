'use client'

import { useState } from 'react'

interface Sucursal {
  ciudad: string
  estado: string
  /** Marca la oficina principal con la etiqueta "Matriz". */
  matriz?: boolean
  /** Nombre del edificio o referencia (opcional). */
  edificio?: string
  direccion: string
  cp: string
  telefono: string
  horario: string
  /** Enlace a Google Maps (botón "Cómo llegar"). */
  maps: string
  /**
   * Foto de la sucursal. Coloca la imagen en
   * `public/assets/img/Index/Sucursales/` y apunta aquí su ruta
   * (ej. '/assets/img/Index/Sucursales/tijuana.jpg').
   * Si el archivo no existe todavía, se muestra un placeholder.
   */
  imagen?: string
}

/**
 * Sucursales de GRUMEX en el país.
 *
 * Para agregar una nueva sucursal, copia un bloque y cambia los datos.
 * `matriz` es opcional (déjalo solo en la oficina principal). El botón
 * "Cómo llegar" usa el enlace `maps`. Las fotos van en
 * `public/assets/img/Index/Sucursales/`.
 */
const sucursales: Sucursal[] = [
  {
    ciudad: 'Toluca de Lerdo',
    estado: 'Estado de México',
    matriz: true,
    direccion: 'C. Laguna de la Gavia 600, El Seminario Tercera Secc.',
    cp: '50170',
    telefono: '722 966 6219',
    horario: 'Lun a Vie 8:00–18:00 · Sáb 9:00–14:00',
    maps: 'https://maps.app.goo.gl/VNy4nTva6fdEvPdT6',
    imagen: '/assets/img/GRUMEX/GrumexTol1.png',
  },
  {
    ciudad: 'Tijuana',
    estado: 'Baja California',
    edificio: 'Edificio VIA Corporativo',
    direccion: 'Misión de San Javier 10643, Zona Urbana Río Tijuana.',
    cp: '22010',
    telefono: '664 615 7095',
    horario: 'Lun a Vie 8:00–18:00',
    maps: 'https://maps.app.goo.gl/p5gDyHMY9QC3urF88',
    imagen: '/assets/img/GRUMEX/GrumexTij.jpeg',
  },
  // Agrega aquí más sucursales copiando el bloque anterior.
]

/**
 * Sección "Nuestras sucursales": presencia de GRUMEX en el país.
 * Fondo negro con tarjetas (foto + datos), borde blanco y hover invertido,
 * igual que el resto del sitio. Es data-driven: se genera desde `sucursales`.
 */
export default function Sucursales() {
  return (
    <section id="sucursales" className="bg-black text-white">
      <div className="mx-auto w-[min(95%,140rem)] px-[1.5rem] py-[6rem] md:py-[10rem]">
        {/* Encabezado */}
        <div className="mb-[5rem] text-center">
          <p className="m-0 text-[1.6rem] font-bold tracking-[0.3rem] uppercase opacity-60">
            Presencia en el país
          </p>
          <h2 className="mt-[1rem] mb-0 text-[3rem] font-bold uppercase md:text-[4.5rem] lg:text-[4.8rem]">
            Nuestras sucursales
          </h2>
          <p className="mx-auto mt-[1.5rem] max-w-[80rem] text-[1.8rem] opacity-80 md:text-[2rem]">
            Encuentra la ubicación de GRUMEX más cercana a ti y visítanos para
            conocer nuestras soluciones industriales.
          </p>
        </div>

        {/* Tarjetas de sucursal */}
        <div className="flex flex-wrap justify-center gap-[3rem]">
          {sucursales.map((s) => (
            <SucursalCard key={`${s.ciudad}-${s.cp}`} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SucursalCard({
  ciudad,
  estado,
  matriz,
  edificio,
  direccion,
  cp,
  telefono,
  horario,
  maps,
  imagen,
}: Sucursal) {
  const telHref = `tel:+52${telefono.replace(/\s/g, '')}`

  return (
    <article className="flex w-full max-w-[42rem] flex-col overflow-hidden border border-white/25 text-left transition-colors duration-500 hover:border-white md:w-[40rem]">
      {/* Foto de la sucursal (con placeholder si aún no hay imagen) */}
      <div className="relative">
        <SucursalImagen src={imagen} alt={`Sucursal GRUMEX en ${ciudad}`} />
        {matriz && (
          <span className="absolute top-[1.5rem] left-[1.5rem] border border-white/50 bg-black/70 px-[1.5rem] py-[0.5rem] text-[1.2rem] font-bold tracking-[0.25rem] uppercase backdrop-blur">
            Matriz
          </span>
        )}
      </div>

      {/* Datos de la sucursal */}
      <div className="flex flex-1 flex-col p-[3.5rem]">
        <div className="flex items-start gap-[1.2rem]">
          <PinIcon />
          <div>
            <h3 className="m-0 text-[2.6rem] leading-tight font-bold">{ciudad}</h3>
            <p className="m-0 text-[1.5rem] tracking-[0.15rem] uppercase opacity-60">{estado}</p>
          </div>
        </div>

        <p className="mt-[2rem] text-[1.7rem] leading-relaxed opacity-90">
          {edificio && (
            <>
              <span className="font-semibold">{edificio}</span>
              <br />
            </>
          )}
          {direccion}
          <br />
          C.P. {cp}
        </p>

        <div className="my-[2.5rem] h-px w-full bg-white/20" />

        <a
          href={telHref}
          className="flex items-center gap-[1rem] text-[1.7rem] transition-opacity hover:opacity-70"
        >
          <PhoneIcon />
          {telefono}
        </a>
        <p className="mt-[1.2rem] flex items-center gap-[1rem] text-[1.5rem] opacity-70">
          <ClockIcon />
          {horario}
        </p>

        <a
          href={maps}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[3rem] inline-block border border-white bg-transparent px-[4rem] py-[1.3rem] text-center text-[1.6rem] font-bold uppercase transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Cómo llegar
        </a>
      </div>
    </article>
  )
}

/**
 * Foto de la sucursal. Si la imagen no existe (aún no se sube el archivo)
 * o falla la carga, muestra un placeholder con el logo de GRUMEX.
 */
function SucursalImagen({ src, alt }: { src?: string; alt: string }) {
  const [falló, setFalló] = useState(false)
  const mostrarFoto = src && !falló

  return (
    <div className="aspect-[16/10] w-full bg-[rgb(20,20,20)]">
      {mostrarFoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setFalló(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-[1.2rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/GRUMEX/GRUMEXWH.svg"
            alt="GRUMEX"
            className="w-[14rem] opacity-30"
          />
          <span className="text-[1.3rem] tracking-[0.2rem] uppercase opacity-30">
            Foto próximamente
          </span>
        </div>
      )}
    </div>
  )
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mt-[0.4rem] h-[2.6rem] w-[2.6rem] shrink-0"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[2rem] w-[2rem] shrink-0"
      aria-hidden="true"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[2rem] w-[2rem] shrink-0"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
  )
}
