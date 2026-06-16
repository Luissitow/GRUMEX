import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Preloader from '@/components/ui/Preloader'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://grupogrumex.com'
const OG_IMAGE = '/assets/img/GRUMEX/GRUMEX.png'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'GRUMEX — Servicios Industriales en Toluca, México',
    template: '%s | GRUMEX',
  },
  description:
    'Grupo Comercial Mexicano de la Industria y la Construcción. Manufactura, mobiliaria, construcción, mármol, importación y logística con más de 20 años de experiencia en Toluca y toda la República Mexicana.',
  applicationName: 'GRUMEX',
  authors: [{ name: 'GRUMEX' }],
  creator: 'GRUMEX',
  publisher: 'GRUMEX',
  keywords: [
    'corte láser',
    'soldadura',
    'pintura electrostática',
    'manufactura',
    'mobiliaria',
    'construcción',
    'mármol',
    'importación',
    'logística y maniobras',
    'Toluca',
    'Metepec',
    'Estado de México',
    'GRUMEX',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/img/GRUMEX/GRUMEXICO.ico' },
      { url: '/assets/img/GRUMEX/GRUMEXICO.png', type: 'image/png', sizes: '32x32' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: 'Grupo Comercial Mexicano de la Industria y la Construcción',
    title: 'GRUMEX — Servicios Industriales en Toluca, México',
    description:
      'Manufactura, mobiliaria, construcción, mármol, importación y logística con más de 20 años de experiencia.',
    images: [{ url: OG_IMAGE, alt: 'GRUMEX' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GRUMEX2024',
    title: 'GRUMEX — Servicios Industriales en México',
    description:
      'Manufactura, mobiliaria, construcción, mármol, importación y logística. Calidad e innovación.',
    images: [OG_IMAGE],
  },
  other: {
    'geo.region': 'MX-MEX',
    'geo.placename': 'Toluca, Estado de México',
    'geo.position': '19.2826;-99.6557',
    ICBM: '19.2826, -99.6557',
  },
}

// Schema.org Organization (JSON-LD) — igual que el legacy
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GRUMEX',
  legalName: 'Grupo Comercial Mexicano de la Industria y la Construcción',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/img/GRUMEX/iconoempresa.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C. Laguna de la Gavia 600, El Seminario Tercera Secc',
    addressLocality: 'Toluca de Lerdo',
    addressRegion: 'MEX',
    postalCode: '50170',
    addressCountry: 'MX',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+52-722-966-6219',
      contactType: 'customer service',
      areaServed: 'MX',
      availableLanguage: ['Spanish', 'English'],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
