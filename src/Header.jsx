import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  ChevronDown,
  Facebook,
  FileText,
  GraduationCap,
  HeartPulse,
  Instagram,
  Linkedin,
  LogIn,
  Mail,
  MapPin,
  Menu,
  Phone,
  Stethoscope,
  X,
} from 'lucide-react'
import './Header.css'

const PHONE_DISPLAY = '(848) 280-1169'
const PHONE_HREF = 'tel:18482801169'
const EMAIL = 'info@trainatelite.com'
const PORTAL_URL = 'https://trainatelite.talentlms.com/'

const SOCIAL = [
  { label: 'Facebook', icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61577615826915' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/elite-training-institue/about/' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/elite.training.institute/' },
]

const PROGRAM_GROUPS = [
  {
    title: 'AHA Provider Courses',
    icon: HeartPulse,
    links: [
      { label: 'Basic Life Support (BLS)', to: '/bls-course', meta: '4 hrs' },
      { label: 'Advanced Cardiovascular Life Support (ACLS)', to: '/acls-course', meta: '2 days' },
      { label: 'Pediatric Advanced Life Support (PALS)', to: '/pals-course', meta: '2 days' },
      { label: 'HeartSaver First Aid CPR AED', to: '/heartsaver-course', meta: '6 hrs' },
    ],
  },
  {
    title: 'AHA Instructor Courses',
    icon: Award,
    links: [
      { label: 'BLS/CPR Instructor – Initial', to: '/bls-instructor-initial', meta: '2–3 wks' },
      { label: 'BLS/CPR Instructor – Renewal', to: '/bls-instructor-renewal', meta: '1 day' },
    ],
  },
  {
    title: 'Healthcare Career Programs',
    icon: Stethoscope,
    links: [
      { label: 'Certified Home Health Aide (CHHA)', to: '/chha-program', badge: 'Enrolling' },
      { label: 'Medical Assistant (MA)', to: '/ma-program', soon: true },
      { label: 'Certified Medication Aide (CMA)', to: '/cma-program', soon: true },
      { label: 'Certified Nurse Assistant (CNA)', to: '/cna-program', soon: true },
      { label: 'Patient Care Technician (PCT)', to: '/pct-program', soon: true },
      { label: 'Phlebotomy Technician', to: '/phlebotomy-program', soon: true },
      { label: 'EKG Technician', to: '/ekg-program', soon: true },
      { label: 'Pharmacy Technician', to: '/pharmacy-program', soon: true },
    ],
  },
]

const ABOUT_GROUPS = [
  {
    title: 'Our School',
    icon: GraduationCap,
    links: [
      { label: 'About Elite', to: '/about' },
      { label: 'Blog & News', to: '/blog' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Policies & Student Information',
    icon: FileText,
    links: [
      { label: 'Student Rights & Responsibilities', to: '/student-rights-responsibilities' },
      { label: 'Refund & Cancellation Policy', to: '/refund-cancellation-policy' },
      { label: 'Non-Discrimination Statement', to: '/non-discrimination-statement' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Privacy Statement', to: '/privacy-statement' },
      { label: 'Terms & Conditions', to: '/terms-and-conditions' },
    ],
  },
]

const MENUS = {
  programs: {
    label: 'Programs',
    groups: PROGRAM_GROUPS,
    ctas: [
      { label: 'View All Courses', to: '/courses' },
      { label: 'Request Information', to: '/contact' },
      { label: 'Student Portal', href: PORTAL_URL },
    ],
  },
  about: {
    label: 'About',
    groups: ABOUT_GROUPS,
    ctas: [
      { label: 'Why Choose Elite', to: '/about' },
      { label: 'Talk to Admissions', to: '/contact' },
    ],
  },
}

// Blog and Contact have their own top-level links, so they don't light up the About menu
const TOP_LEVEL_PATHS = ['/blog', '/contact']

const menuPaths = (key) =>
  MENUS[key].groups
    .flatMap((g) => g.links.map((l) => l.to))
    .filter((to) => !TOP_LEVEL_PATHS.includes(to))
    .concat(key === 'programs' ? ['/courses'] : [])

function CtaButton({ cta, className, onClick }) {
  if (cta.href) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {cta.label}
        <ArrowRight size={16} aria-hidden="true" />
      </a>
    )
  }
  return (
    <Link to={cta.to} className={className} onClick={onClick}>
      {cta.label}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  )
}

function MenuLink({ link, active, onClick, className }) {
  return (
    <Link to={link.to} className={`${className}${active ? ' is-active' : ''}`} onClick={onClick}>
      <span>{link.label}</span>
      {link.badge && <span className="nav-badge nav-badge--live">{link.badge}</span>}
      {link.soon && <span className="nav-badge">Coming soon</span>}
      {link.meta && <span className="nav-meta">{link.meta}</span>}
    </Link>
  )
}

const Header = () => {
  const { pathname } = useLocation()
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const navRef = useRef(null)

  // Close everything whenever the route changes
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  // Close the mega menu on outside click or Escape
  useEffect(() => {
    if (!openMenu && !mobileOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [openMenu, mobileOpen])

  // Lock page scroll behind the mobile drawer
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const toggleMenu = (key) => setOpenMenu((cur) => (cur === key ? null : key))
  const isSectionActive = (key) => menuPaths(key).includes(pathname)
  const topLinkClass = (path) => `nav-top-link${pathname === path ? ' is-active' : ''}`

  return (
    <header className={`site-header${mobileOpen ? ' is-drawer-open' : ''}`} ref={navRef}>
      {/* Utility bar */}
      <div className="utility-bar">
        <div className="header-container utility-inner">
          <div className="utility-contact">
            <a href={PHONE_HREF}>
              <Phone size={14} aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail size={14} aria-hidden="true" /> {EMAIL}
            </a>
            <span className="utility-address">
              <MapPin size={14} aria-hidden="true" /> Union, NJ
            </span>
          </div>
          <div className="utility-links">
            <Link to="/courses">Course Catalog</Link>
            <Link to="/blog">News</Link>
            <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="utility-portal">
              <LogIn size={14} aria-hidden="true" /> Student Portal
            </a>
            <span className="utility-social">
              {SOCIAL.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon size={14} aria-hidden="true" />
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="main-bar">
        <div className="header-container main-inner">
          <Link to="/" className="brand" aria-label="Elite School of Health Professions – Home">
            <img src="/elite-crest-green.png" alt="" className="brand-crest" />
            <img src="/elite-logo.png" alt="Elite School of Health Professions" className="brand-wordmark" />
          </Link>

          <nav className="desktop-nav" aria-label="Main">
            <Link to="/" className={topLinkClass('/')}>Home</Link>

            {Object.entries(MENUS).map(([key, menu]) => (
              <button
                key={key}
                type="button"
                className={`nav-top-link nav-trigger${openMenu === key ? ' is-open' : ''}${isSectionActive(key) ? ' is-active' : ''}`}
                aria-expanded={openMenu === key}
                aria-controls={`mega-${key}`}
                onClick={() => toggleMenu(key)}
              >
                {menu.label}
                <ChevronDown size={16} className="nav-chevron" aria-hidden="true" />
              </button>
            ))}

            <Link to="/blog" className={topLinkClass('/blog')}>Blog</Link>
            <Link to="/contact" className={topLinkClass('/contact')}>Contact</Link>

            <Link to="/contact" className="nav-cta">Request Info</Link>
          </nav>

          <button
            type="button"
            className="mobile-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mega menu panels */}
        {Object.entries(MENUS).map(([key, menu]) => (
          <div
            key={key}
            id={`mega-${key}`}
            className={`mega-panel${openMenu === key ? ' is-open' : ''}`}
            hidden={openMenu !== key}
          >
            <div className="header-container mega-inner">
              <div className={`mega-columns mega-columns--${menu.groups.length}`}>
                {menu.groups.map((group) => (
                  <div key={group.title} className="mega-group">
                    <h3 className="mega-heading">
                      <group.icon size={18} aria-hidden="true" />
                      {group.title}
                    </h3>
                    <ul className={group.links.length > 5 ? 'mega-list mega-list--split' : 'mega-list'}>
                      {group.links.map((link) => (
                        <li key={link.to + link.label}>
                          <MenuLink link={link} active={pathname === link.to} className="mega-link" />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mega-ctas">
                {menu.ctas.map((cta) => (
                  <CtaButton key={cta.label} cta={cta} className="mega-cta" />
                ))}
                <div className="mega-contact">
                  <span>Questions? Call or text</span>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile call bar */}
      <div className="mobile-call-bar">
        <a href={PHONE_HREF}>
          <Phone size={15} aria-hidden="true" /> Call/Text: {PHONE_DISPLAY}
        </a>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-backdrop${mobileOpen ? ' is-open' : ''}`} onClick={() => setMobileOpen(false)} />
      <aside className={`mobile-drawer${mobileOpen ? ' is-open' : ''}`} aria-hidden={!mobileOpen}>
        <nav className="mobile-nav" aria-label="Mobile">
          <Link to="/" className={`mobile-link${pathname === '/' ? ' is-active' : ''}`}>Home</Link>

          {Object.entries(MENUS).map(([key, menu]) => (
            <div key={key} className="mobile-section">
              <button
                type="button"
                className={`mobile-link mobile-accordion${mobileSection === key ? ' is-open' : ''}`}
                aria-expanded={mobileSection === key}
                onClick={() => setMobileSection((cur) => (cur === key ? null : key))}
              >
                {menu.label}
                <ChevronDown size={20} className="nav-chevron" aria-hidden="true" />
              </button>
              {mobileSection === key && (
                <div className="mobile-sub">
                  {menu.groups.map((group) => (
                    <div key={group.title} className="mobile-group">
                      <p className="mobile-group-title">{group.title}</p>
                      {group.links.map((link) => (
                        <MenuLink
                          key={link.to + link.label}
                          link={link}
                          active={pathname === link.to}
                          className="mobile-sublink"
                        />
                      ))}
                    </div>
                  ))}
                  {key === 'programs' && (
                    <Link to="/courses" className="mobile-sublink mobile-sublink--all">
                      View all courses <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}

          <Link to="/blog" className={`mobile-link${pathname === '/blog' ? ' is-active' : ''}`}>Blog</Link>
          <Link to="/contact" className={`mobile-link${pathname === '/contact' ? ' is-active' : ''}`}>Contact</Link>
          <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="mobile-link">
            Student Portal
          </a>
        </nav>

        <div className="mobile-footer">
          <Link to="/contact" className="mega-cta">
            Request Information <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a href={PHONE_HREF} className="mobile-contact-line">
            <Phone size={16} aria-hidden="true" /> {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="mobile-contact-line">
            <Mail size={16} aria-hidden="true" /> {EMAIL}
          </a>
        </div>
      </aside>
    </header>
  )
}

export default Header
