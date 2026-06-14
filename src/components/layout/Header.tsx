'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
    label: 'Mármol',
    href: '/marmol',
    icono: '/assets/img/Index/Marmol/marmol.svg',
  },
  {
    label: 'Logística y Maniobras',
    href: '/logistica',
    icono: '/assets/img/Index/Logisticaymaniobras/iconologisticaymaniobras.svg',
  },
]

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-dark/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/img/GRUMEX/GRUMEX.svg"
            alt="GRUMEX"
            width={130}
            height={38}
            priority
          />
        </Link>

        {/* Links desktop — íconos + texto igual que el original */}
        <nav className="hidden items-center gap-1 md:flex">
          {servicios.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-white/10"
            >
              <Image src={s.icono} alt={s.label} width={28} height={28} unoptimized />
              <span className="text-[11px] font-medium leading-tight text-white">{s.label}</span>
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

      {/* Menú mobile */}
      <div
        className={`bg-dark overflow-hidden transition-all duration-300 md:hidden ${menuAbierto ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className="flex flex-col gap-1 px-6 pt-2 pb-6">
          {servicios.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                onClick={() => setMenuAbierto(false)}
                className="hover:text-primary flex items-center gap-3 py-2 text-sm font-medium text-white transition-colors"
              >
                <Image src={s.icono} alt={s.label} width={20} height={20} unoptimized />
                {s.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="/#contacto"
              onClick={() => setMenuAbierto(false)}
              className="bg-primary block rounded-full px-5 py-2 text-center text-sm font-semibold text-white"
            >
              Cotiza ahora
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
