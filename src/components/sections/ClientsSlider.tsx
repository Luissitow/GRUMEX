import Image from 'next/image'

const clientes = [
  { nombre: 'Santa Fe', logo: '/assets/img/empresas/santafe.jpg' },
  { nombre: 'Guardabox', logo: '/assets/img/empresas/GUARDABOX/LOGOGUARDABOX.svg' },
  { nombre: 'CFE', logo: '/assets/img/empresas/CFE/CFE.jpg' },
  { nombre: 'U-Storage', logo: '/assets/img/empresas/U-Storage/u-storage.png' },
  { nombre: 'Walmart', logo: '/assets/img/empresas/Walmart/walmatsf.png' },
  { nombre: 'Hotel Hyatt', logo: '/assets/img/empresas/HotelHyatt/hyatt.svg' },
  { nombre: 'Lacoste', logo: '/assets/img/empresas/lacoste.png' },
  { nombre: 'Interlomas', logo: '/assets/img/empresas/interlomas.jpg' },
  { nombre: 'Pull&Bear', logo: '/assets/img/empresas/pullandbear.png' },
  { nombre: 'Zara', logo: '/assets/img/empresas/zara.png' },
  { nombre: 'Nike', logo: '/assets/img/empresas/nike.png' },
  { nombre: 'Adidas', logo: '/assets/img/empresas/adidas.svg' },
]

export default function ClientsSlider() {
  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <h2 className="text-dark text-2xl font-bold">Algunos de nuestros clientes</h2>
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
