import Image from 'next/image'
import Link from 'next/link'
import type { PanelCollage as Panel } from '@/lib/servicios'

interface PanelCollageProps {
  paneles: Panel[]
  /** Margen superior para compensar el header fijo */
  conMargenSuperior?: boolean
}

/**
 * Collage de paneles verticales, réplica exacta de `.header__contenido--six`
 * y `.header__services` del legacy (app.css):
 *  - Móvil (<960px): apilados, cada panel 28rem, ícono visible (overlay 100%).
 *  - ≥960px: grid de N columnas, panel 55rem; ≥1024px 70rem.
 *  - El overlay del ícono (`.header__iconos`) empieza en height 0 y se
 *    despliega a 100% al hover (transition height 0.6s), con padding-bottom 8rem.
 *  - El SVG ya contiene el nombre del servicio (no se añade texto aparte).
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
        'md:grid md:gap-0',
        colsDesktop,
        conMargenSuperior ? 'mt-[7rem] md:mt-[8rem]' : '',
      ].join(' ')}
    >
      {paneles.map((panel, i) => (
        <div
          key={`${panel.titulo}-${i}`}
          className="group relative h-[28rem] overflow-hidden md:h-[55rem] lg:h-[70rem]"
        >
          {/* Imagen de fondo con zoom al hover (transform 0.8s) */}
          <div className="absolute inset-0 transition-transform duration-[800ms] group-hover:scale-110">
            <Image
              src={panel.fondo}
              alt={panel.titulo}
              fill
              className="object-cover"
              sizes="(max-width: 960px) 100vw, 17vw"
              priority={i < 3}
            />
          </div>

          {/* Overlay con el ícono (.header__iconos) */}
          <Link
            href={panel.href}
            aria-label={panel.titulo}
            className={[
              'absolute inset-x-0 bottom-0 flex w-full flex-col items-center overflow-hidden',
              '[background:linear-gradient(transparent,rgba(0,0,0,0.829)_98%)]',
              // móvil: visible y centrado
              'h-full justify-center',
              // ≥960px: height 0 → 100% al hover, anclado abajo con pb 8rem
              'md:h-0 md:justify-end md:pb-[8rem] md:transition-[height] md:duration-[600ms] md:group-hover:h-full',
            ].join(' ')}
          >
            {/* .header__box: 50% alto en móvil, 25% en desktop */}
            <div className="flex h-1/2 cursor-pointer items-center justify-center md:h-1/4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={panel.icono}
                alt={panel.titulo}
                className="h-full w-auto object-contain p-[1rem]"
              />
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
}
