import { Link } from 'react-router-dom'
import { HandHeart, Mail, Phone } from 'lucide-react'
import './Giving.css'

const GIVING_EMAIL = 'info@trainatelite.com'

function Giving() {
  return (
    <main className="giving-page">
      <section className="giving-hero">
        <div className="giving-container">
          <nav className="giving-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Donations &amp; Giving</span>
          </nav>
          <h1>Donations &amp; Giving</h1>
          <p>Help us train the next generation of compassionate healthcare professionals.</p>
        </div>
      </section>

      <section className="giving-body">
        <div className="giving-container giving-grid">
          <div className="giving-card giving-card--intro">
            <div className="giving-icon">
              <HandHeart size={30} aria-hidden="true" />
            </div>
            <h2>Support Our Students</h2>
            <p>
              Elite School of Health Professions prepares students for rewarding careers in healthcare. Gifts from
              individuals, organizations, and community partners help us expand access to quality training and support
              students as they start their careers.
            </p>
            <p>
              If you would like to make a donation or learn about partnership and giving opportunities, our team would be
              glad to hear from you.
            </p>
          </div>

          <div className="giving-card giving-card--contact">
            <h2>Get in Touch</h2>
            <p>Contact us to make a gift or discuss how you can support our students.</p>
            <a href={`mailto:${GIVING_EMAIL}?subject=Donations%20%26%20Giving`} className="giving-button">
              <Mail size={18} aria-hidden="true" /> Email Us About Giving
            </a>
            <a href="tel:18482801169" className="giving-line">
              <Phone size={16} aria-hidden="true" /> (848) 280-1169
            </a>
            <Link to="/contact" className="giving-link">
              Visit our contact page
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Giving
