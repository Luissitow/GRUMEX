/**
 * Slider de logos de clientes, réplica de `.contador` + `.new-slider` del
 * legacy (slider.css): fondo blanco, h2 y marquee continuo. Mejorado con
 * contenedores de tamaño uniforme, escala de grises que se colorea al hover,
 * pausa al pasar el mouse y bordes difuminados. La lista se duplica para un
 * loop sin cortes.
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
    <section className="bg-white py-[5rem] md:py-[8rem]">
      <h2 className="mb-[5rem] text-center text-[3rem] font-bold uppercase md:text-[4.5rem] lg:text-[4.8rem]">
        Algunos de nuestros clientes
      </h2>

      {/* group → pausa la animación al hover. Máscara → bordes difuminados. */}
      <div className="group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        {[0, 1].map((track) => (
          <ul
            key={track}
            aria-hidden={track === 1}
            className="animate-marquee flex shrink-0 items-center group-hover:[animation-play-state:paused]"
          >
            {clientes.map((c) => (
              <li
                key={`${c.nombre}-${track}`}
                className="flex h-[10rem] w-[16rem] shrink-0 items-center justify-center px-[2rem] md:w-[22rem]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.nombre}
                  className="max-h-[7rem] max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
