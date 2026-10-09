import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Search, X } from 'lucide-react'
import { popularSearches, searchSite } from './searchIndex'
import './SiteSearch.css'

function SiteSearch({ open, onClose }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const results = useMemo(() => searchSite(query), [query])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setActive(0)
    const t = setTimeout(() => inputRef.current?.focus(), 30)
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(t)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => setActive(0), [query])

  if (!open) return null

  const go = (path) => {
    onClose()
    navigate(path)
  }

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[active]) {
      go(results[active].path)
    }
  }

  return createPortal(
    <div className="site-search" role="dialog" aria-modal="true" aria-label="Search the site" onMouseDown={onClose}>
      <div className="site-search__panel" onMouseDown={(e) => e.stopPropagation()}>
        <div className="site-search__field">
          <Search size={22} aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            placeholder="Search courses, programs, policies…"
            aria-label="Search"
            aria-controls="site-search-results"
          />
          <button type="button" className="site-search__close" onClick={onClose} aria-label="Close search">
            <X size={22} />
          </button>
        </div>

        {query.trim() === '' ? (
          <div className="site-search__popular">
            <p>Popular searches</p>
            <div>
              {popularSearches.map((term) => (
                <button key={term} type="button" onClick={() => setQuery(term)}>
                  {term}
                </button>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <p className="site-search__empty">
            No results for “{query}”. Try a course name like “BLS” or “CHHA”, or <button type="button" onClick={() => go('/contact')}>contact us</button>.
          </p>
        ) : (
          <ul className="site-search__results" id="site-search-results" role="listbox">
            {results.map((r, i) => (
              <li key={r.path} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  className={`site-search__result${i === active ? ' is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => go(r.path)}
                >
                  <span className="site-search__section">{r.section}</span>
                  <span className="site-search__title">{r.title}</span>
                  <span className="site-search__desc">{r.description}</span>
                  <ArrowRight size={18} className="site-search__arrow" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>,
    document.body,
  )
}

export default SiteSearch
