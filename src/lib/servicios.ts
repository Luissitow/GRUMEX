/**
 * Datos de los 6 servicios principales de GRUMEX.
 *
 * Extraído de las páginas legacy (pages/*.html). Cada servicio alimenta la
 * ruta dinámica `app/[servicio]/page.tsx` y se renderiza con los mismos
 * componentes reutilizables (PanelCollage, ServiceIntro, ServiceIconGrid…),
 * de modo que la vista queda idéntica al sitio original.
 */

export interface PanelCollage {
  titulo: string
  href: string
  fondo: string
  icono: string
}

export interface Servicio {
  slug: string
  nombre: string
  metaTitle: string
  metaDescription: string
  /** Título grande de la sección de introducción (negro) */
  introTitulo: string
  /** Párrafo descriptivo bajo el título */
  introTexto: string
  /** Subtítulo de la franja gris "Descubre nuestras soluciones…" */
  subtitulo: string
  /** Paneles del collage superior (header__services del original) */
  paneles: PanelCollage[]
  /** Íconos del grid de servicios (servicios__contenido del original) */
  iconos: string[]
}

/** Caja de la sección `.clasificacion` / `.clasificacion_doble` del legacy */
export interface ClasificacionBox {
  titulo: string
  texto: string
}

/** Caja de imagen con leyenda de la sección `.seccion_img` del legacy */
export interface SeccionImgBox {
  img: string
  titulo: string
}

/**
 * Subcategoría de un servicio (páginas de detalle del legacy con
 * carrusel-header + informacion + clasificacion + seccion_img).
 */
export interface Subcategoria {
  slug: string
  nombre: string
  metaTitle: string
  metaDescription: string
  /** Título de la sección de introducción */
  introTitulo: string
  /** Párrafo descriptivo */
  introTexto: string
  /** Imágenes del carrusel superior */
  carrusel: string[]
  /** Cajas de clasificación (texto sobre fondo blanco) */
  clasificacion: ClasificacionBox[]
  /** Cajas de imagen con leyenda al hover */
  seccionImg: SeccionImgBox[]
}

