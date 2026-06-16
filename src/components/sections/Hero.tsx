import PanelCollage from './PanelCollage'
import type { PanelCollage as Panel } from '@/lib/servicios'

const paneles: Panel[] = [
  {
    titulo: 'Mobiliaria',
    href: '/mobiliaria',
    fondo: '/assets/img/Index/Mobiliaria/Mobiliaria.png',
    icono: '/assets/img/Index/Mobiliaria/Mobiliaria.svg',
  },
  {
    titulo: 'Construcción',
    href: '/construccion',
    fondo: '/assets/img/Index/Construcción/construccion.jpg',
    icono: '/assets/img/Index/Construcción/Construccionicon.svg',
  },
  {
    titulo: 'Manufactura',
    href: '/manufactura',
    fondo: '/assets/img/Index/manufactura/Manufactura.jpeg',
    icono: '/assets/img/Index/manufactura/manufacturaicon.svg',
  },
  {
    titulo: 'Importación',
    href: '/importacion',
    fondo: '/assets/img/Index/Importación/img/importacion.png',
    icono: '/assets/img/Index/Importación/servicios/iconoimportacion.svg',
  },
  {
    titulo: 'Mármol',
    href: '/marmol',
    fondo: '/assets/img/Index/Marmol/cocina marmol.jpg',
    icono: '/assets/img/Index/Marmol/marmol.svg',
  },
  {
    titulo: 'Logística y Maniobras',
    href: '/logistica',
    fondo: '/assets/img/Index/Importación/img/logistica.png',
    icono: '/assets/img/Index/Logisticaymaniobras/iconologisticaymaniobras.svg',
  },
]

export default function Hero() {
  return <PanelCollage paneles={paneles} conMargenSuperior />
}
