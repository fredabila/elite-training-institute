import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ClipboardList, GraduationCap, HandHeart, HeartPulse, LogIn } from 'lucide-react'
import ContactModal from './ContactModal'
import { MYELITE_URL } from './siteLinks'
import './Hero.css'

const AUTOPLAY_MS = 6000

// Each slide is laid out like a campus flyer: message panel on the left, photo on the right
const slides = [
  {
    eyebrow: 'Now Enrolling',
    title: 'CHHA Program Approved by the NJ Board of Nursing',
    subtitle: 'State-approved Certified Home Health Aide training you can trust.',
    cta: { label: 'Explore the CHHA Program', to: '/chha-program' },
    image: 'https://www.teachhub.com/wp-content/uploads/2020/09/Sept-9-Benefits-of-Group-Work_web.jpg',
  },
  {
    eyebrow: 'Authorized Training Site',
    title: 'Same-Day AHA Certifications',
    subtitle: 'BLS, ACLS, PALS and HeartSaver — certified in as little as one day.',
    cta: { label: 'View AHA Courses', to: '/courses' },
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1600&auto=format&fit=crop',
    logo: '/aha-authorized.jpg',
  },
  {
    eyebrow: 'Flexible Learning',
    title: 'Online Classes That Fit Your Work and Family Life',
    subtitle: 'Study anywhere, anytime — then practice hands-on with our instructors.',
    cta: { label: 'See Our Programs', to: '/courses' },
    image: 'https://transitionsusa.org/wp-content/uploads/2024/12/shutterstock_2111420681-scaled.jpg',
  },
  {
    eyebrow: 'Hands-On Training',
    title: 'Real Skills for a Rewarding Healthcare Career',
    subtitle: 'Small classes and skills labs that prepare you for day one on the job.',
    cta: { label: 'Request Information', modal: true },
    image: 'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/6/8/9/536689_lab_practicals_webinar_image_credit_gettyimages1372800323_32_181878.jpg',
  },
  {
    eyebrow: 'Career Support',
    title: 'Job Placement Assistance for Every Graduate',
    subtitle: 'We help you start working as soon as you complete your program.',
    cta: { label: 'Talk to Admissions', to: '/contact' },
    image: 'https://wolfcareers.com/wp-content/uploads/2021/12/job-placement-min.jpeg',
  },
]

const quickLinks = [
  { label: 'Programs', icon: GraduationCap, to: '/courses' },
  { label: 'AHA Certification', icon: HeartPulse, to: '/bls-course' },
  { label: 'Request Info', icon: ClipboardList, modal: true },
  { label: 'MyElite', icon: LogIn, href: MYELITE_URL },
  { label: 'Donations & Giving', icon: HandHeart, to: '/giving' },
]

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const timerRef = useRef(null)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), [])

  // Autoplay; restarts after every slide change and stops while hovered/focused
  useEffect(() => {
    if (paused || isModalOpen || prefersReducedMotion()) return
    timerRef.current = setTimeout(next, AUTOPLAY_MS)
    return () => clearTimeout(timerRef.current)
  }, [index, paused, isModalOpen, next])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  const renderCta = (cta) =>
    cta.modal ? (
      <button type="button" className="ribbon" onClick={() => setIsModalOpen(true)}>
        {cta.label}
      </button>
    ) : (
      <Link to={cta.to} className="ribbon">
        {cta.label}
      </Link>
    )

  return (
    <section className="hero" id="home" aria-roledescription="carousel" aria-label="Featured">
      <div
        className="banner"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={onKeyDown}
      >
        <div className="banner__stage">
          {slides.map((s, i) => (
            <article
              key={s.title}
              className={`flyer${i === index ? ' is-active' : ''}`}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={i !== index}
              inert={i !== index}
            >
              <div className="flyer__panel">
                <img src="/elite-crest-green.png" alt="" className="flyer__crest" />
                <p className="flyer__eyebrow">{s.eyebrow}</p>
                {i === 0 ? <h1 className="flyer__title">{s.title}</h1> : <h2 className="flyer__title">{s.title}</h2>}
                <span className="flyer__rule" aria-hidden="true" />
                <p className="flyer__subtitle">{s.subtitle}</p>
                {s.logo && <img src={s.logo} alt="American Heart Association Authorized Training Site" className="flyer__logo" />}
                {renderCta(s.cta)}
              </div>
              <div className="flyer__photo" style={{ backgroundImage: `url(${s.image})` }} aria-hidden="true" />
            </article>
          ))}
        </div>

        <button type="button" className="banner__arrow banner__arrow--prev" aria-label="Previous slide" onClick={prev}>
          <ChevronLeft size={26} aria-hidden="true" />
        </button>
        <button type="button" className="banner__arrow banner__arrow--next" aria-label="Next slide" onClick={next}>
          <ChevronRight size={26} aria-hidden="true" />
        </button>

        <div className="banner__progress" aria-hidden="true">
          <span key={index} className={paused || isModalOpen ? 'is-paused' : ''} />
        </div>
      </div>

      {/* Quick links band */}
      <nav className="quicklinks" aria-label="Quick links">
        {quickLinks.map((q) => {
          const content = (
            <>
              <q.icon size={44} strokeWidth={1.25} aria-hidden="true" />
              <span>{q.label}</span>
            </>
          )
          if (q.modal) {
            return (
              <button key={q.label} type="button" className="quicklink" onClick={() => setIsModalOpen(true)}>
                {content}
              </button>
            )
          }
          if (q.href) {
            return (
              <a key={q.label} href={q.href} target="_blank" rel="noopener noreferrer" className="quicklink">
                {content}
              </a>
            )
          }
          return (
            <Link key={q.label} to={q.to} className="quicklink">
              {content}
            </Link>
          )
        })}
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Hero
