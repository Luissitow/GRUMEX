import Link from 'next/link'
import Image from 'next/image'

const servicios = [
  {
    titulo: 'Manufactura',
    descripcion: 'Corte láser, soldadura, doblez de metal y pintura electrostática.',
    icono: '/assets/img/Index/manufactura/manufacturaicon.svg',
    href: '/manufactura',
    color: 'from-blue-600/10',
  },
  {
    titulo: 'Mobiliaria',
    descripcion: 'Mobiliario de oficina, industrial, retail y hogar a tu medida.',
    icono: '/assets/img/Index/Mobiliaria/Mobiliaria.svg',
    href: '/mobiliaria',
    color: 'from-cyan-600/10',
  },
  {
    titulo: 'Construcción',
    descripcion: 'Obra civil, remodelaciones, instalaciones especializadas.',
    icono: '/assets/img/Index/Construcción/iconoconstruccion.svg',
    href: '/construccion',
    color: 'from-orange-600/10',
  },
  {
    titulo: 'Mármol',
    descripcion: 'Cubiertas, revestimientos y mobiliario en mármol de alta calidad.',
    icono: '/assets/img/Index/Marmol/marmol.svg',
    href: '/marmol',
    color: 'from-stone-600/10',
  },
  {
    titulo: 'Importación',
    descripcion: 'Logística internacional, gestión aduanal y maquinaria especializada.',
    icono: '/assets/img/Index/Importación/servicios/iconoimportacion.svg',
    href: '/importacion',
    color: 'from-green-600/10',
  },
  {
    titulo: 'Logística y Maniobras',
    descripcion: 'Transporte, montacargas, grúas y maniobras industriales.',
    icono: '/assets/img/Index/Logisticaymaniobras/iconologisticaymaniobras.svg',
    href: '/logistica',
    color: 'from-purple-600/10',
  },
]

export default function Servicios() {
  return (
    <section className="bg-gray-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-dark mb-4 text-4xl font-extrabold">Nuestros Servicios</h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Más de 20 años ofreciendo soluciones integrales a empresas líderes en México.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${s.color} border border-gray-200 to-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                <Image src={s.icono} alt={s.titulo} width={32} height={32} />
              </div>
              <h3 className="text-dark mb-3 text-xl font-bold">{s.titulo}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{s.descripcion}</p>
              <span className="text-primary mt-6 inline-flex items-center gap-1 text-sm font-semibold">
                Ver más
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
