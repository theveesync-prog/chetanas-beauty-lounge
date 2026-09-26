import { getPayload } from 'payload'
import { pushDevSchema } from '@payloadcms/drizzle'
import config from '@/payload.config.ts'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const password = searchParams.get('password')
  const secret = searchParams.get('secret')

  if (!email || !password || !secret) {
    return Response.json(
      { error: 'Missing email, password, or secret query params' },
      { status: 400 }
    )
  }

  if (secret !== process.env.PAYLOAD_SECRET) {
    return Response.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    const payload = await getPayload({ config })

    // payload.db's dev-only schema push is gated on NODE_ENV in the
    // library's connect.js, which always resolves to 'production' on
    // Vercel. Call it directly to create tables on first run against
    // a brand-new, empty database.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await pushDevSchema(payload.db as any)

    const existing = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existing.totalDocs > 0) {
      return Response.json(
        { error: 'An admin user already exists. This route only works once.' },
        { status: 409 }
      )
    }

    const user = await payload.create({
      collection: 'users',
      data: { email, password },
    })

    return Response.json({ success: true, email: user.email })
  } catch (error) {
    return Response.json(
      { error: 'Setup failed', details: String(error) },
      { status: 500 }
    )
  }
}
