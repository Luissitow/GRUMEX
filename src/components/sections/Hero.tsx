import Image from 'next/image'
import Link from 'next/link'

const paneles = [
  {
    titulo: 'Manufactura',
    href: '/manufactura',
    fondo: '/assets/img/Index/manufactura/cortelaser/cortelaser.jpg',
    icono: '/assets/img/Index/manufactura/manufacturaicon.svg',
  },
  {
    titulo: 'Mobiliaria',
    href: '/mobiliaria',
    fondo: '/assets/img/Index/Mobiliaria/mobiliarioref.jpg',
    icono: '/assets/img/Index/Mobiliaria/Mobiliaria.svg',
  },
  {
    titulo: 'Construcción',
    href: '/construccion',
    fondo: '/assets/img/Index/Construcción/construccion.jpg',
    icono: '/assets/img/Index/Construcción/Construccionicon.svg',
  },
  {
    titulo: 'Mármol',
    href: '/marmol',
    fondo: '/assets/img/Index/Marmol/marmol1.jpg',
    icono: '/assets/img/Index/Marmol/marmol.svg',
  },
  {
    titulo: 'Importación',
    href: '/importacion',
    fondo: '/assets/img/Index/Importación/img/Importacion.avif',
    icono: '/assets/img/Index/Importación/servicios/iconoimportacion.svg',
  },
  {
    titulo: 'Logística y Maniobras',
    href: '/logistica',
    fondo: '/assets/img/Index/Logisticaymaniobras/grua.jpg',
    icono: '/assets/img/Index/Logisticaymaniobras/iconologisticaymaniobras.svg',
  },
]

export default function Hero() {
  return (
    <section className="mt-[68px] flex h-[calc(100vh-68px)] w-full overflow-hidden">
      {paneles.map((panel) => (
        <Link
          key={panel.href}
          href={panel.href}
          className="group relative flex-1 overflow-hidden"
        >
          {/* Imagen de fondo */}
          <Image
            src={panel.fondo}
            alt={panel.titulo}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 17vw"
            priority
          />

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

          {/* Ícono + nombre centrado */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary/80 group-hover:scale-110">
              <Image src={panel.icono} alt={panel.titulo} width={36} height={36} unoptimized />
            </div>
            <p className="text-center text-sm font-bold uppercase tracking-wider text-white drop-shadow-lg">
              {panel.titulo}
            </p>
          </div>
        </Link>
      ))}
    </section>
  )
}
