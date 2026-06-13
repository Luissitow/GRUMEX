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
    <section className="bg-gray-soft py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-dark mb-4 text-4xl font-extrabold">Casos de Éxito</h2>
          <p className="text-gray-500">Proyectos que hablan por nosotros</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Imagen */}
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-auto">
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
                <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-1 text-sm font-semibold">
                  {casos[actual].servicio}
                </span>
                <h3 className="text-dark mb-4 text-3xl font-extrabold">{casos[actual].cliente}</h3>
                <p className="mb-8 leading-relaxed text-gray-500">{casos[actual].descripcion}</p>
                <div className="h-10">
                  <Image
                    src={casos[actual].logo}
                    alt={casos[actual].cliente}
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain grayscale"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navegación */}
            <div className="mt-10 flex gap-3">
              {casos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActual(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === actual ? 'bg-primary w-10' : 'w-2 bg-gray-300 hover:bg-gray-400'
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
