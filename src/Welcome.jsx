import { useEffect, useRef } from 'react'
import './Welcome.css'

function Welcome() {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-underline')
          }
        })
      },
      { threshold: 0.6 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="welcome">
      <div className="welcome__pattern" aria-hidden="true" />
      <div className="welcome__icons" aria-hidden="true">
        <span className="wicon wicon--stethoscope" />
        <span className="wicon wicon--heartbeat" />
        <span className="wicon wicon--cross" />
      </div>
      <div className="welcome__container">
        <h2 className="welcome__heading" ref={headingRef}>
          Welcome!
          <span className="welcome__underline" />
        </h2>
        <p className="welcome__text">
          <strong className="blue">Start your healthcare career with confidence!</strong> At Elite Training Institute, we empower every student to achieve their professional goals. Our top-quality medical training programs and <strong className="blue">American Heart Association Certification</strong> courses provide real skills, hands-on experience, and the confidence you need to succeed. Whether you are starting a new career or advancing your credentials, we make learning <strong className="blue">fast, practical, and rewarding</strong>.
        </p>
        <div className="welcome__accents" aria-hidden="true">
          <span />
          <span />
        </div>
      </div>
    </section>
  )
}

export default Welcome


