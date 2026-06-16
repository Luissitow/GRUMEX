interface ServiceIconGridProps {
  subtitulo: string
  iconos: string[]
}

/**
 * Réplica de `.informacion__contenedor2` + `.servicios__contenido` del legacy:
 * franja gris oscuro (rgb 29,29,29) con subtítulo y grid de íconos
 * (2/3/4 columnas). Cada ítem mide 11/12/14rem y se invierte a blanco al hover.
 */
export default function ServiceIconGrid({ subtitulo, iconos }: ServiceIconGridProps) {
  return (
    <>
      {/* informacion__contenedor2 */}
      <div className="mx-auto -mt-[10px] bg-[rgb(29,29,29)] px-[1.5rem] pt-[6rem] text-center text-white">
        <h2 className="text-[3rem] font-bold uppercase md:text-[4.5rem] lg:text-[4.8rem]">
          {subtitulo}
        </h2>
      </div>

      {/* servicios__contenido */}
      <div className="grid grid-cols-2 gap-[3rem] bg-[rgb(29,29,29)] px-[5rem] pt-[9rem] pb-[10rem] md:grid-cols-3 lg:grid-cols-4 lg:gap-[2rem]">
        {iconos.map((icono, i) => (
          <div
            key={`${icono}-${i}`}
            className="group flex h-[11rem] w-auto items-center justify-center transition-all duration-[800ms] hover:bg-white md:h-[12rem] md:p-[2rem] lg:h-[14rem]"
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
