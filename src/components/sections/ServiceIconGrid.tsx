interface ServiceIconGridProps {
  subtitulo: string
  iconos: string[]
}

/**
 * Franja gris con subtítulo + grid de íconos de servicios.
 * Replica `.informacion__contenedor2` y `.servicios__contenido` del original:
 * fondo gris oscuro, grid 2/3/4 columnas, cada ítem se invierte a blanco al
 * pasar el mouse.
 */
export default function ServiceIconGrid({ subtitulo, iconos }: ServiceIconGridProps) {
  return (
    <>
      {/* Subtítulo (informacion__contenedor2) */}
      <div className="bg-[rgb(29,29,29)] px-2 pt-24 text-center text-white">
        <h2 className="text-xl font-bold md:text-3xl">{subtitulo}</h2>
      </div>

      {/* Grid de íconos (servicios__contenido) */}
      <div className="grid grid-cols-2 gap-12 bg-[rgb(29,29,29)] px-5 py-20 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {iconos.map((icono, i) => (
          <div
            key={`${icono}-${i}`}
            className="group flex h-44 items-center justify-center transition-all duration-[800ms] hover:bg-white lg:p-8"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={icono}
              alt=""
              aria-hidden="true"
              className="max-h-full max-w-full object-contain transition-all duration-[800ms] group-hover:invert"
            />
          </div>
        ))}
      </div>
    </>
  )
}
