import Image from 'next/image'
import type { SeccionImgBox } from '@/lib/servicios'

/**
 * Sección `.seccion_img` del legacy: fondo negro, grid de 2 columnas de
 * imágenes (35rem). Al hover la imagen hace zoom y aparece una leyenda
 * deslizándose desde la izquierda con borde blanco.
 */
export default function SeccionImg({ boxes }: { boxes: SeccionImgBox[] }) {
  if (boxes.length === 0) return null

  return (
    <section className="bg-black py-[8rem]">
      <div className="mx-auto grid w-[min(95%,140rem)] grid-cols-2 gap-[3rem]">
        {boxes.map((box) => (
          <div
            key={box.titulo}
            className="group relative h-[35rem] w-full overflow-hidden shadow-[0_2px_20px_2px_rgba(0,0,0,0.3)] md:m-[1rem]"
          >
            <Image
              src={box.img}
              alt={box.titulo}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.3] group-hover:translate-x-[10%] group-hover:translate-y-[10%]"
              sizes="(max-width: 960px) 50vw, 45vw"
            />
            {/* overlay gradiente al hover */}
            <div className="absolute inset-0 z-[2] opacity-0 transition-opacity duration-300 [background:linear-gradient(35deg,rgba(0,0,0,0.8)_25%,rgba(0,0,46,0))] group-hover:opacity-100" />
            {/* leyenda */}
            <div className="absolute right-[5%] bottom-[5%] left-[5%] z-[3] -translate-x-[105%] border-l-4 border-white px-[12px] py-[10px] text-white opacity-0 transition-all duration-[400ms] group-hover:translate-x-0 group-hover:opacity-100">
              <h3 className="m-0 text-[10px] font-bold tracking-[3px] uppercase md:text-[20px] lg:text-[23px]">
                {box.titulo}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
