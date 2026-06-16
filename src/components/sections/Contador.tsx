'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Contador de cifras con círculos, réplica exacta de `.contador` /
 * `.contador__circle` del legacy (13/15/17rem, doble borde gris, hover negro).
 * Cada círculo anima el conteo al entrar en viewport.
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
    <li ref={ref} className="flex w-full flex-col items-center gap-[1rem] font-bold">
      <div className="group relative flex h-[13rem] w-[13rem] flex-col items-center justify-center rounded-full border-[1.5rem] border-[rgba(240,240,240,0.815)] bg-[rgba(200,200,200,0.897)] text-black transition-all duration-1000 hover:bg-black hover:text-white md:h-[15rem] md:w-[15rem] lg:h-[17rem] lg:w-[17rem]">
        <p className="z-10 text-[2rem] md:text-[2.6rem] lg:text-[3.1rem]">
          {prefijo}
          {count}
          {sufijo}
        </p>
        {/* contador__circle_background */}
        <div className="absolute h-full w-full rounded-full border-[1.5rem] border-[rgba(220,220,220,0.699)]" />
      </div>
      <p className="text-center text-[1.8rem] whitespace-pre-line text-black md:text-[2.4rem] lg:text-[2.6rem]">
        {label}
      </p>
    </li>
  )
}

export default function Contador() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex w-[min(95%,140rem)] flex-col gap-[5rem] py-[5rem] text-center md:pt-[10rem]">
        <h2 className="m-0 text-[3rem] font-bold uppercase md:text-[4.5rem] lg:text-[4.8rem]">
          Nuestro equipo / GRUMEX en otros datos
        </h2>
        <ul className="m-0 grid list-none grid-cols-2 gap-y-[4rem] p-0 md:grid-cols-3">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </ul>
      </div>
    </section>
  )
}
