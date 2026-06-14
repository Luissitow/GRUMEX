import Link from 'next/link'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '527229666219'

interface ServiceIntroProps {
  titulo: string
  texto: string
}

/**
 * Sección de introducción negra con logo, título, párrafo y CTA a WhatsApp.
 * Replica `.informacion` / `.informacion__contenedor` del sitio original.
 */
export default function ServiceIntro({ titulo, texto }: ServiceIntroProps) {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '¡Hola! Estoy interesado en sus servicios. ¿Me pueden dar más información?'
  )}`

  return (
    <section className="bg-black">
      <div className="mx-auto w-[min(95%,140rem)] px-2 py-16 text-center text-white lg:py-12">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/img/GRUMEX/GRUMEX.svg"
          alt="GRUMEX"
          className="mx-auto mb-8 w-full max-w-[35rem] lg:max-w-[48rem]"
        />

        <div className="mb-12">
          <h1 className="mb-4 text-2xl font-bold md:text-[2.4rem]">{titulo}</h1>
          <p className="mx-auto max-w-5xl text-lg leading-relaxed text-white/90 md:text-[2.1rem] md:leading-snug">
            {texto}
          </p>
        </div>

        <Link
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white bg-black px-12 py-4 text-lg font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Cotiza ahora
        </Link>
      </div>
    </section>
  )
}
