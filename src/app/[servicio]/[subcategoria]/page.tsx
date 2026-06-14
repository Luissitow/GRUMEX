import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SubHeaderCarrusel from '@/components/sections/SubHeaderCarrusel'
import SubServiciosNav from '@/components/sections/SubServiciosNav'
import ServiceIntro from '@/components/sections/ServiceIntro'
import ClasificacionBoxes from '@/components/sections/ClasificacionBoxes'
import SeccionImg from '@/components/sections/SeccionImg'
import Contacto from '@/components/sections/Contacto'
import { getSubcategoria, getSubcategoriaParams } from '@/lib/servicios'

interface PageProps {
  params: Promise<{ servicio: string; subcategoria: string }>
}

// Genera estáticamente las subcategorías con contenido (las 4 de manufactura).
export function generateStaticParams() {
  return getSubcategoriaParams()
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { servicio, subcategoria } = await params
  const data = getSubcategoria(servicio, subcategoria)

  if (!data) return {}

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/${servicio}/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/${servicio}/${data.slug}`,
      type: 'website',
      locale: 'es_MX',
    },
  }
}

export default async function SubcategoriaPage({ params }: PageProps) {
  const { servicio, subcategoria } = await params
  const data = getSubcategoria(servicio, subcategoria)

  if (!data) notFound()

  return (
    <>
      <SubHeaderCarrusel imagenes={data.carrusel} />
      <SubServiciosNav servicio={servicio} actual={data.slug} />
      <ServiceIntro titulo={data.introTitulo} texto={data.introTexto} conLogo={false} />
      <ClasificacionBoxes boxes={data.clasificacion} />
      <SeccionImg boxes={data.seccionImg} />
      <Contacto />
    </>
  )
}