export const servicios: Servicio[] = [
  {
    slug: 'manufactura',
    nombre: 'Manufactura',
    metaTitle: 'Manufactura en Toluca | GRUMEX - Corte Láser, Pintura Electroestática y CNC',
    metaDescription:
      'GRUMEX ofrece manufactura de alta precisión con tecnología avanzada. Expertos en corte láser, pintura electroestática, mecanizado CNC, carpintería y herrería. ¡Solicita información!',
    introTitulo: 'Soluciones en manufactura de Alta Precisión',
    introTexto:
      'Nuestra visión integral y enfoque innovador nos capacitan para brindar soluciones completas y de alta calidad, lo que nos ha permitido crecer y sobresalir en el mercado. Nos especializamos en la producción y comercialización de estanterías móviles, mobiliario para retail, servicios de corte láser, doblado, maquinado CNC y pintura electrostática.',
    subtitulo: 'Descubre nuestras soluciones en manufactura',
    paneles: [
      {
        titulo: 'Corte Láser',
        href: '/manufactura/corte-laser',
        fondo: '/assets/img/Index/manufactura/cortelaser/cortelaser.jpg',
        icono: '/assets/img/Index/manufactura/cortelaser/cortelaser.svg',
      },
      {
        titulo: 'Soldadura',
        href: '/manufactura/soldadura',
        fondo: '/assets/img/Index/manufactura/Herreria/herreria.png',
        icono: '/assets/img/Index/manufactura/soldadura/Soldadura.svg',
      },
      {
        titulo: 'Pintura Electroestática',
        href: '/manufactura/pintura-electrostatica',
        fondo: '/assets/img/Index/manufactura/pinturaelectroestatica/pinturaelectroestatica.png',
        icono: '/assets/img/Index/manufactura/pinturaelectroestatica/PinturaElectroestatica.svg',
      },
      {
        titulo: 'Madera CNC',
        href: '/manufactura',
        fondo: '/assets/img/Index/manufactura/Carpinteria/cncs (1).png',
        icono: '/assets/img/Index/manufactura/Carpinteria/cnc_madera.svg',
      },
      {
        titulo: 'Doblez CNC',
        href: '/manufactura/doblez',
        fondo: '/assets/img/Index/manufactura/doblez/+3.JPG',
        icono: '/assets/img/Index/manufactura/doblez/Doblez.svg',
      },
    ],
    iconos: [
      '/assets/img/Index/manufactura/Carpinteria/carpinteriaicono.svg',
      '/assets/img/Index/manufactura/Mecanizado CNC/mecanizadocnc.svg',
      '/assets/img/Index/Mobiliaria/Mobiliaria.svg',
      '/assets/img/Index/manufactura/Servicios/SOLDADURA.svg',
      '/assets/img/Index/manufactura/Servicios/BARANDALES.svg',
      '/assets/img/Index/manufactura/Servicios/DOBLEZDEMETAL.svg',
      '/assets/img/Index/manufactura/Servicios/PORTONESLECTRICOS.svg',
      '/assets/img/Index/manufactura/Servicios/PUERTASDEHIERRO.svg',
      '/assets/img/Index/manufactura/Servicios/REJASDECORATIVAS.svg',
      '/assets/img/Index/manufactura/pinturaelectroestatica/PinturaElectroestatica.svg',
      '/assets/img/Index/manufactura/cortelaser/cortelaser.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario para negocios/BODEGAS.svg',
      '/assets/img/Index/Construcción/Servicios/NAVESINDUSTRIALES.svg',
      '/assets/img/Index/manufactura/Carpinteria/puertas de madera.svg',
      '/assets/img/Index/Marmol/marmol.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario de oficina/MUCHOMAS.svg',
    ],
  },
  {
    slug: 'mobiliaria',
    nombre: 'Mobiliaria',
    metaTitle:
      'Mobiliario en Toluca | GRUMEX - Mobiliario personalizado para retail, oficinas y hoteles',
    metaDescription:
      'GRUMEX diseña y fabrica mobiliario personalizado para oficina, industrial, retail y hogar. Calidad, innovación y acabados a la medida. ¡Solicita tu cotización!',
    introTitulo: 'Mobiliario a la medida de tu espacio',
    introTexto:
      'En Grupo Comercial Mexicano ofrecemos soluciones completas en mobiliario de oficina, industrial, para negocios y hogar. Nos enfocamos en la innovación y la calidad para desarrollar proyectos eficientes y duraderos, garantizando resultados a la medida para cada cliente.',
    subtitulo: 'Descubre nuestras soluciones en mobiliario',
    paneles: [
      {
        titulo: 'Mobiliario de oficina',
        href: '/mobiliaria',
        fondo: '/assets/img/Index/Mobiliaria/Mobiliario de oficina/oficina.png',
        icono: '/assets/img/Index/Mobiliaria/Mobiliario de oficina/oficinaicono.svg',
      },
      {
        titulo: 'Mobiliario industrial',
        href: '/mobiliaria',
        fondo: '/assets/img/Index/Mobiliaria/Mobiliario industrial/estanterías.jpg',
        icono: '/assets/img/Index/Mobiliaria/Mobiliario industrial/Mobiliarioindustrial.svg',
      },
      {
        titulo: 'Muebles de hogar',
        href: '/mobiliaria',
        fondo: '/assets/img/Index/Mobiliaria/Muebles de hogar/sala.png',
        icono: '/assets/img/Index/Mobiliaria/Muebles de hogar/muebleshogaricono.svg',
      },
      {
        titulo: 'Mobiliario para negocios',
        href: '/mobiliaria',
        fondo: '/assets/img/Index/Mobiliaria/Mobiliario para negocios/negocio.png',
        icono: '/assets/img/Index/Mobiliaria/Mobiliario para negocios/icononegocios.svg',
      },
      {
        titulo: 'Mobiliario personalizado',
        href: '/mobiliaria',
        fondo: '/assets/img/Index/Mobiliaria/Mobiliario personalizado/mobiliariopersonalizado.jpg',
        icono: '/assets/img/Index/Mobiliaria/Mobiliario personalizado/mueblespersonalizado.svg',
      },
    ],
    iconos: [
      '/assets/img/Index/Mobiliaria/Mobiliario para negocios/BODEGAS.svg',
      '/assets/img/Index/Mobiliaria/Muebles de hogar/COMEDORES.svg',
      '/assets/img/Index/Mobiliaria/Muebles de hogar/COCINAS.svg',
      '/assets/img/Index/Mobiliaria/Muebles de hogar/BAÑOS.svg',
      '/assets/img/Index/Mobiliaria/Muebles de hogar/RECAMRAS.svg',
      '/assets/img/Index/Mobiliaria/Muebles de hogar/ESCRITORIOS.svg',
      '/assets/img/Index/Mobiliaria/Muebles de hogar/BANCOS.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario de oficina/LIBREROS.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario de oficina/MESAS.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario para negocios/RECEPCIONES.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario para negocios/BARRASBAR.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario personalizado/ARMARIOS.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario personalizado/PUERTAS.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario para negocios/PISOSDEMADERA.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario personalizado/ESCALERA.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario de oficina/MUCHOMAS.svg',
    ],
  },
  {
    slug: 'construccion',
    nombre: 'Construcción',
    metaTitle: 'Construcción en Toluca GRUMEX | Obra Civil, Remodelaciones y Acabados',
    metaDescription:
      'GRUMEX ofrece soluciones completas en construcción, obra civil, remodelaciones e instalaciones especializadas. Proyectos eficientes y sostenibles con resultados duraderos.',
    introTitulo: 'Construcción, obra civil, remodelaciones y acabados',
    introTexto:
      'En GRUMEX ofrecemos soluciones completas en construcción, obra civil, remodelaciones e instalaciones especializadas. Nos enfocamos en la innovación y la calidad para desarrollar proyectos eficientes y sostenibles, garantizando resultados duraderos para cada cliente.',
    subtitulo: 'Descubre nuestras soluciones en construcción',
    paneles: [
      {
        titulo: 'Obra civil',
        href: '/construccion',
        fondo: '/assets/img/Index/Construcción/Obra civil/obracivil.jpg',
        icono: '/assets/img/Index/Construcción/Obra civil/OBRA CIVIL.svg',
      },
      {
        titulo: 'Construcción industrial',
        href: '/construccion',
        fondo: '/assets/img/Index/Construcción/Construccion Industrial/construccionindustrial.jpg',
        icono: '/assets/img/Index/Construcción/Construccion Industrial/construccionindustrial.svg',
      },
      {
        titulo: 'Remodelaciones y ampliaciones',
        href: '/construccion',
        fondo:
          '/assets/img/Index/Construcción/Remodelaciones y ampliaciones/remodelacionyampliacion.png',
        icono:
          '/assets/img/Index/Construcción/Remodelaciones y ampliaciones/remodelacionyampliacion.svg',
      },
      {
        titulo: 'Instalaciones especializadas',
        href: '/construccion',
        fondo: '/assets/img/Index/Construcción/Instalaciones Especiales/instalacionespecial.jpg',
        icono:
          '/assets/img/Index/Construcción/Instalaciones Especiales/instalacionesespeciales.svg',
      },
      {
        titulo: 'Acabados y decoración',
        href: '/construccion',
        fondo: '/assets/img/Index/Construcción/Acabados y decoracion/acabados.webp',
        icono: '/assets/img/Index/Construcción/Acabados y decoracion/acabadosydecoracion.svg',
      },
    ],
    iconos: [
      '/assets/img/Index/Construcción/Servicios/CONSTRUCCIONEDIFICIOS.svg',
      '/assets/img/Index/Construcción/Servicios/CONSTRUCCIONCASAS.svg',
      '/assets/img/Index/Construcción/Servicios/DOCUMENTACION.svg',
      '/assets/img/Index/Construcción/Servicios/ALBERCAS.svg',
      '/assets/img/Index/Construcción/Servicios/INSTALACIONESSANITARIAS.svg',
      '/assets/img/Index/Construcción/Servicios/INSTALACIONESELECTRICAS.svg',
      '/assets/img/Index/Construcción/Servicios/MUROS.svg',
      '/assets/img/Index/Construcción/Servicios/INFRAESTRUCTURAVIAL.svg',
      '/assets/img/Index/Construcción/Servicios/IMPERMEABILIZACION.svg',
      '/assets/img/Index/Construcción/Servicios/NAVESINDUSTRIALES.svg',
      '/assets/img/Index/Construcción/Servicios/PINTURAYACABADOS.svg',
      '/assets/img/Index/Construcción/Servicios/SUELOS.svg',
      '/assets/img/Index/Construcción/Servicios/MOBILIARIA.svg',
      '/assets/img/Index/Construcción/Servicios/PISOSDEMADERA.svg',
      '/assets/img/Index/Construcción/Servicios/DEMOLICIONES.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario de oficina/MUCHOMAS.svg',
    ],
  },
  {
    slug: 'marmol',
    nombre: 'Mármol',
    metaTitle: 'Mármol en Toluca | GRUMEX - Cubiertas, Revestimientos y Mobiliario',
    metaDescription:
      'GRUMEX ofrece cubiertas para cocinas y baños, pisos y revestimientos en mármol, además de mobiliario exclusivo con acabados de alta calidad. Durabilidad, elegancia y precisión.',
    introTitulo: 'Cubiertas, revestimientos y mobiliario en mármol',
    introTexto:
      'En GRUMEX ofrecemos una amplia gama de soluciones en mármol para la construcción y el diseño de interiores. Contamos con cubiertas para cocinas y baños, pisos y revestimientos en mármol, además de mobiliario exclusivo con acabados de alta calidad. Nuestro compromiso es brindar durabilidad, elegancia y precisión en cada pieza.',
    subtitulo: 'Descubre nuestras soluciones en mármol',
    paneles: [
      {
        titulo: 'Cubiertas de cocinas y baños',
        href: '/marmol',
        fondo: '/assets/img/Index/Marmol/Cubiertas de cocinas y baños/cocinamarmol.jpg',
        icono: '/assets/img/Index/Marmol/Cubiertas de cocinas y baños/cubiertasycocinas.svg',
      },
      {
        titulo: 'Revestimientos de muros y pisos',
        href: '/marmol',
        fondo: '/assets/img/Index/Marmol/Revestimiento de muros y pisos/paredenmarmol.jpg',
        icono:
          '/assets/img/Index/Marmol/Revestimiento de muros y pisos/revestimientodemurosypisos.svg',
      },
      {
        titulo: 'Corte y personalización',
        href: '/marmol',
        fondo: '/assets/img/Index/Marmol/Cortes y personalizacion/marmolcorte.png',
        icono: '/assets/img/Index/Marmol/Cortes y personalizacion/corteypersonalizacion.svg',
      },
      {
        titulo: 'Distribución y venta',
        href: '/marmol',
        fondo: '/assets/img/Index/Marmol/Distribución y venta/marmolalmacen.webp',
        icono: '/assets/img/Index/Marmol/Distribución y venta/Distribucionyventa.svg',
      },
      {
        titulo: 'Mobiliario en mármol',
        href: '/marmol',
        fondo: '/assets/img/Index/Marmol/Mobiliario en marmol/mobiliariodemarmol.webp',
        icono: '/assets/img/Index/Marmol/marmol.svg',
      },
    ],
    iconos: [
      '/assets/img/Index/Construcción/Servicios/CONSTRUCCIONEDIFICIOS.svg',
      '/assets/img/Index/Construcción/Servicios/CONSTRUCCIONCASAS.svg',
      '/assets/img/Index/Construcción/Servicios/DOCUMENTACION.svg',
      '/assets/img/Index/Construcción/Servicios/ALBERCAS.svg',
      '/assets/img/Index/Construcción/Servicios/INSTALACIONESSANITARIAS.svg',
      '/assets/img/Index/Construcción/Servicios/INSTALACIONESELECTRICAS.svg',
      '/assets/img/Index/Construcción/Servicios/MUROS.svg',
      '/assets/img/Index/Construcción/Servicios/INFRAESTRUCTURAVIAL.svg',
      '/assets/img/Index/Construcción/Servicios/IMPERMEABILIZACION.svg',
      '/assets/img/Index/Construcción/Servicios/NAVESINDUSTRIALES.svg',
      '/assets/img/Index/Construcción/Servicios/PINTURAYACABADOS.svg',
      '/assets/img/Index/Construcción/Servicios/SUELOS.svg',
      '/assets/img/Index/Construcción/Servicios/MOBILIARIA.svg',
      '/assets/img/Index/Construcción/Servicios/PISOSDEMADERA.svg',
      '/assets/img/Index/Construcción/Servicios/DEMOLICIONES.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario de oficina/MUCHOMAS.svg',
    ],
  },
  {
    slug: 'importacion',
    nombre: 'Importación',
    metaTitle: 'GRUMEX | Importación Industrial y Logística a Medida en México',
    metaDescription:
      'GRUMEX se especializa en la importación, instalación y logística de soluciones industriales a medida: gestión aduanal, maquinaria especializada, materia prima y más.',
    introTitulo: 'Importación, instalación y logística',
    introTexto:
      'Nos especializamos en la importación, instalación y logística de soluciones industriales a la medida, ofreciendo un servicio integral para nuestros clientes: gestión aduanal, fletes marítimos y aéreos, maquinaria especializada y materia prima.',
    subtitulo: 'Descubre nuestras soluciones en importación',
    paneles: [
      {
        titulo: 'Aduanas',
        href: '/importacion',
        fondo: '/assets/img/Index/Importación/img/aduanas.png',
        icono: '/assets/img/Index/Importación/servicios/gestionaduanal.svg',
      },
      {
        titulo: 'Logística',
        href: '/importacion',
        fondo: '/assets/img/Index/Importación/img/logistica.png',
        icono: '/assets/img/Index/Importación/servicios/logistica.svg',
      },
      {
        titulo: 'Productos',
        href: '/importacion',
        fondo: '/assets/img/Index/Importación/img/contenedores.png',
        icono: '/assets/img/Index/Importación/servicios/importaciondeproductos.svg',
      },
      {
        titulo: 'Maquinaria',
        href: '/importacion',
        fondo: '/assets/img/Index/Importación/img/cnc.jpg',
        icono: '/assets/img/Index/Importación/servicios/maquinariaespecializada.svg',
      },
      {
        titulo: 'Materia prima',
        href: '/importacion',
        fondo: '/assets/img/Index/Importación/img/materiaprima.jpg',
        icono: '/assets/img/Index/Importación/servicios/materiaprima.svg',
      },
    ],
    iconos: [
      '/assets/img/Index/Importación/servicios/gestionaduanal.svg',
      '/assets/img/Index/Importación/servicios/logistica.svg',
      '/assets/img/Index/Importación/servicios/importaciondeproductos.svg',
      '/assets/img/Index/Importación/servicios/maquinariaespecializada.svg',
      '/assets/img/Index/Importación/servicios/materiaprima.svg',
      '/assets/img/Index/Importación/servicios/fletemeritimo.svg',
      '/assets/img/Index/Importación/servicios/fleteaereo.svg',
      '/assets/img/Index/Importación/servicios/tramites.svg',
      '/assets/img/Index/Importación/servicios/monitoreoyseguimiento.svg',
      '/assets/img/Index/Importación/servicios/importacioncnc.svg',
      '/assets/img/Index/Importación/servicios/importaciondemarmol.svg',
      '/assets/img/Index/Importación/servicios/MUCHOMAS.svg',
    ],
  },
  {
    slug: 'logistica',
    nombre: 'Logística y Maniobras',
    metaTitle: 'GRUMEX | Logística y Maniobras Especializadas en México',
    metaDescription:
      'GRUMEX: especialistas en logística, maniobras industriales, renta de montacargas y transporte de maquinaria pesada en Toluca y toda la República Mexicana.',
    introTitulo: 'Logística, maniobras y renta de montacargas',
    introTexto:
      'En GRUMEX somos especialistas en logística, maniobras industriales, renta de montacargas y transporte de maquinaria pesada en Toluca y toda la República Mexicana. Nuestro equipo certificado y flota moderna garantizan traslados seguros, maniobras de precisión y entregas puntuales para empresas de cualquier sector.',
    subtitulo: 'Descubre nuestras soluciones en logística y maniobras',
    paneles: [
      {
        titulo: 'Grúa de plataforma',
        href: '/logistica',
        fondo: '/assets/img/Index/Logisticaymaniobras/grua.jpg',
        icono: '/assets/img/Index/Logisticaymaniobras/iconogruaplataforma.svg',
      },
      {
        titulo: 'Montacargas',
        href: '/logistica',
        fondo: '/assets/img/Index/Logisticaymaniobras/montacargas.jpg',
        icono: '/assets/img/Index/Logisticaymaniobras/iconomontacargas.svg',
      },
      {
        titulo: 'Tráiler y camiones',
        href: '/logistica',
        fondo: '/assets/img/Index/Logisticaymaniobras/VolkswagenDeliveryGrumex.webp',
        icono: '/assets/img/Index/Logisticaymaniobras/iconotrailerycamiones.svg',
      },
    ],
    iconos: [
      '/assets/img/Index/Logisticaymaniobras/iconogruaplataforma.svg',
      '/assets/img/Index/Logisticaymaniobras/iconomontacargas.svg',
      '/assets/img/Index/Logisticaymaniobras/iconotrailerycamiones.svg',
      '/assets/img/Index/Mobiliaria/Mobiliario de oficina/MUCHOMAS.svg',
    ],
  },
]

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug)
}

