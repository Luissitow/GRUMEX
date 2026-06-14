import Hero from '@/components/sections/Hero'
import ServiceIntro from '@/components/sections/ServiceIntro'
import VideoSection from '@/components/sections/VideoSection'
import ClientsSlider from '@/components/sections/ClientsSlider'
import CasosExito from '@/components/sections/CasosExito'
import Contador from '@/components/sections/Contador'
import Contacto from '@/components/sections/Contacto'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceIntro
        titulo="Innovación en manufactura, construcción y mobiliario"
        texto="Nuestra visión integral y enfoque innovador nos capacitan para brindar soluciones completas y de alta calidad, lo que nos ha permitido crecer y sobresalir en el mercado. Nos especializamos en la producción y comercialización de estanterías móviles, mobiliario para retail, servicios de corte láser, doblado, maquinado CNC y pintura electrostática."
      />
      <VideoSection />
      <ClientsSlider />
      <CasosExito />
      <Contador />
      <Contacto />
    </>
  )
}
