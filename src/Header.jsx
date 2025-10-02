import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('HOME')

  const navItems = ['HOME', 'COURSES', 'ABOUT US', 'BLOG', 'STUDENT PORTAL', 'CONTACT US']

  return (
    <header className="eti-header">
      <div className="eti-header__inner">
        {/* Left: Logo */}
        <a href="/" className="eti-logo" aria-label="Elite Training Institute">
          <img src="/elite-logo-white.png" alt="Elite Training Institute" className="eti-logo__image" />
        </a>

        {/* Center: Contact card */}
        <div className="eti-contact">
          <a className="eti-contact__item" href="tel:18482801169" aria-label="Call 848-280-1169">
            <span className="eti-icon eti-icon--phone" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.81 16.43 14.92C17.55 15.27 18.75 15.46 20 15.46C20.55 15.46 21 15.91 21 16.46V20C21 20.55 20.55 21 20 21C11.72 21 5 14.28 5 6C5 5.45 5.45 5 6 5H9.54C10.09 5 10.54 5.45 10.54 6C10.54 7.25 10.73 8.45 11.08 9.57C11.19 9.92 11.1 10.31 10.82 10.59L8.62 12.79L6.62 10.79Z" fill="#ff3131"/>
              </svg>
            </span>
            <span className="eti-contact__text eti-contact__text--phone">848.280.1169</span>
          </a>
          <a className="eti-contact__item" href="mailto:info@trainatelite.com" aria-label="Email info@trainatelite.com">
            <span className="eti-icon eti-icon--email" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#ff3131"/>
              </svg>
            </span>
            <span className="eti-contact__text eti-contact__text--email">info@trainatelite.com</span>
          </a>
        </div>

        {/* Right: Navigation */}
        <nav className="eti-nav" aria-label="Primary">
          <button
            className={`eti-hamburger ${menuOpen ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`eti-nav__list ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item} className="eti-nav__item">
                <NavLink
                  to={
                    item === 'HOME' ? '/' :
                    item === 'COURSES' ? '/courses' :
                    item === 'ABOUT US' ? '/about' :
                    item === 'BLOG' ? '/blog' :
                    item === 'STUDENT PORTAL' ? 'https://trainatelite.talentlms.com/' :
                    item === 'CONTACT US' ? '/contact' :
                    '/'
                  }
                  className={({ isActive }) => `eti-nav__link ${isActive ? 'is-active' : ''} ${item === 'CONTACT US' ? 'contact-us-red' : ''}`}
                  onClick={() => setMenuOpen(false)}
                  {...(item === 'STUDENT PORTAL' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header


