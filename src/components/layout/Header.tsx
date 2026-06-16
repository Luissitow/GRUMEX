'use client'

import { useState } from 'react'
import Link from 'next/link'

const servicios = [
  {
    label: 'Mobiliaria',
    href: '/mobiliaria',
    icono: '/assets/img/Index/Mobiliaria/Mobiliaria.svg',
  },
  {
    label: 'Construcción',
    href: '/construccion',
    icono: '/assets/img/Index/Construcción/Construccionicon.svg',
  },
  {
    label: 'Manufactura',
    href: '/manufactura',
    icono: '/assets/img/Index/manufactura/manufacturaicon.svg',
  },
  {
    label: 'Importación',
    href: '/importacion',
    icono: '/assets/img/Index/Importación/servicios/iconoimportacion.svg',
  },
  {
    label: 'Marmol',
    href: '/marmol',
    icono: '/assets/img/Index/Marmol/marmol.svg',
  },
  {
    label: 'Logistica y maniobras',
    href: '/logistica',
    icono: '/assets/img/Index/Logisticaymaniobras/iconologisticaymaniobras.svg',
  },
]

/**
 * Cabecera fija, replica `.navegacion` del legacy:
 * fondo negro, contenedor grid 20%/80% en ≥960px, logo 8rem, ítems a la
 * derecha con ícono 3.8rem + texto; hover invierte a blanco. En móvil se
 * abre con el botón hamburguesa (height toggle, igual que .navegacion__nav).
 */
export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="site-header fixed top-0 left-0 z-[1000] w-full bg-black shadow-[0.1rem_0.2rem_0.1rem_rgb(29,29,29)] transition-transform duration-500 ease-in-out">
      <div className="mx-auto grid w-[min(95%,140rem)] md:grid-cols-[20%_80%]">
        {/* Fila: logo + hamburguesa */}
        <div className="flex flex-row items-center justify-between md:block">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/GRUMEX/GRUMEX.svg"
              alt="GRUMEX"
              className="h-[7rem] w-auto pl-[2rem] md:h-[8rem] md:pl-0"
            />
          </Link>

          <button
            aria-label="Abrir menú"
            aria-expanded={menuAbierto}
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="cursor-pointer pr-[2rem] text-[2.6rem] text-white md:hidden"
          >
            <span className="block leading-none">{menuAbierto ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Navegación */}
        <nav
          className={[
            'overflow-hidden transition-all duration-500 ease-in-out',
            menuAbierto ? 'h-[40rem] opacity-100' : 'h-0 opacity-0',
            'md:flex md:h-auto md:flex-row md:justify-end md:opacity-100',
          ].join(' ')}
        >
          {servicios.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setMenuAbierto(false)}
              className="group flex flex-col items-center py-[0.8rem] text-center text-white transition-colors duration-500 hover:bg-white hover:text-black md:flex-row md:py-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.icono}
                alt={s.label}
                className="h-[3.2rem] w-auto transition-all duration-500 group-hover:invert md:h-[3.8rem] md:pl-[1rem]"
              />
              <p className="m-0 text-[1.4rem] md:mr-[1.2rem] lg:mx-[1.4rem] lg:text-[1.6rem]">
                {s.label}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
