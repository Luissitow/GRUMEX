import Image from 'next/image'

/**
 * Collage de casos de éxito visible solo en móvil (<960px), igual que
 * `.collage` del original: grid de 2 columnas donde la 1ª y la 5ª imagen
 * ocupan doble alto.
 */
const imagenes = [
  { src: '/assets/img/empresas/U-Storage/bodegasustorage.webp', alt: 'Bodegas U-Storage' },
  { src: '/assets/img/empresas/Walmart/walmartestanterias.png', alt: 'Estanterías Walmart' },
  { src: '/assets/img/empresas/HotelHyatt/hyatt.webp', alt: 'Hotel Hyatt' },
  { src: '/assets/img/empresas/CFE/cajeroscfe.jpeg', alt: 'Cajeros CFE' },
  { src: '/assets/img/empresas/GUARDABOX/GUARDABOXCAJAS.jpeg', alt: 'Guardabox' },
  { src: '/assets/img/empresas/HotelMundoPalacio/palacioroom.jpg', alt: 'Palacio Mundo Imperial' },
]

export default function MobileCollage() {
  return (
    <section className="bg-black px-4 py-12 md:hidden">
      <div className="mx-auto grid grid-cols-2 gap-4">
        {imagenes.map((img, i) => (
          <div
            key={img.src}
            className={[
              'group relative h-[22rem] overflow-hidden',
              i === 0 ? 'row-span-2 h-[46rem]' : '',
              i === 4 ? 'col-start-2 row-span-2 h-[46rem]' : '',
            ].join(' ')}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-[800ms] group-hover:scale-110"
              sizes="50vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
