/**
 * Sección de video institucional, replica `.video` del index legacy:
 * fondo oscuro con el video centrado.
 */
export default function VideoSection() {
  return (
    <section className="bg-[rgb(14,15,15)]">
      <div className="mx-auto flex w-[min(95%,140rem)] justify-center py-24">
        <video controls autoPlay muted loop playsInline className="w-full md:w-[90%]">
          <source src="/assets/img/GRUMEX/videogrumex.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
