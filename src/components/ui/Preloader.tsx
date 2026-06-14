'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Preloader idéntico al legacy (preloader.css):
 * fondo negro (#000), logo de 150px (máx 50% del ancho) parpadeando
 * (animación fadeOut), se oculta tras 1800ms.
 */
export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/GRUMEX/preloaderlogo.svg"
            alt="Logo GRUMEX"
            className="animate-fade-out h-auto w-[150px] max-w-[50%]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
