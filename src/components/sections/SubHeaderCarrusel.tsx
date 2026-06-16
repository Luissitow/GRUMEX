'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * Carrusel del header de subcategoría, réplica de `.carrusel-header` /
 * `.hslider` del legacy: imágenes a pantalla completa (40/45/61rem) que se
 * cruzan por opacidad, con flechas ‹ › blancas abajo a la derecha.
 */
export default function SubHeaderCarrusel({ imagenes }: { imagenes: string[] }) {
  const [actual, setActual] = useState(0)
  const total = imagenes.length
  const prev = () => setActual((i) => (i - 1 + total) % total)
  const next = () => setActual((i) => (i + 1) % total)

  return (
    <section className="mt-[7rem] bg-black pt-[9rem] md:mt-[8rem]">
      <div className="relative h-[40rem] md:h-[45rem] lg:h-[61rem]">
        {imagenes.map((img, i) => (
          <div
            key={img}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${
              i === actual ? 'z-10 opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* flechas */}
        <div className="absolute right-[5%] bottom-[5%] z-[100] flex gap-[1rem]">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="h-[40px] w-[40px] rounded-[5px] bg-white font-mono text-2xl text-black transition-all duration-500 hover:cursor-pointer hover:bg-black hover:text-white"
          >
            {'<'}
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="h-[40px] w-[40px] rounded-[5px] bg-white font-mono text-2xl text-black transition-all duration-500 hover:cursor-pointer hover:bg-black hover:text-white"
          >
            {'>'}
          </button>
        </div>
      </div>
    </section>
  )
}
