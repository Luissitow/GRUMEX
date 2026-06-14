import Image from 'next/image'
import Link from 'next/link'
import type { PanelCollage as Panel } from '@/lib/servicios'

interface PanelCollageProps {
  paneles: Panel[]
  /** Margen superior para compensar el header fijo (solo en la home/servicios) */
  conMargenSuperior?: boolean
}

/**
 * Collage de paneles verticales replicando `.header__services` del sitio
 * original:
 *  - En móvil/tablet (<1024px) los paneles se apilan y el ícono es visible.
 *  - En desktop (≥1024px) se vuelve un grid de N columnas y el overlay del
 *    ícono empieza en height 0 y se despliega a 100% al hover
 *    (transition height 0.6s), igual que `.header__iconos` en app.css.
 */
export default function PanelCollage({ paneles, conMargenSuperior = false }: PanelCollageProps) {
  const colsDesktop =
    {
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
      5: 'lg:grid-cols-5',
      6: 'lg:grid-cols-6',
    }[paneles.length] ?? 'lg:grid-cols-6'

  return (
    <section
      className={[
        'lg:grid lg:h-[70rem]',
        colsDesktop,
        conMargenSuperior ? 'mt-[72px] lg:mt-[120px]' : '',
      ].join(' ')}
    >
      {paneles.map((panel, i) => (
        <div
          key={`${panel.titulo}-${i}`}
          className="group relative h-[28rem] overflow-hidden lg:h-auto"
        >
          {/* Wrapper para el zoom: el transform va aquí, no en next/image */}
          <div className="absolute inset-0 transition-transform duration-[800ms] group-hover:scale-110">
            <Image
              src={panel.fondo}
              alt={panel.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 17vw"
              priority={i < 3}
            />
          </div>

          {/*
           * Overlay: en móvil siempre visible (h-full).
           * En desktop empieza en h-0 y se expande a h-full al hover,
           * igual que .header__iconos del CSS original.
           */}
          <Link
            href={panel.href}
            aria-label={panel.titulo}
            className={[
              'absolute inset-x-0 bottom-0 overflow-hidden',
              'flex flex-col items-center justify-end pb-12 lg:pb-32',
              'transition-[height] duration-[600ms] ease-in-out',
              '[background:linear-gradient(transparent,rgba(0,0,0,0.83)_98%)]',
              'h-full',
              'lg:h-0 lg:group-hover:h-full',
            ].join(' ')}
          >
            <div className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={panel.icono} alt={panel.titulo} className="h-20 w-20 object-contain" />
              <span className="text-center text-sm font-bold tracking-widest text-white uppercase drop-shadow">
                {panel.titulo}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
}
