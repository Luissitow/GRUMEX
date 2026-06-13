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

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/img/GRUMEX/GRUMEXWH.svg"
              alt="GRUMEX"
              width={140}
              height={40}
            />
            <p className="text-sm leading-relaxed text-white/60">
              Grupo Comercial Mexicano de la Industria y la Construcción. Más de
              20 años de experiencia en servicios industriales.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Servicios
            </h3>
            <ul className="flex flex-col gap-2">
              {servicios.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a
                  href="tel:+527229666219"
                  className="transition-colors hover:text-primary"
                >
                  +52 722 966 6219
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@grumex.mx"
                  className="transition-colors hover:text-primary"
                >
                  contacto@grumex.mx
                </a>
              </li>
              <li className="text-white/50">
                Toluca de Lerdo, Estado de México
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} GRUMEX — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
