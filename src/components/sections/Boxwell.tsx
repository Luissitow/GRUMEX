import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '527229666219'

/**
 * Sección "Distribuidor Autorizado Boxwell". Mantiene el lenguaje visual del
 * sitio (fondo negro, escala 10px, botón `.formulario__submit-contacto`):
 * imagen a la izquierda y panel de texto a la derecha.
 */
export default function Boxwell() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    '¡Hola GRUMEX! Me interesa conocer las soluciones de almacenamiento Boxwell.'
  )}`

  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid w-[min(95%,140rem)] items-stretch gap-0 md:grid-cols-2">
        {/* Imagen */}
        <div className="relative h-[32rem] w-full overflow-hidden md:h-auto md:min-h-[48rem]">
          <Image
            src="/assets/img/empresas/U-Storage/bodegasustorage.webp"
            alt="Soluciones de almacenamiento Boxwell"
            fill
            className="object-cover"
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col items-center justify-center px-[2rem] py-[6rem] text-center md:px-[5rem]">
          <p className="m-0 text-[1.5rem] tracking-[6px] text-white/70 uppercase lg:text-[1.8rem]">
            Distribuidor Autorizado
          </p>
          <h2 className="m-0 mt-[1rem] text-[5rem] font-extrabold tracking-[0.4rem] uppercase md:text-[7rem]">
            Boxwell
          </h2>
          <div className="my-[2.5rem] h-[0.2rem] w-[8rem] bg-white" />
          <p className="m-0 max-w-[55rem] text-[1.8rem] leading-relaxed text-white/90 md:text-[2rem]">
            En GRUMEX somos distribuidor autorizado de Boxwell en México: sistemas de almacenamiento
            portátil y self-storage modular de instalación rápida, alta resistencia y máxima
            durabilidad para tu negocio o proyecto.
          </p>
          <Link
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[3rem] inline-block border border-white bg-black px-[6rem] py-[1.5rem] text-[1.8rem] font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Cotiza ahora
          </Link>
        </div>
      </div>
    </section>
  )
}
