import Image from 'next/image'
import Link from 'next/link'

const paneles = [
  {
    titulo: 'Mobiliaria',
    href: '/mobiliaria',
    fondo: '/assets/img/Index/Mobiliaria/Mobiliaria.png',
    icono: '/assets/img/Index/Mobiliaria/Mobiliaria.svg',
  },
  {
    titulo: 'Construcción',
    href: '/construccion',
    fondo: '/assets/img/Index/Construcción/construccion.jpg',
    icono: '/assets/img/Index/Construcción/Construccionicon.svg',
  },
  {
    titulo: 'Manufactura',
    href: '/manufactura',
    fondo: '/assets/img/Index/manufactura/Manufactura.jpeg',
    icono: '/assets/img/Index/manufactura/manufacturaicon.svg',
  },
  {
    titulo: 'Importación',
    href: '/importacion',
    fondo: '/assets/img/Index/Importación/img/importacion.png',
    icono: '/assets/img/Index/Importación/servicios/iconoimportacion.svg',
  },
  {
    titulo: 'Mármol',
    href: '/marmol',
    fondo: '/assets/img/Index/Marmol/cocina marmol.jpg',
    icono: '/assets/img/Index/Marmol/marmol.svg',
  },
  {
    titulo: 'Logística y Maniobras',
    href: '/logistica',
    fondo: '/assets/img/Index/Importación/img/logistica.png',
    icono: '/assets/img/Index/Logisticaymaniobras/iconologisticaymaniobras.svg',
  },
]

export default function Hero() {
  return (
    <section className="mt-[68px] grid h-[28rem] grid-cols-2 md:h-[55rem] md:grid-cols-6 lg:h-[70rem]">
      {paneles.map((panel) => (
        <div key={panel.href} className="group relative overflow-hidden">
          {/* Imagen de fondo */}
          <Image
            src={panel.fondo}
            alt={panel.titulo}
            fill
            className="object-cover transition-transform duration-[800ms] group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 17vw"
            priority
          />

          {/*
           * Overlay: en mobile siempre visible (h-full).
           * En desktop empieza en h-0 y expande a h-full al hover,
           * igual que el original (.header__iconos en app.css).
           */}
          <Link
            href={panel.href}
            className={[
              'absolute inset-x-0 bottom-0 overflow-hidden',
              'flex flex-col items-center justify-end pb-8 md:pb-32',
              'transition-[height] duration-[600ms] ease-in-out',
              '[background:linear-gradient(transparent,rgba(0,0,0,0.83)_98%)]',
              /* mobile: siempre h-full */
              'h-full',
              /* desktop: empieza en h-0, hover → h-full */
              'md:h-0 md:group-hover:h-full',
            ].join(' ')}
            aria-label={panel.titulo}
          >
            {/* Ícono */}
            <div className="flex h-1/2 items-center justify-center p-4 md:h-1/4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={panel.icono} alt={panel.titulo} className="h-full w-full object-contain" />
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
}
