import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PanelCollage from '@/components/sections/PanelCollage'
import ServiceIntro from '@/components/sections/ServiceIntro'
import ServiceIconGrid from '@/components/sections/ServiceIconGrid'
import MobileCollage from '@/components/sections/MobileCollage'
import CasosExito from '@/components/sections/CasosExito'
import Contacto from '@/components/sections/Contacto'
import { getServicio, getServicioSlugs } from '@/lib/servicios'

interface PageProps {
  params: Promise<{ servicio: string }>
}

// Genera estáticamente las 6 rutas de servicio en build time.
export function generateStaticParams() {
  return getServicioSlugs().map((servicio) => ({ servicio }))
}

// Solo se permiten los slugs definidos; cualquier otro devuelve 404.
export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { servicio } = await params
  const data = getServicio(servicio)

  if (!data) return {}

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/${data.slug}`,
      type: 'website',
      locale: 'es_MX',
    },
  }
}

export default async function ServicioPage({ params }: PageProps) {
  const { servicio } = await params
  const data = getServicio(servicio)

  if (!data) notFound()

  return (
    <>
      <PanelCollage paneles={data.paneles} conMargenSuperior />
      <ServiceIntro titulo={data.introTitulo} texto={data.introTexto} />
      <ServiceIconGrid subtitulo={data.subtitulo} iconos={data.iconos} />
      <MobileCollage />
      <CasosExito />
      <Contacto />
    </>
  )
}
