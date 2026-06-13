import Hero from '@/components/sections/Hero'
import Servicios from '@/components/sections/Servicios'
import Contador from '@/components/sections/Contador'
import ClientsSlider from '@/components/sections/ClientsSlider'
import CasosExito from '@/components/sections/CasosExito'
import Contacto from '@/components/sections/Contacto'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicios />
      <Contador />
      <ClientsSlider />
      <CasosExito />
      <Contacto />
    </>
  )
}
