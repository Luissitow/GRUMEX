'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Contador de cifras con círculos, replica `.contador` / `.contador__circle`
 * del index legacy. Cada círculo anima el conteo al entrar en viewport.
 */
const stats = [
  { prefijo: '+', valor: 200, sufijo: '', label: 'Empresas líderes\nconfían en nosotros' },
  { prefijo: '', valor: 100, sufijo: '%', label: 'De satisfacción de\nnuestros clientes' },
  { prefijo: '+', valor: 400, sufijo: '', label: 'Piezas manufacturadas\ncada mes' },
  {
    prefijo: '+',
    valor: 30,
    sufijo: '',
    label: 'Alianzas estratégicas con\nproveedores internacionales',
  },
  { prefijo: '+', valor: 20, sufijo: '', label: 'Años de experiencia\nen la industria' },
  {
    prefijo: '+',
    valor: 85,
    sufijo: '',
    label: 'Ciudades impactadas en\nla república mexicana',
  },
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

function StatItem({ prefijo, valor, sufijo, label }: (typeof stats)[number]) {
  const ref = useRef<HTMLLIElement>(null)
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
    <li ref={ref} className="flex w-full flex-col items-center gap-4 font-bold">
      <div className="group relative flex h-32 w-32 items-center justify-center rounded-full border-[1.5rem] border-[rgba(240,240,240,0.82)] bg-[rgba(200,200,200,0.9)] transition-all duration-1000 hover:bg-black hover:text-white md:h-36 md:w-36 lg:h-44 lg:w-44">
        <p className="text-2xl md:text-3xl lg:text-4xl">
          {prefijo}
          {count}
          {sufijo}
        </p>
        <div className="absolute h-full w-full rounded-full border-[1.5rem] border-[rgba(220,220,220,0.7)]" />
      </div>
      <p className="text-dark text-center text-lg whitespace-pre-line md:text-2xl">{label}</p>
    </li>
  )
}

export default function Contador() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex w-[min(95%,140rem)] flex-col gap-20 py-20 text-center md:pt-40">
        <h2 className="text-dark m-0 text-2xl font-bold uppercase md:text-3xl">
          Nuestro equipo / GRUMEX en otros datos
        </h2>
        <ul className="grid grid-cols-2 gap-12 md:grid-cols-3">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </ul>
      </div>
    </section>
  )
}