export function getServicioSlugs(): string[] {
  return servicios.map((s) => s.slug)
}

/**
 * Subcategorías por servicio. Solo manufactura tiene páginas de detalle con
 * contenido real en el legacy (las de construcción/mobiliaria estaban vacías).
 */
const CL = '/assets/img/Index/manufactura/cortelaser/casosdeexito'
const SO = '/assets/img/Index/manufactura/soldadura'
const DO = '/assets/img/Index/manufactura/doblez'
const PI = '/assets/img/Index/manufactura/pinturaelectroestatica'

export const subcategorias: Record<string, Subcategoria[]> = {
  manufactura: [
    {
      slug: 'corte-laser',
      nombre: 'Corte Láser',
      metaTitle: 'Corte Láser en Toluca | GRUMEX - Corte de precisión en metal',
      metaDescription:
        'Servicio de corte láser de alta precisión en acero inoxidable, aluminio y acero al carbono. Cortes limpios para piezas complejas. Más de 10 años de experiencia.',
      introTitulo: 'Corte Láser',
      introTexto:
        'En GRUMEX ofrecemos servicios de corte láser con tecnología de vanguardia, garantizando cortes precisos y limpios en una amplia variedad de metales, como acero inoxidable, aluminio y acero al carbono. Este proceso permite crear piezas complejas con máxima exactitud, optimizando tiempos de producción y reduciendo desperdicios. Con más de 10 años de experiencia, aseguramos resultados de alta calidad para tus proyectos de manufactura.',
      carrusel: [
        `${CL}/grabadolaser.jpeg`,
        `${CL}/cortelaserenmadera.jpeg`,
        `${CL}/cortelaserenperfiles1.png`,
        `${CL}/cortelaser1.avif`,
        `${CL}/punzonado.png`,
      ],
      clasificacion: [],
      seccionImg: [
        { img: `${CL}/cortelaserenperfiles1.png`, titulo: 'Corte de perfiles' },
        { img: `${CL}/cortelaserentubo.png`, titulo: 'Corte de tubo redondo' },
        { img: `${CL}/cortelaserenmadera.jpeg`, titulo: 'Corte en madera' },
        { img: `${CL}/grabadolaser.jpeg`, titulo: 'Grabado láser' },
      ],
    },
    {
      slug: 'soldadura',
      nombre: 'Soldadura',
      metaTitle: 'Soldadura en Toluca | GRUMEX - MIG, TIG, láser y brazo soldador',
      metaDescription:
        'Servicios de soldadura MIG, TIG, láser y brazo soldador robotizado para proyectos de alto volumen. Uniones fuertes y de calidad en todo tipo de materiales.',
      introTitulo: 'Soldadura',
      introTexto:
        'Contamos con servicios de soldadura MIG, TIG y láser, además de nuestro brazo soldador para proyectos de alto volumen. Nuestro equipo altamente capacitado y nuestra tecnología garantizan uniones fuertes y de calidad en todo tipo de proyectos.',
      carrusel: [
        `${SO}/soldadura2.jpg`,
        `${SO}/caso1.jpg`,
        `${SO}/caso2.jpg`,
        `${SO}/caso3.jpg`,
        `${SO}/caso4.jpg`,
      ],
      clasificacion: [
        {
          titulo: 'Soldadura TIG / MIG',
          texto:
            'Capacidad para producción de alta y baja demanda en diferentes materiales y medidas.',
        },
        {
          titulo: 'Soldadura Láser',
          texto:
            'Para proyectos con más detalle y limpieza en cada una de las uniones, reduciendo el riesgo de deformación y daño en el material.',
        },
        {
          titulo: 'Brazo Soldador',
          texto:
            'Robot soldador para producción en serie con el que garantizamos alta precisión y calidad en cada cordón y en diferentes tipos de materiales.',
        },
      ],
      seccionImg: [
        { img: `${SO}/caso1.jpg`, titulo: 'Soldadura MIG para carga pesada' },
        { img: `${SO}/caso2.jpg`, titulo: 'Soldadura TIG para la industria farmacéutica' },
        { img: `${SO}/caso3.jpg`, titulo: 'Soldadura MIG para mobiliario' },
        { img: `${SO}/caso4.jpg`, titulo: 'Soldadura TIG para charolas' },
      ],
    },
    {
      slug: 'doblez',
      nombre: 'Doblez',
      metaTitle: 'Doblez de metal en Toluca | GRUMEX - Doblez plano, tubo y rolado',
      metaDescription:
        'Servicios de doblez plano, doblez de tubo y rolado de tubo con plegadoras de alta tecnología. Precisión y atención al detalle para proyectos exigentes.',
      introTitulo: 'Doblez',
      introTexto:
        'Descubre la excelencia en nuestros servicios de doblez plano, doblez de tubo y rolado de tubo, así como el uso de plegadoras de alta tecnología. Nuestra precisión y atención al detalle garantizan resultados de calidad para tus proyectos más exigentes.',
      carrusel: [
        `${DO}/doblez.png`,
        `${DO}/doblez4.jpg`,
        `${DO}/doblez2.jpg`,
        `${DO}/doblez3.jpg`,
        `${DO}/doblez4.webp`,
      ],
      clasificacion: [
        {
          titulo: 'Doblez Plano y Tubo',
          texto:
            'Servicio de doblez para chapa desplegada de hasta 4 m de largo. Contamos con diferentes herramientas para lograr gran cantidad de especificaciones.',
        },
        {
          titulo: 'Rolado de Tubo',
          texto:
            'Contamos con servicio de rolado a todo tipo de perfiles, ángulos y tubos, con una capacidad máxima de 2 1/2”, así como un radio máximo de curvatura de 320 mm.',
        },
      ],
      seccionImg: [
        { img: `${DO}/doblez1.jpg`, titulo: 'Doblez de entrepaños' },
        { img: `${DO}/doblez2.jpg`, titulo: 'Doblez con radio específico para la industria ferroviaria' },
        { img: `${DO}/doblez3.jpg`, titulo: 'Doblez de piezas para industria eléctrica' },
        { img: `${DO}/doblez4.jpg`, titulo: 'Pieza en 3/16” con radio de 1/2” para la industria ferroviaria' },
      ],
    },
    {
      slug: 'pintura-electrostatica',
      nombre: 'Pintura Electrostática',
      metaTitle: 'Pintura Electrostática en Toluca | GRUMEX - Acabado de alta calidad',
      metaDescription:
        'Aplicación de pintura electrostática de alta calidad con proceso de lavado de 4 etapas y hornos batch y de cadena continua. Acabado duradero para piezas metálicas.',
      introTitulo: 'Pintura Electrostática',
      introTexto:
        'Transformamos tus piezas metálicas con nuestros servicios de aplicación de pintura electrostática de alta calidad, utilizando 4 pasos de lavado para nuestros hornos batch y de cadena continua.',
      carrusel: [
        `${PI}/caso1.jpg`,
        `${PI}/caso4.jpeg`,
        `${PI}/caso5.jpeg`,
        `${PI}/caso7.jpg`,
        `${PI}/caso3.png`,
      ],
      clasificacion: [
        {
          titulo: 'Horno Batch 3x3',
          texto: 'Horno enfocado a prototipos y/o especificaciones especiales.',
        },
      ],
      seccionImg: [
        { img: `${PI}/caso1.jpg`, titulo: 'Piezas pintadas entrando al proceso de curado' },
        { img: `${PI}/caso2.webp`, titulo: 'Proceso de lavado de 4 etapas mediante aspersión' },
        { img: `${PI}/caso3.png`, titulo: 'Clean Room para aplicación y recuperación de pintura' },
        { img: `${PI}/caso4.jpeg`, titulo: 'Aplicación de pintura electrostática' },
      ],
    },
  ],
}

export function getSubcategorias(servicioSlug: string): Subcategoria[] {
  return subcategorias[servicioSlug] ?? []
}

export function getSubcategoria(
  servicioSlug: string,
  subSlug: string
): Subcategoria | undefined {
  return getSubcategorias(servicioSlug).find((s) => s.slug === subSlug)
}

/** Params para generateStaticParams de la ruta [servicio]/[subcategoria] */
export function getSubcategoriaParams(): { servicio: string; subcategoria: string }[] {
  return Object.entries(subcategorias).flatMap(([servicio, subs]) =>
    subs.map((s) => ({ servicio, subcategoria: s.slug }))
  )
}
