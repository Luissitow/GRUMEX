'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const casos = [
  {
    cliente: 'Walmart',
    logo: '/assets/img/empresas/Walmart/walmart.png',
    imagen: '/assets/img/empresas/Walmart/walmartestanterias.png',
    descripcion:
      'Optimizamos los sistemas de almacenamiento en tiendas y centros de distribución con estanterías CNC personalizadas que mejoraron la eficiencia logística.',
    servicio: 'Manufactura CNC',
  },
  {
    cliente: 'CFE',
    logo: '/assets/img/empresas/CFE/CFE.png',
    imagen: '/assets/img/empresas/CFE/cajeroscfe.jpeg',
    descripcion:
      'Fabricamos componentes metálicos para cajeros automáticos con altos estándares de precisión y durabilidad requeridos por la Comisión Federal de Electricidad.',
    servicio: 'Manufactura de precisión',
  },
  {
    cliente: 'Hyatt Hotels',
    logo: '/assets/img/empresas/HotelHyatt/hyatt.svg',
    imagen: '/assets/img/empresas/HotelHyatt/hyatt.webp',
    descripcion:
      'Desarrollamos mobiliario corporativo exclusivo para las áreas de recepción y espacios comunes del hotel, con acabados de alta calidad.',
    servicio: 'Mobiliaria corporativa',
  },
  {
    cliente: 'U-Storage',
    logo: '/assets/img/empresas/U-Storage/u-storage.png',
    imagen: '/assets/img/empresas/U-Storage/bodegasustorage.webp',
    descripcion:
      'Diseñamos e instalamos soluciones de almacenamiento modular que maximizan el uso del espacio en sus unidades de autoalmacenamiento.',
    servicio: 'Mobiliaria industrial',
  },
]

export default function CasosExito() {
  const [actual, setActual] = useState(0)

  return (
    <section className="bg-white py-[6rem]">
      <div className="mx-auto w-[min(95%,140rem)] px-[2rem]">
        <div className="mb-[5rem] text-center">
          <h2 className="m-0 text-[3rem] font-bold uppercase md:text-[4.5rem] lg:text-[4.8rem]">
            Casos de Éxito
          </h2>
          <p className="mt-[1rem] text-[1.8rem] text-gray-500">Proyectos que hablan por nosotros</p>
        </div>

        <div className="grid gap-[3rem] lg:grid-cols-2">
          {/* Imagen */}
          <div className="relative h-[32rem] overflow-hidden rounded-[2rem] lg:h-auto lg:min-h-[40rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={actual}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={casos[actual].imagen}
                  alt={casos[actual].cliente}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={actual}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="bg-primary/10 text-primary mb-[1.5rem] inline-block rounded-full px-[1.5rem] py-[0.5rem] text-[1.4rem] font-semibold">
                  {casos[actual].servicio}
                </span>
                <h3 className="mb-[1.5rem] text-[2.6rem] font-extrabold text-black md:text-[3.2rem]">
                  {casos[actual].cliente}
                </h3>
                <p className="mb-[3rem] text-[1.8rem] leading-relaxed text-gray-600">
                  {casos[actual].descripcion}
                </p>
                <div className="h-[4rem]">
                  <Image
                    src={casos[actual].logo}
                    alt={casos[actual].cliente}
                    width={120}
                    height={40}
                    className="max-h-[4rem] w-auto object-contain grayscale"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navegación */}
            <div className="mt-[3rem] flex gap-[1rem]">
              {casos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActual(i)}
                  className={`h-[0.8rem] rounded-full transition-all duration-300 ${
                    i === actual
                      ? 'bg-primary w-[4rem]'
                      : 'w-[0.8rem] bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Caso ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
