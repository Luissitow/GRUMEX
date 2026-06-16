'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Retraso en segundos para escalonar elementos */
  delay?: number
  /** Dirección desde la que entra el contenido */
  from?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const offset = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
}

/**
 * Envoltura que revela su contenido al entrar en el viewport (fade + desplazamiento).
 * Respeta `prefers-reduced-motion`. Funciona en el export estático (cliente).
 */
export default function Reveal({ children, delay = 0, from = 'up', className }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
