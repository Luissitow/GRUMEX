import type { ClasificacionBox } from '@/lib/servicios'

/**
 * Sección `.clasificacion` / `.clasificacion_doble` del legacy:
 * fondo blanco, cajas con título (con borde inferior) y párrafo. El número de
 * columnas en desktop depende de la cantidad de cajas (2 = doble, 3 = triple).
 */
export default function ClasificacionBoxes({ boxes }: { boxes: ClasificacionBox[] }) {
  if (boxes.length === 0) return null

  const cols = boxes.length >= 3 ? 'md:grid-cols-3' : boxes.length === 2 ? 'md:grid-cols-2' : ''

  return (
    <section className="bg-white">
      <div
        className={`mx-auto flex w-[min(95%,140rem)] flex-col py-[2rem] md:grid md:gap-[0.2rem] ${cols}`}
      >
        {boxes.map((box) => (
          <div key={box.titulo} className="flex flex-col text-center">
            <h3 className="m-0 mx-[5rem] border-b-[0.2rem] border-black px-[2rem] pt-[4rem] pb-[2rem] text-[2.5rem] uppercase">
              {box.titulo}
            </h3>
            <p className="m-0 p-[5rem] text-[1.8rem]">{box.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
