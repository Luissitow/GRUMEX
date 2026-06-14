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
    label: 'Logistica y Maniobras',
    href: '/logistica',
    icono: '/assets/img/Index/Logisticaymaniobras/iconologisticaymaniobras.svg',
  },
]

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black shadow-[0.1rem_0.2rem_0.1rem_rgb(29,29,29)]">
      <div className="mx-auto flex w-[min(95%,140rem)] items-center justify-between py-2">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          {/* Logo: height equivalente a 8rem del original */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/GRUMEX/GRUMEX.svg"
            alt="GRUMEX"
            className="h-16 w-auto object-contain md:h-[6.5rem]"
          />
        </Link>

        {/* Nav desktop — ícono + texto en fila (igual al original) */}
        <nav className="hidden items-center md:flex">
          {servicios.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center gap-2 px-3 py-3 text-center text-white transition-colors duration-500 hover:bg-white hover:text-black"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.icono}
                alt={s.label}
                className="h-9 w-9 object-contain pl-2 group-hover:invert md:h-[3.8rem] md:w-[3.8rem]"
              />
              <span className="text-sm leading-tight font-medium">{s.label}</span>
            </Link>
          ))}
        </nav>

        {/* Hamburger mobile */}
        <button
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuAbierto ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuAbierto ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuAbierto ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Menú mobile — ícono centrado + texto (como el original en móvil) */}
      <div
        className={`overflow-hidden bg-black transition-all duration-300 md:hidden ${menuAbierto ? 'max-h-[32rem]' : 'max-h-0'}`}
      >
        <ul className="flex flex-col">
          {servicios.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                onClick={() => setMenuAbierto(false)}
                className="flex flex-col items-center gap-1 py-3 text-center text-white transition-colors hover:bg-white hover:text-black [&:hover_img]:invert"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icono} alt={s.label} className="h-8 w-8 object-contain" />
                <span className="text-sm font-medium">{s.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
