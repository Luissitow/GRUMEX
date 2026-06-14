import Image from 'next/image'
import Link from 'next/link'
import type { PanelCollage as Panel } from '@/lib/servicios'

interface PanelCollageProps {
  paneles: Panel[]
  /** Margen superior para compensar el header fijo (solo en la home) */
  conMargenSuperior?: boolean
}

/**
 * Collage de paneles verticales replicando `.header__services` del sitio
 * original: imagen de fondo con zoom al hover y overlay con ícono que en
 * desktop aparece deslizándose desde abajo (height 0 → 100%).
 *
 * Se usa tanto en la home (6 paneles) como en cada página de servicio
 * (3-5 paneles), por eso el grid se adapta al número de paneles.
 */
export default function PanelCollage({ paneles, conMargenSuperior = false }: PanelCollageProps) {
  const colsDesktop =
    {
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
      5: 'md:grid-cols-5',
      6: 'md:grid-cols-6',
    }[paneles.length] ?? 'md:grid-cols-6'

  return (
    <section
      className={[
        'grid h-[28rem] grid-cols-2 md:h-[55rem] lg:h-[70rem]',
        colsDesktop,
        conMargenSuperior ? 'mt-[68px]' : '',
      ].join(' ')}
    >
      {paneles.map((panel, i) => (
        <div key={`${panel.titulo}-${i}`} className="group relative overflow-hidden">
          {/* Wrapper para el zoom: el transform va aquí, no en next/image */}
          <div className="absolute inset-0 transition-transform duration-[800ms] group-hover:scale-110">
            <Image
              src={panel.fondo}
              alt={panel.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 17vw"
              priority={i < 3}
            />
          </div>

          {/*
           * Overlay: en mobile siempre visible (h-full).
           * En desktop empieza en h-0 y expande a h-full al hover,
           * igual que .header__iconos del CSS original.
           */}
          <Link
            href={panel.href}
            aria-label={panel.titulo}
            className={[
              'absolute inset-x-0 bottom-0 overflow-hidden',
              'flex flex-col items-center justify-end pb-8 md:pb-32',
              'transition-[height] duration-[600ms] ease-in-out',
              '[background:linear-gradient(transparent,rgba(0,0,0,0.83)_98%)]',
              'h-full',
              'md:h-0 md:group-hover:h-full',
            ].join(' ')}
          >
            <div className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={panel.icono}
                alt={panel.titulo}
                className="h-16 w-16 object-contain md:h-20 md:w-20"
              />
              <span className="text-center text-xs font-bold tracking-widest text-white uppercase drop-shadow">
                {panel.titulo}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
}
