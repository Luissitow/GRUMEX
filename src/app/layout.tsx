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

export const metadata: Metadata = {
  title: {
    default: 'GRUMEX — Servicios Industriales en México',
    template: '%s | GRUMEX',
  },
  description:
    'Grupo Comercial Mexicano de la Industria y la Construcción. Manufactura, mobiliaria, construcción, mármol e importación con más de 20 años de experiencia.',
  keywords: ['manufactura', 'mobiliaria', 'construcción', 'mármol', 'importación', 'Toluca', 'México'],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://grupogrumex.com',
    siteName: 'GRUMEX',
    title: 'GRUMEX — Servicios Industriales en México',
    description:
      'Manufactura, mobiliaria, construcción, mármol e importación con más de 20 años de experiencia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GRUMEX — Servicios Industriales en México',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://grupogrumex.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
