import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  nombre: z.string().min(2),
  empresa: z.string().optional(),
  email: z.string().email(),
  telefono: z.string().optional(),
  servicio: z.string().min(1),
  mensaje: z.string().min(10),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Por ahora solo validamos y logueamos
    // Cuando Supabase esté configurado, aquí va prisma.lead.create()
    console.log('[Lead recibido]', data)

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 })
    }
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
