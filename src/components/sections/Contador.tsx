'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { valor: 150, sufijo: '+', label: 'Empresas líderes\nconfían en nosotros' },
  { valor: 98, sufijo: '%', label: 'De satisfacción de\nnuestros clientes' },
  { valor: 5000, sufijo: '+', label: 'Piezas manufacturadas\ncada mes' },
  { valor: 20, sufijo: '+', label: 'Alianzas estratégicas\ncon proveedores' },
  { valor: 20, sufijo: '+', label: 'Años de experiencia\nen la industria' },
  { valor: 15, sufijo: '+', label: 'Ciudades impactadas\nen la república' },
]

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [target, active])

  return count
}

function StatItem({ valor, sufijo, label }: (typeof stats)[0]) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const count = useCountUp(valor, visible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <span className="text-primary text-5xl font-extrabold">
        {count}
        {sufijo}
      </span>
      <p className="text-sm whitespace-pre-line text-white/70">{label}</p>
    </div>
  )
}

export default function Contador() {
  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
