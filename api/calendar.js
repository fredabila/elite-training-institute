/* global process */
// Vercel serverless function: proxies the public MyElite (Moodle SIS) events feed
// so the website never depends on CORS and responses are cached at the edge.
//
// GET /api/calendar?from=<unix>&to=<unix>

const FEED_URL = process.env.MYELITE_EVENTS_URL || 'https://myelite.site/local/myelite/publicevents.php'
const MAX_WINDOW = 366 * 24 * 60 * 60

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const now = Math.floor(Date.now() / 1000)
  const from = Number.parseInt(req.query.from, 10) || now
  let to = Number.parseInt(req.query.to, 10) || from + 120 * 24 * 60 * 60
  if (to <= from) to = from + 24 * 60 * 60
  if (to - from > MAX_WINDOW) to = from + MAX_WINDOW

  try {
    const upstream = await fetch(`${FEED_URL}?from=${from}&to=${to}`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(8000),
    })
    if (!upstream.ok) throw new Error(`Upstream responded ${upstream.status}`)
    const data = await upstream.json()
    const events = Array.isArray(data?.events) ? data.events : []

    // Edge-cache for 5 minutes, serve stale for up to an hour while revalidating
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600')
    res.status(200).json({ generated: data?.generated ?? new Date().toISOString(), events })
  } catch (err) {
    console.error('calendar proxy error', err)
    res.setHeader('Cache-Control', 'no-store')
    res.status(502).json({ error: 'Calendar is temporarily unavailable', events: [] })
  }
}
