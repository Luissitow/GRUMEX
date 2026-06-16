import Link from 'next/link'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '527229666219'

interface ServiceIntroProps {
  titulo: string
  texto: string
  /** Muestra el logo y usa el título `.bold_header` (home y servicios). */
  conLogo?: boolean
}

/**
 * Sección de introducción, réplica de `.informacion` del legacy:
 * fondo negro, logo (35rem/48rem), título y párrafo `.texto_header` con botón
 * `.formulario__submit-contacto` hacia WhatsApp.
 * En subcategorías (`conLogo=false`) se omite el logo y el título usa el
 * tamaño grande `.titulos` (h1 global), igual que las páginas de detalle.
 */
export default function ServiceIntro({ titulo, texto, conLogo = true }: ServiceIntroProps) {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '¡Hola! Estoy interesado en sus servicios. ¿Me pueden dar más información?'
  )}`

  return (
    <section className="bg-black">
      <div className="mx-auto w-[min(95%,140rem)] px-[1.5rem] pt-[4rem] pb-[6rem] text-center text-white lg:pt-[2rem]">
        {conLogo && (
          <>
            {/* spacersch */}
            <div className="h-[2rem] w-full" />
            {/* Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/GRUMEX/GRUMEX.svg"
              alt="GRUMEX"
              className="mx-auto w-full md:w-[35rem] lg:w-[48rem]"
            />
            {/* spacersch */}
            <div className="h-[2rem] w-full" />
          </>
        )}

        <div className="mb-[3rem]">
          <h1
            className={
              conLogo
                ? 'm-0 text-[2.2rem] font-extrabold tracking-[0.2rem] uppercase md:text-[2.4rem]'
                : 'm-0 text-[3rem] font-extrabold tracking-[0.2rem] uppercase md:text-[4.5rem] lg:text-[4.8rem]'
            }
          >
            {titulo}
          </h1>
          <p className="m-0 mt-[1.5rem] text-[1.9rem] md:mx-[5rem] md:text-[2.1rem]">{texto}</p>
        </div>

        <Link
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[1rem] inline-block border border-white bg-black px-[6rem] py-[1.5rem] text-[1.8rem] font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Cotiza ahora
        </Link>
      </div>
    </section>
  )
}
