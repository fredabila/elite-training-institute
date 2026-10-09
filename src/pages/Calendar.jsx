import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, ChevronLeft, ChevronRight, Clock, LayoutGrid, List, MapPin, X } from 'lucide-react'
import { dayKey, fetchPublicEvents, formatEventTime, formatLongDate } from '../calendarFeed'
import './Calendar.css'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Noon UTC keeps every cell on the same calendar date in US timezones
const cellDate = (y, m, d) => new Date(Date.UTC(y, m, d, 12))

function buildMonth(year, month) {
  const first = cellDate(year, month, 1)
  const startOffset = first.getUTCDay()
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
  const cells = []
  for (let i = 0; i < startOffset; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(cellDate(year, month, d))
  while (cells.length % 7) cells.push(null)
  return cells
}

function Calendar() {
  const today = new Date()
  const [cursor, setCursor] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const [view, setView] = useState(() => (window.matchMedia?.('(max-width: 700px)').matches ? 'list' : 'month'))
  const [events, setEvents] = useState([])
  const [status, setStatus] = useState('loading')
  const [hiddenTypes, setHiddenTypes] = useState(new Set())
  const [selected, setSelected] = useState(null)

  // Month view loads the visible month; list view loads the next 6 months
  useEffect(() => {
    let cancelled = false
    const from = view === 'month' ? new Date(cursor.year, cursor.month, 1) : new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const to = view === 'month' ? new Date(cursor.year, cursor.month + 1, 1) : new Date(from.getTime() + 183 * 24 * 60 * 60 * 1000)
    setStatus('loading')
    fetchPublicEvents(from, to)
      .then((list) => {
        if (cancelled) return
        setEvents(list.slice().sort((a, b) => Date.parse(a.start) - Date.parse(b.start)))
        setStatus('ready')
      })
      .catch(() => !cancelled && setStatus('error'))
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursor.year, cursor.month, view])

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [selected])

  const types = useMemo(() => {
    const map = new Map()
    events.forEach((e) => map.set(e.type, { label: e.typeLabel, colour: e.colour }))
    return [...map.entries()]
  }, [events])

  const visible = events.filter((e) => !hiddenTypes.has(e.type))

  const byDay = useMemo(() => {
    const map = new Map()
    visible.forEach((e) => {
      const k = dayKey(e.start)
      if (!map.has(k)) map.set(k, [])
      map.get(k).push(e)
    })
    return map
  }, [visible])

  const toggleType = (type) =>
    setHiddenTypes((cur) => {
      const next = new Set(cur)
      next.has(type) ? next.delete(type) : next.add(type)
      return next
    })

  const shiftMonth = (delta) =>
    setCursor(({ year, month }) => {
      const d = new Date(year, month + delta, 1)
      return { year: d.getFullYear(), month: d.getMonth() }
    })

  const monthLabel = new Date(cursor.year, cursor.month, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const todayKey = dayKey(today)
  const cells = buildMonth(cursor.year, cursor.month)
  const listDays = [...byDay.entries()]

  const empty = status === 'ready' && visible.length === 0

  return (
    <main className="calendar-page">
      <section className="cal-hero">
        <div className="cal-container">
          <nav className="cal-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Calendar</span>
          </nav>
          <h1>School Calendar</h1>
          <p>Class dates, school events, holidays and more from MyElite.</p>
        </div>
      </section>

      <section className="cal-body">
        <div className="cal-container">
          <div className="cal-toolbar">
            {view === 'month' ? (
              <div className="cal-nav">
                <button type="button" onClick={() => shiftMonth(-1)} aria-label="Previous month">
                  <ChevronLeft size={20} />
                </button>
                <h2 aria-live="polite">{monthLabel}</h2>
                <button type="button" onClick={() => shiftMonth(1)} aria-label="Next month">
                  <ChevronRight size={20} />
                </button>
                <button type="button" className="cal-today" onClick={() => setCursor({ year: today.getFullYear(), month: today.getMonth() })}>
                  Today
                </button>
              </div>
            ) : (
              <h2 className="cal-list-title">Upcoming Events</h2>
            )}

            <div className="cal-views" role="group" aria-label="Calendar view">
              <button type="button" className={view === 'month' ? 'is-active' : ''} aria-pressed={view === 'month'} onClick={() => setView('month')}>
                <LayoutGrid size={16} aria-hidden="true" /> Month
              </button>
              <button type="button" className={view === 'list' ? 'is-active' : ''} aria-pressed={view === 'list'} onClick={() => setView('list')}>
                <List size={16} aria-hidden="true" /> List
              </button>
            </div>
          </div>

          {types.length > 1 && (
            <div className="cal-filters" aria-label="Filter by event type">
              {types.map(([type, t]) => (
                <button
                  key={type}
                  type="button"
                  className={`cal-chip${hiddenTypes.has(type) ? ' is-off' : ''}`}
                  aria-pressed={!hiddenTypes.has(type)}
                  onClick={() => toggleType(type)}
                  style={{ '--chip': t.colour }}
                >
                  <span className="cal-dot" aria-hidden="true" />
                  {t.label}
                </button>
              ))}
            </div>
          )}

          {status === 'error' && (
            <div className="cal-state">
              <CalendarDays size={40} aria-hidden="true" />
              <h3>The calendar is temporarily unavailable</h3>
              <p>
                Please try again shortly, or <Link to="/contact">contact us</Link> for upcoming class dates.
              </p>
            </div>
          )}

          {status !== 'error' && view === 'month' && (
            <div className={`cal-grid${status === 'loading' ? ' is-loading' : ''}`}>
              {WEEKDAYS.map((d) => (
                <div key={d} className="cal-weekday">{d}</div>
              ))}
              {cells.map((date, i) => {
                if (!date) return <div key={`pad-${i}`} className="cal-cell is-pad" />
                const k = dayKey(date)
                const dayEvents = byDay.get(k) || []
                return (
                  <div key={k} className={`cal-cell${k === todayKey ? ' is-today' : ''}`}>
                    <span className="cal-daynum">{date.getUTCDate()}</span>
                    {dayEvents.slice(0, 3).map((e) => (
                      <button key={e.id} type="button" className="cal-event" style={{ '--ev': e.colour }} onClick={() => setSelected(e)}>
                        {!e.allDay && <span className="cal-event-time">{formatEventTime(e).split(' –')[0]}</span>}
                        <span className="cal-event-title">{e.title}</span>
                      </button>
                    ))}
                    {dayEvents.length > 3 && (
                      <button type="button" className="cal-more" onClick={() => setView('list')}>
                        +{dayEvents.length - 3} more
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {status !== 'error' && view === 'list' && !empty && (
            <div className={`cal-list${status === 'loading' ? ' is-loading' : ''}`}>
              {listDays.map(([k, dayEvents]) => (
                <section key={k} className="cal-day">
                  <h3>{formatLongDate(dayEvents[0].start)}</h3>
                  {dayEvents.map((e) => (
                    <button key={e.id} type="button" className="cal-row" style={{ '--ev': e.colour }} onClick={() => setSelected(e)}>
                      <span className="cal-row-time">{formatEventTime(e)}</span>
                      <span className="cal-row-main">
                        <span className="cal-row-type">{e.typeLabel}</span>
                        <span className="cal-row-title">{e.title}</span>
                        {e.location && (
                          <span className="cal-row-loc">
                            <MapPin size={13} aria-hidden="true" /> {e.location}
                          </span>
                        )}
                      </span>
                    </button>
                  ))}
                </section>
              ))}
            </div>
          )}

          {empty && (
            <div className="cal-state">
              <CalendarDays size={40} aria-hidden="true" />
              <h3>{view === 'month' ? `No public events in ${monthLabel}` : 'No upcoming events yet'}</h3>
              <p>
                New class dates and school events are added regularly. Check back soon, browse our{' '}
                <Link to="/courses">courses</Link>, or <Link to="/contact">contact admissions</Link> for the next start date.
              </p>
            </div>
          )}
        </div>
      </section>

      {selected && (
        <div className="cal-modal" role="dialog" aria-modal="true" aria-labelledby="cal-modal-title" onMouseDown={() => setSelected(null)}>
          <div className="cal-modal-card" style={{ '--ev': selected.colour }} onMouseDown={(e) => e.stopPropagation()}>
            <button type="button" className="cal-modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <X size={20} />
            </button>
            <span className="cal-row-type">{selected.typeLabel}</span>
            <h2 id="cal-modal-title">{selected.title}</h2>
            <p className="cal-modal-meta">
              <CalendarDays size={16} aria-hidden="true" /> {formatLongDate(selected.start)}
            </p>
            <p className="cal-modal-meta">
              <Clock size={16} aria-hidden="true" /> {formatEventTime(selected)} <span className="cal-tz">ET</span>
            </p>
            {selected.location && (
              <p className="cal-modal-meta">
                <MapPin size={16} aria-hidden="true" /> {selected.location}
              </p>
            )}
            {selected.description && <p className="cal-modal-desc">{selected.description}</p>}
            <Link to="/contact" className="cal-modal-cta" onClick={() => setSelected(null)}>
              Ask about this event
            </Link>
          </div>
        </div>
      )}
    </main>
  )
}

export default Calendar
