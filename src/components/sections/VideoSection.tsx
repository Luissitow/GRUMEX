/**
 * Sección de video institucional, réplica de `.video` del legacy:
 * fondo rgb(14,15,15), video centrado con padding 6rem (90% de ancho en ≥960px).
 */
export default function VideoSection() {
  return (
    <section className="bg-[rgb(14,15,15)]">
      <div className="mx-auto flex w-[min(95%,140rem)] justify-center">
        <video controls autoPlay muted loop playsInline className="w-full py-[6rem] md:w-[90%]">
          <source src="/assets/img/GRUMEX/videogrumex.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
