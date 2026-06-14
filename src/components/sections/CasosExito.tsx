'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * Slider de casos de éxito, réplica de la sección `.exitos` del legacy:
 *  - Grid 70/30 (78/22 en ≥1024px): imagen grande a la izquierda con overlay
 *    "NUESTROS CASOS DE ÉXITO" y panel negro a la derecha con nombre, logo,
 *    descripción y flechas ‹ ›.
 *  - Fila de thumbnails debajo; al hacer clic cambia el caso activo.
 */
const casos = [
  {
    cliente: 'E - Dental Group',
    imagen: '/assets/img/Index/Mobiliaria/Casos de éxito/Edentalgroup/consultorio.png',
    logo: '/assets/img/Index/Mobiliaria/Casos de éxito/Edentalgroup/E-Dental Group.svg',
    descripcion:
      'Trabajamos en conjunto con E-Dental Group para remodelar su consultorio dental, diseñando y fabricando mobiliario a medida que optimiza el espacio y mejora la experiencia de pacientes y personal.',
  },
  {
    cliente: 'Walmart',
    imagen: '/assets/img/empresas/Walmart/walmartestanterias.png',
    logo: '/assets/img/empresas/Walmart/walmatsf.png',
    descripcion:
      'Trabajamos estrechamente con Walmart para optimizar sus sistemas de almacenamiento en tiendas y centros de distribución. Con maquila CNC brindamos estanterías personalizadas que mejoraron la eficiencia logística.',
  },
  {
    cliente: 'U-Storage',
    imagen: '/assets/img/empresas/U-Storage/bodegasustorage.webp',
    logo: '/assets/img/empresas/U-Storage/U-storage.c.png',
    descripcion:
      'Colaboramos con U-Storage para diseñar y suministrar soluciones que mejoran la eficiencia en la distribución y organización de las bodegas, ofreciendo espacios más funcionales y seguros.',
  },
  {
    cliente: 'Palacio Mundo Imperial',
    imagen: '/assets/img/empresas/HotelMundoPalacio/palacioroom.jpg',
    logo: '/assets/img/empresas/HotelMundoPalacio/palacio-logo.svg',
    descripcion:
      'Diseñamos y fabricamos mobiliario exclusivo para sus interiores. Nuestro enfoque en calidad y funcionalidad permitió crear espacios elegantes y confortables con acabados de lujo.',
  },
  {
    cliente: 'Hyatt',
    imagen: '/assets/img/empresas/HotelHyatt/hyatt.webp',
    logo: '/assets/img/empresas/HotelHyatt/hyatt.svg',
    descripcion:
      'Diseñamos y fabricamos mobiliario de alta calidad integrado a su estilo moderno y sofisticado. El cuidado en detalles y acabados creó un ambiente acogedor y funcional.',
  },
  {
    cliente: 'Guardabox',
    imagen: '/assets/img/empresas/GUARDABOX/GUARDABOXCAJAS.jpeg',
    logo: '/assets/img/empresas/GUARDABOX/LOGOGUARDABOX.svg',
    descripcion:
      'Colaboramos con Guardabox para fabricar soluciones que mejoran la distribución y organización de espacios publicitarios, con vallas de alta calidad y acabados precisos en todo México.',
  },
]

export default function CasosExito() {
  const [actual, setActual] = useState(0)
  const total = casos.length
  const prev = () => setActual((i) => (i - 1 + total) % total)
  const next = () => setActual((i) => (i + 1) % total)
  const caso = casos[actual]

  return (
    <section>
      {/* Slider principal: grid 70/30 en ≥960px */}
      <div className="md:grid md:grid-cols-[70%_30%] lg:grid-cols-[78%_22%]">
        {/* Izquierda: imagen grande con overlay */}
        <div className="relative h-[40rem] w-full overflow-hidden md:h-[65rem]">
          <Image
            src={caso.imagen}
            alt={caso.cliente}
            fill
            className="object-cover"
            sizes="(max-width: 960px) 100vw, 78vw"
            priority
          />
          {/* gradiente inferior */}
          <div className="absolute inset-0 [background:linear-gradient(to_top,#000_2%,transparent_98%)]" />
          {/* título */}
          <div className="absolute bottom-0 left-0 flex w-full justify-center pb-[4rem] md:pl-[20rem] lg:pl-[36rem]">
            <h2 className="m-0 text-[3rem] font-bold text-white uppercase md:text-[4.5rem] lg:text-[4.8rem]">
              Nuestros casos de éxito
            </h2>
          </div>
        </div>

        {/* Derecha: panel negro con info */}
        <div className="relative bg-black">
          <div className="flex h-full flex-col items-center justify-center px-[2rem] py-[5rem] text-center text-white md:py-0">
            <p className="m-0 text-[1.5rem] tracking-[10px] uppercase lg:text-[1.8rem]">
              {caso.cliente}
            </p>
            <div className="relative my-[2rem] h-[12rem] w-full max-w-[80%]">
              <Image
                src={caso.logo}
                alt={caso.cliente}
                fill
                className="object-contain"
                sizes="22vw"
              />
            </div>
            <p className="m-0 max-w-[500px] text-[1.6rem] leading-relaxed">{caso.descripcion}</p>
          </div>

          {/* flechas */}
          <div className="absolute bottom-[2rem] left-1/2 flex -translate-x-1/2 gap-[1rem] md:left-[3rem] md:translate-x-0">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="h-[40px] w-[40px] rounded-[5px] bg-[rgba(238,238,238,0.33)] font-mono text-2xl text-[#eee] transition-all duration-500 hover:cursor-pointer hover:bg-[#eee] hover:text-black"
            >
              {'<'}
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="h-[40px] w-[40px] rounded-[5px] bg-[rgba(238,238,238,0.33)] font-mono text-2xl text-[#eee] transition-all duration-500 hover:cursor-pointer hover:bg-[#eee] hover:text-black"
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex h-[12rem] w-full gap-[1rem] overflow-x-auto px-[1rem] py-[1rem] md:h-[24rem] md:gap-[2rem] md:px-[2rem]">
        {casos.map((c, i) => (
          <button
            key={c.cliente}
            onClick={() => setActual(i)}
            aria-label={c.cliente}
            className={[
              'relative h-full w-[15rem] shrink-0 overflow-hidden transition-all duration-500 md:w-[45rem]',
              i === actual ? 'brightness-110' : 'brightness-[0.7]',
            ].join(' ')}
          >
            <Image
              src={c.imagen}
              alt={c.cliente}
              fill
              className="object-cover"
              sizes="(max-width: 960px) 15rem, 45rem"
            />
            {/* logo overlay */}
            <span className="absolute right-[5px] bottom-[5px] block w-[30%] md:right-[10px] md:bottom-[10px] md:w-[20%]">
              <Image
                src={c.logo}
                alt={c.cliente}
                width={120}
                height={60}
                className="h-auto w-full object-contain"
              />
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
