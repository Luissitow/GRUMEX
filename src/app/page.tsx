import Hero from '@/components/sections/Hero'
import ServiceIntro from '@/components/sections/ServiceIntro'
import VideoSection from '@/components/sections/VideoSection'
import ParallaxBand from '@/components/sections/ParallaxBand'
import Boxwell from '@/components/sections/Boxwell'
import ClientsSlider from '@/components/sections/ClientsSlider'
import CasosExito from '@/components/sections/CasosExito'
import Contador from '@/components/sections/Contador'
import Sucursales from '@/components/sections/Sucursales'
import Contacto from '@/components/sections/Contacto'
import Reveal from '@/components/ui/Reveal'

export default function HomePage() {
  return (
    <>
      <Hero />

      <Reveal>
        <ServiceIntro
          titulo="Innovación en manufactura, construcción y mobiliario"
          texto="Nuestra visión integral y enfoque innovador nos capacitan para brindar soluciones completas y de alta calidad, lo que nos ha permitido crecer y sobresalir en el mercado. Nos especializamos en la producción y comercialización de estanterías móviles, mobiliario para retail, servicios de corte láser, doblado, maquinado CNC y pintura electrostática."
        />
      </Reveal>

      <VideoSection />

      <ParallaxBand
        imagen="/assets/img/Index/Construcción/construccion.jpg"
        eyebrow="Más de 20 años de experiencia"
        titulo="Soluciones industriales que construyen tu proyecto"
        texto="Manufactura, construcción, mobiliario, mármol, importación y logística bajo un mismo grupo."
      />

      <Boxwell />

      <Reveal>
        <ClientsSlider />
      </Reveal>

      <CasosExito />

      <Reveal>
        <Contador />
      </Reveal>

      <Reveal>
        <Sucursales />
      </Reveal>

      <Reveal>
        <Contacto />
      </Reveal>
    </>
  )
}
