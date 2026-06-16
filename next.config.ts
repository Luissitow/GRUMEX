import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /*
   * Export 100% estático → genera la carpeta `out/` con solo HTML/CSS/JS,
   * apta para hosting estático (Hostinger, S3, GitHub Pages…).
   *
   * Para volver al despliegue con servidor (AWS ECS/Docker) cambiar a
   * `output: 'standalone'` y restaurar la API route `app/api/leads`.
   */
  output: 'export',
  // En estático no hay servidor que optimice imágenes: se sirven tal cual.
  images: {
    unoptimized: true,
  },
  // Genera /ruta/index.html para que los hosts estáticos resuelvan bien las URLs.
  trailingSlash: true,
}

export default nextConfig
