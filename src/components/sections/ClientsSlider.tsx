/**
 * Slider de logos de clientes, réplica de `.contador` + `.new-slider` del
 * legacy (slider.css): fondo blanco, h2, marquee continuo con imágenes de
 * 10rem de alto. Se duplica la lista para un loop sin cortes.
 */
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
    <section className="mx-auto flex w-[min(95%,140rem)] flex-col gap-[5rem] bg-white py-[5rem] text-center md:pt-[10rem]">
      <h2 className="m-0 text-[3rem] font-bold uppercase md:text-[4.5rem] lg:text-[4.8rem]">
        Algunos de nuestros clientes
      </h2>

      <div className="relative flex w-full overflow-hidden px-[10px]">
        {[0, 1].map((track) => (
          <div key={track} className="animate-marquee flex shrink-0" aria-hidden={track === 1}>
            {clientes.map((c) => (
              <div key={`${c.nombre}-${track}`} className="flex shrink-0 items-center px-[3rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.nombre}
                  className="h-[8rem] w-auto max-w-full object-contain md:h-[10rem]"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
