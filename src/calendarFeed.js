// Public events from the MyElite (Moodle SIS) calendar, via the /api/calendar proxy.
// Feed contract: { generated, timezone, from, to, count, events: [{ id, type, typeLabel,
// colour, title, description, location, start, end, allDay }] } — times are ISO 8601.

export const SCHOOL_TIMEZONE = 'America/New_York'

const DAY = 24 * 60 * 60

// Sample events so the page can be developed locally (the Vite dev server has no /api).
// Only ever used in development builds.
function devFixture() {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const at = (days, hour, minutes = 0) => {
    const d = new Date(now.getTime() + days * DAY * 1000)
    d.setHours(hour, minutes, 0, 0)
    return d.toISOString()
  }
  return [
    { id: 1, type: 'class', typeLabel: 'Class', colour: '#144129', title: 'BLS Provider Course', description: 'AHA Basic Life Support, same-day certification.', location: 'Union Campus', start: at(3, 9), end: at(3, 13), allDay: false },
    { id: 2, type: 'schoolevent', typeLabel: 'School Event', colour: '#5f5a50', title: 'Open House', description: 'Tour the training center and meet our instructors.', location: 'Union Campus', start: at(8, 17), end: at(8, 19), allDay: false },
    { id: 3, type: 'holiday', typeLabel: 'Holiday', colour: '#1c6fa8', title: 'School Closed', description: '', location: null, start: at(15, 0), end: null, allDay: true },
    { id: 4, type: 'exam', typeLabel: 'Exam', colour: '#c02b2b', title: 'ACLS Skills Testing', description: '', location: 'Skills Lab', start: at(15, 10), end: at(15, 12), allDay: false },
    { id: 5, type: 'graduation', typeLabel: 'Graduation', colour: '#103623', title: 'Graduation Ceremony', description: 'Celebrating our newest healthcare professionals.', location: 'Union Campus', start: at(26, 14), end: at(26, 16), allDay: false },
  ]
}

export async function fetchPublicEvents(fromDate, toDate) {
  const from = Math.floor(fromDate.getTime() / 1000)
  const to = Math.floor(toDate.getTime() / 1000)

  if (import.meta.env.DEV && !new URLSearchParams(window.location.search).has('live')) {
    return devFixture().filter((e) => {
      const t = Date.parse(e.start) / 1000
      return t >= from && t < to
    })
  }

  const res = await fetch(`/api/calendar?from=${from}&to=${to}`)
  if (!res.ok) throw new Error(`Calendar request failed (${res.status})`)
  const data = await res.json()
  return Array.isArray(data.events) ? data.events : []
}

// Does the feed have any upcoming public events? Cached per browser session so the
// header doesn't refetch on every page.
export async function hasUpcomingEvents() {
  const KEY = 'elite-calendar-has-events'
  try {
    const cached = sessionStorage.getItem(KEY)
    if (cached !== null) return cached === '1'
  } catch {
    // storage unavailable; fall through to a fetch
  }
  const now = new Date()
  const events = await fetchPublicEvents(now, new Date(now.getTime() + 180 * DAY * 1000))
  const has = events.length > 0
  try {
    sessionStorage.setItem(KEY, has ? '1' : '0')
  } catch {
    // ignore
  }
  return has
}

// Date helpers, all expressed in the school's timezone
const partsFmt = new Intl.DateTimeFormat('en-US', { timeZone: SCHOOL_TIMEZONE, year: 'numeric', month: '2-digit', day: '2-digit' })

export function dayKey(isoOrDate) {
  const d = typeof isoOrDate === 'string' ? new Date(isoOrDate) : isoOrDate
  const p = Object.fromEntries(partsFmt.formatToParts(d).map((x) => [x.type, x.value]))
  return `${p.year}-${p.month}-${p.day}`
}

export const formatTime = (iso) =>
  new Intl.DateTimeFormat('en-US', { timeZone: SCHOOL_TIMEZONE, hour: 'numeric', minute: '2-digit' }).format(new Date(iso))

export const formatLongDate = (iso) =>
  new Intl.DateTimeFormat('en-US', { timeZone: SCHOOL_TIMEZONE, weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(iso))

export function formatEventTime(e) {
  if (e.allDay) return 'All day'
  return e.end ? `${formatTime(e.start)} – ${formatTime(e.end)}` : formatTime(e.start)
}
