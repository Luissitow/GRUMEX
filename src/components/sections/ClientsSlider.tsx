import Image from 'next/image'

const clientes = [
  { nombre: 'Walmart', logo: '/assets/img/empresas/Walmart/walmart.png' },
  { nombre: 'CFE', logo: '/assets/img/empresas/CFE/CFE.png' },
  { nombre: 'Hyatt', logo: '/assets/img/empresas/HotelHyatt/hyatt.svg' },
  { nombre: 'U-Storage', logo: '/assets/img/empresas/U-Storage/u-storage.png' },
  { nombre: 'Guardabox', logo: '/assets/img/empresas/GUARDABOX/LOGOGUARDABOX.png' },
  {
    nombre: 'Palacio Mundo Imperial',
    logo: '/assets/img/empresas/HotelMundoPalacio/palacio-logo.svg',
  },
  { nombre: 'Nike', logo: '/assets/img/empresas/nike.png' },
  { nombre: 'Adidas', logo: '/assets/img/empresas/adidas.svg' },
  { nombre: 'Zara', logo: '/assets/img/empresas/zara.png' },
  { nombre: 'Lacoste', logo: '/assets/img/empresas/lacoste.png' },
]

export default function ClientsSlider() {
  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <h2 className="text-dark text-2xl font-bold">Empresas que confían en nosotros</h2>
      </div>

      {/* Track duplicado para loop infinito con CSS */}
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
          {clientes.map((c) => (
            <div
              key={c.nombre}
              className="flex h-16 w-32 shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={c.logo}
                alt={c.nombre}
                width={100}
                height={50}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {/* Duplicado para el loop continuo */}
        <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16" aria-hidden>
          {clientes.map((c) => (
            <div
              key={c.nombre + '-2'}
              className="flex h-16 w-32 shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={c.logo}
                alt={c.nombre}
                width={100}
                height={50}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
