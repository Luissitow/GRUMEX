import Link from 'next/link'
import { getSubcategorias } from '@/lib/servicios'

/**
 * Navegación entre subcategorías hermanas (inspirada en `.navegacion_estatica`
 * del legacy): franja negra con enlaces a las demás subcategorías del servicio,
 * resaltando la activa.
 */
export default function SubServiciosNav({
  servicio,
  actual,
}: {
  servicio: string
  actual: string
}) {
  const subs = getSubcategorias(servicio)
  if (subs.length <= 1) return null

  return (
    <nav className="bg-black">
      <ul className="mx-auto flex w-[min(95%,140rem)] flex-wrap justify-center gap-[1rem] py-[2rem]">
        {subs.map((s) => {
          const activo = s.slug === actual
          return (
            <li key={s.slug}>
              <Link
                href={`/${servicio}/${s.slug}`}
                className={[
                  'inline-block border px-[2rem] py-[1rem] text-[1.5rem] font-medium uppercase transition-colors duration-500',
                  activo
                    ? 'border-white bg-white text-black'
                    : 'border-white/40 text-white hover:bg-white hover:text-black',
                ].join(' ')}
              >
                {s.nombre}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
