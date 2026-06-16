'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

interface ParallaxBandProps {
  imagen: string
  eyebrow?: string
  titulo: string
  texto?: string
}

/**
 * Banda con efecto parallax: la imagen queda fija (pinned con `sticky`)
 * mientras el contenido se desplaza sobre ella conforme haces scroll, y la
 * imagen se mueve a distinta velocidad. Respeta `prefers-reduced-motion`.
 */
export default function ParallaxBand({ imagen, eyebrow, titulo, texto }: ParallaxBandProps) {
  const ref = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Oculta el header global mientras esta banda llena la pantalla.
  useEffect(() => {
    const el = stickyRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle('hide-header', entry.intersectionRatio >= 0.85)
      },
      { threshold: [0, 0.85, 1] }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('hide-header')
    }
  }, [])

  // La imagen se desplaza despacio (parallax); el contenido sube al avanzar.
  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['70px', '-70px'])
  const overlay = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 0.55, 0.75])

  return (
    <section ref={ref} className="relative h-[170vh] md:h-[200vh]">
      {/* Capa pinned a la pantalla durante el scroll */}
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">
        {/* Imagen de fondo con parallax */}
        <motion.div className="absolute inset-0 scale-110" style={reduce ? undefined : { y: imgY }}>
          <Image src={imagen} alt="" fill className="object-cover" sizes="100vw" />
        </motion.div>

        {/* Oscurecido dinámico */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={reduce ? { opacity: 0.6 } : { opacity: overlay }}
        />

        {/* Contenido que sube con el scroll */}
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center px-[2rem] text-center text-white"
          style={reduce ? undefined : { y: contentY }}
        >
          {eyebrow && (
            <p className="m-0 mb-[1.5rem] text-[1.5rem] tracking-[6px] text-white/70 uppercase lg:text-[1.8rem]">
              {eyebrow}
            </p>
          )}
          <h2 className="m-0 max-w-[90rem] text-[3.4rem] font-extrabold tracking-[0.2rem] uppercase md:text-[5.5rem] lg:text-[6.5rem]">
            {titulo}
          </h2>
          {texto && (
            <p className="m-0 mt-[2rem] max-w-[60rem] text-[1.8rem] leading-relaxed text-white/90 md:text-[2.1rem]">
              {texto}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
