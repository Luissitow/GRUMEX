'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'

/**
 * Casos de éxito (sección `.exitos` del legacy) con experiencia scroll-driven:
 * la sección se fija (sticky) y, al hacer scroll, va avanzando entre casos.
 * Grid 70/30 (imagen + panel negro) y fila de thumbnails que también permiten
 * saltar a un caso (hace scroll a su segmento).
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
  const ref = useRef<HTMLDivElement>(null)
  const [actual, setActual] = useState(0)
  const total = casos.length

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // El progreso de scroll (0–1) define el caso activo.
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const i = Math.min(total - 1, Math.max(0, Math.floor(v * total)))
    setActual(i)
  })

  // Salta al segmento de scroll de un caso (para thumbnails/flechas).
  function scrollToIndex(i: number) {
    const el = ref.current
    if (!el) return
    const scrollable = el.offsetHeight - window.innerHeight
    const target = el.offsetTop + (i / total) * scrollable + 2
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  const caso = casos[actual]

  return (
    // Sección alta: da recorrido de scroll para todos los casos.
    <section ref={ref} style={{ height: `${total * 60}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Slider principal: grid 70/30 */}
        <div className="grid min-h-0 flex-1 md:grid-cols-[70%_30%] lg:grid-cols-[78%_22%]">
          {/* Izquierda: imagen grande con overlay */}
          <div className="relative h-full w-full overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={actual}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={caso.imagen}
                  alt={caso.cliente}
                  fill
                  className="object-cover"
                  sizes="(max-width: 960px) 100vw, 78vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
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
            <AnimatePresence mode="wait">
              <motion.div
                key={actual}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="flex h-full flex-col items-center justify-center px-[2rem] py-[4rem] text-center text-white"
              >
                <p className="m-0 text-[1.5rem] tracking-[10px] uppercase lg:text-[1.8rem]">
                  {caso.cliente}
                </p>
                <div className="relative my-[2rem] h-[10rem] w-full max-w-[80%]">
                  <Image
                    src={caso.logo}
                    alt={caso.cliente}
                    fill
                    className="object-contain"
                    sizes="22vw"
                  />
                </div>
                <p className="m-0 max-w-[500px] text-[1.6rem] leading-relaxed">
                  {caso.descripcion}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* indicador de progreso */}
            <div className="absolute right-[3rem] bottom-[2rem] left-[3rem] flex justify-center gap-[0.8rem]">
              {casos.map((c, i) => (
                <button
                  key={c.cliente}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Ir a ${c.cliente}`}
                  className={`h-[0.5rem] rounded-full transition-all duration-300 ${
                    i === actual ? 'w-[3rem] bg-white' : 'w-[1rem] bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex h-[16vh] max-h-[18rem] w-full shrink-0 gap-[1rem] overflow-x-auto bg-black px-[1rem] py-[1rem] md:gap-[2rem] md:px-[2rem]">
          {casos.map((c, i) => (
            <button
              key={c.cliente}
              onClick={() => scrollToIndex(i)}
              aria-label={c.cliente}
              className={[
                'relative h-full w-[15rem] shrink-0 overflow-hidden transition-all duration-500 md:w-[40rem]',
                i === actual ? 'ring-2 ring-white brightness-110' : 'brightness-[0.6]',
              ].join(' ')}
            >
              <Image
                src={c.imagen}
                alt={c.cliente}
                fill
                className="object-cover"
                sizes="(max-width: 960px) 15rem, 40rem"
              />
              <span className="absolute right-[5px] bottom-[5px] block w-[28%] md:right-[10px] md:bottom-[10px] md:w-[18%]">
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
      </div>
    </section>
  )
}
