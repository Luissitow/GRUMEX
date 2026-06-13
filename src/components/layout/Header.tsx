'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const servicios = [
  { label: 'Manufactura', href: '/manufactura' },
  { label: 'Mobiliaria', href: '/mobiliaria' },
  { label: 'Construcción', href: '/construccion' },
  { label: 'Mármol', href: '/marmol' },
  { label: 'Importación', href: '/importacion' },
  { label: 'Logística y Maniobras', href: '/logistica' },
]

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        sticky ? 'bg-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/img/GRUMEX/GRUMEX.svg"
            alt="GRUMEX"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {servicios.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="hover:text-primary text-sm font-medium text-white transition-colors"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <Link
          href="/#contacto"
          className="bg-primary hover:bg-primary-dark hidden rounded-full px-5 py-2 text-sm font-semibold text-white transition-colors md:block"
        >
          Cotiza ahora
        </Link>

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
      </nav>

      {/* Menú mobile */}
      <div
        className={`bg-dark overflow-hidden transition-all duration-300 md:hidden ${
          menuAbierto ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pt-2 pb-6">
          {servicios.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                onClick={() => setMenuAbierto(false)}
                className="hover:text-primary block py-2 text-sm font-medium text-white transition-colors"
              >
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
