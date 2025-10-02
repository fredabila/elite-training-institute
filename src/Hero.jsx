import { useEffect, useMemo, useRef, useState } from 'react'
import ContactModal from './ContactModal'
import './Hero.css'

const slides = [
  {
    title: 'All Programs are Approved by the NJ Department of Labor, Education, and Board of Nursing',
    subtitle: 'State-approved healthcare training you can trust',
    titleSize: 48,
    bgClass: 'bg-medical-pattern',
    image: 'https://www.teachhub.com/wp-content/uploads/2020/09/Sept-9-Benefits-of-Group-Work_web.jpg',
  },
  {
    title: 'We are Authorized Training Site - Get Same-Day American Heart Association (AHA) Certifications',
    subtitle: 'Official AHA certification in just one day',
    titleSize: 46,
    bgClass: 'bg-heart-rhythm',
    badge: 'AHA',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Flexible Online Classes That Fit Your Work and Family Life - Study Anywhere, Anytime',
    subtitle: 'Learn at your own pace, on your schedule',
    titleSize: 44,
    bgClass: 'bg-calendar-clock',
    image: 'https://transitionsusa.org/wp-content/uploads/2024/12/shutterstock_2111420681-scaled.jpg',
  },
  {
    title: 'High-Quality, Hands-On Training to Prepare You for a Rewarding Healthcare Career',
    subtitle: 'Real skills, real experience, real results',
    titleSize: 46,
    bgClass: 'bg-healthcare-pros',
    image: 'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/6/8/9/536689_lab_practicals_webinar_image_credit_gettyimages1372800323_32_181878.jpg',
  },
  {
    title: 'Job Placement Assistance to Help Graduates Start Working Immediately After Completion',
    subtitle: 'Your career starts here',
    titleSize: 44,
    bgClass: 'bg-career',
    image: 'https://wolfcareers.com/wp-content/uploads/2021/12/job-placement-min.jpeg',
  },
]

function Hero() {
  const [index, setIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const timerRef = useRef(null)

  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 5000)
  }, [index])

  // Parallax mouse movement for icons
  const sceneRef = useRef(null)
  useEffect(() => {
    const el = sceneRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.setProperty('--parallax-x', String(x))
      el.style.setProperty('--parallax-y', String(y))
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  const dots = useMemo(() => new Array(slides.length).fill(0), [])

  return (
    <section className="hero" id="home" ref={sceneRef}>
      <div className="hero__gradient" />

      {/* Floating medical icons */}
      <div className="hero__icons">
        <div className="icon icon--stethoscope" aria-hidden="true" />
        <div className="icon icon--heart" aria-hidden="true" />
        <div className="icon icon--cross" aria-hidden="true" />
      </div>

      {/* Slides */}
      <div className="slides">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`slide ${i === index ? 'is-active' : ''} ${s.bgClass}`}
            style={{ ['--slide-bg']: `url(${s.image})` }}
            aria-hidden={i === index ? 'false' : 'true'}
          >
            <div className="slide__content">
              <h1 className="slide__title" style={{ fontSize: s.titleSize }}>
                {s.title}
              </h1>
              <p className="slide__subtitle">{s.subtitle}</p>
              {s.badge === 'AHA' && (
                <div className="slide__badge" aria-label="American Heart Association" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="arrow arrow--left" aria-label="Previous" onClick={prev}>
        <span />
      </button>
      <button className="arrow arrow--right" aria-label="Next" onClick={next}>
        <span />
      </button>

      <div className="dots" role="tablist" aria-label="Slide navigation">
        {dots.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'is-active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <button className="cta" onClick={openModal} aria-label="Request information">
        REQUEST INFO
      </button>
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}

export default Hero


