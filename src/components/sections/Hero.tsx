'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    img: '/assets/img/Index/manufactura/cortelaser/cortelaser.jpg',
    titulo: 'Manufactura de precisión',
    subtitulo: 'Corte láser, soldadura, doblez y pintura electrostática',
    cta: { label: 'Ver manufactura', href: '/manufactura' },
  },
  {
    img: '/assets/img/Index/Mobiliaria/mobiliarioref.jpg',
    titulo: 'Mobiliario a tu medida',
    subtitulo: 'Oficina, industrial, retail y hogar con acabados de calidad',
    cta: { label: 'Ver mobiliaria', href: '/mobiliaria' },
  },
  {
    img: '/assets/img/Index/Construcción/construccion.jpg',
    titulo: 'Construcción y obra civil',
    subtitulo: 'Remodelaciones, instalaciones y construcción industrial',
    cta: { label: 'Ver construcción', href: '/construccion' },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].img}
            alt={slides[current].titulo}
            fill
            className="object-cover"
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>
      </AnimatePresence>

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl"
            >
              <h1 className="mb-4 text-4xl leading-tight font-extrabold text-white md:text-6xl">
                {slides[current].titulo}
              </h1>
              <p className="mb-8 text-lg text-white/80">{slides[current].subtitulo}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slides[current].cta.href}
                  className="bg-primary hover:bg-primary-dark rounded-full px-8 py-3 font-semibold text-white transition-colors"
                >
                  {slides[current].cta.label}
                </Link>
                <Link
                  href="/#contacto"
                  className="rounded-full border border-white/60 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Cotiza ahora
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-primary w-8' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
