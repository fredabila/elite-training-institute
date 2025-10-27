import { useState } from 'react'
import ContactModal from '../ContactModal'
import './About.css'

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span className="separator">&gt;</span>
            <span>About Us</span>
          </nav>
          <h1 className="hero-title">Empowering Tomorrow's Healthcare Heroes</h1>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="main-story">
        <div className="container">
          <div className="story-content">
            <p className="opening-statement">
              At Elite Training Institute, we're not just <span className="highlight">shaping the future</span> of healthcare. Here, passionate individuals <span className="highlight">turn ambition into impact</span>. Whether you're taking your first step or advancing your expertise, we <span className="highlight">empower you</span> with the skills, knowledge, and confidence to succeed and stand out in your career.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <h3 className="card-title">Our Mission</h3>
              </div>
              <p className="card-text">
                To empower students with education, skills, and confidence needed to provide top-quality care and make a difference in people's lives.
              </p>
            </div>

            <div className="vision-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="card-title">Our Vision</h3>
              </div>
              <p className="card-text">
                To be a leading provider of healthcare education, recognized for excellence in training, student success, and our commitment to improving community health through compassionate, competent caregivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Emmanuel Yeboah</h3>
                <p className="member-title">MSN, FNP-C</p>
                <p className="member-role">Executive Director</p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Abeiku Greene</h3>
                <p className="member-title">EMPA, NYU</p>
                <p className="member-role">Admissions & Enrollment Director</p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Nikki G. Yeboah</h3>
                <p className="member-title">BSc. CIS</p>
                <p className="member-role">Chief Operating Officer</p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Nana Kwame Apau-Duah</h3>
                <p className="member-title">BSN. RN.</p>
                <p className="member-role">Compliance & Accreditation Officer</p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">Stephanie Gonzalez</h3>
                <p className="member-title">MSN, FNP-BC</p>
                <p className="member-role">Clinical Coordinator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Elite Section */}
      <section className="why-choose-elite">
        <div className="container">
          <h2 className="section-title">Why Choose Elite Training Institute?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <h3 className="benefit-title">NJ State-Approved CHHA & American Heart Association (AHA) - Certified Programs</h3>
              <p className="benefit-description">All medical training programs meet state standards and provide official same-day AHA certifications.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="benefit-title">Small Class Sizes for Personalized Attention</h3>
              <p className="benefit-description">Individual focus ensures mastery of every skill and concept.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="benefit-title">Hands-On Training</h3>
              <p className="benefit-description">Every student gets the opportunity to practice and refine skills until they're fully mastered.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3 className="benefit-title">Flexible Schedules</h3>
              <p className="benefit-description">Classes are also available on weekends to accommodate working individuals and busy parents.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 2h4c1.1 0 2 .9 2 2v2h4c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2z"/>
                </svg>
              </div>
              <h3 className="benefit-title">Job Placement Assistance</h3>
              <p className="benefit-description">We partner with our affiliated home care agency to help graduates start working immediately after certification.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3 className="benefit-title">Supportive Learning Environment</h3>
              <p className="benefit-description">Our experienced instructors offer personalized guidance in small class sizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations & Approvals Section */}
      <section className="accreditations">
        <div className="container">
          <h2 className="section-title">Official Accreditations & Approvals</h2>
          <div className="accreditations-grid">
            <div className="accreditation-card">
              <div className="accreditation-icon">
                <img src="/doe.jpg" alt="NJ Department of Education" className="accreditation-logo" />
              </div>
              <h3 className="accreditation-title">New Jersey Department of Education Approved</h3>
              <p className="accreditation-description">Educational programs meet state education standards</p>
            </div>

            <div className="accreditation-card">
              <div className="accreditation-icon">
                <img src="/doh.jpg" alt="NJ Department of Health" className="accreditation-logo" />
              </div>
              <h3 className="accreditation-title">New Jersey Department of Health Approved</h3>
              <p className="accreditation-description">All medical training programs meet state standards</p>
            </div>

            <div className="accreditation-card">
              <div className="accreditation-icon">
                <img src="/dol.jpg" alt="NJ Department of Labor" className="accreditation-logo" />
              </div>
              <h3 className="accreditation-title">New Jersey Department of Labor Approved</h3>
              <p className="accreditation-description">Career training programs certified for workforce development</p>
            </div>

            <div className="accreditation-card">
              <div className="accreditation-icon">
                <img src="/aha-authorized.jpg" alt="AHA Authorized" className="accreditation-logo" />
              </div>
              <h3 className="accreditation-title">American Heart Association Authorized Training Site</h3>
              <p className="accreditation-description">Official same-day AHA certifications</p>
            </div>

            <div className="accreditation-card">
              <div className="accreditation-icon">
                <img src="/caf.jpg" alt="NJ Board of Nursing" className="accreditation-logo" />
              </div>
              <h3 className="accreditation-title">New Jersey Board of Nursing Approved</h3>
              <p className="accreditation-description">CHHA program meets all state requirements</p>
              <a href="https://newjersey.mylicense.com/verification/Search.aspx?facility=Y" className="verify-link" target="_blank" rel="noopener noreferrer">Verify HERE</a>
            </div>
          </div>
        </div>
      </section>

      {/* Manicare Affiliate Section */}
      <section className="manicare-affiliate">
        <div className="container">
          <h2 className="section-title">Our Healthcare Partner</h2>
          <div className="affiliate-content">
            <div className="affiliate-text">
              <p className="affiliate-description">
                Our CHHA course is approved under our affiliate Homecare Agency, <strong>'Manicare Home Health'</strong>. This partnership ensures our graduates have direct access to employment opportunities and ongoing support in their healthcare careers.
              </p>
              <div className="partnership-benefits">
                <h4>Partnership Benefits:</h4>
                <ul>
                  <li>Direct job placement assistance</li>
                  <li>Ongoing career support</li>
                  <li>Professional development opportunities</li>
                  <li>Industry networking connections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Section */}
      <section className="student-success">
        <div className="container">
          <h2 className="section-title">Student Success Stories</h2>
          <div className="success-stats">
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Graduation Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">90%</div>
              <div className="stat-label">Employment Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Graduates</div>
            </div>
          </div>
          <p className="success-cta">Join our graduates working in healthcare</p>
        </div>
      </section>

      {/* Location & Facilities Section */}
      <section className="location-facilities">
        <div className="container">
          <div className="location-facilities-grid">
            <div className="location-info">
              <h3 className="location-title">Our Training Center</h3>
              <div className="location-details">
                <div className="address-info">
                  <a 
                    href="https://www.google.com/maps/search/2165+Morris+Ave+Suite+15+Union+NJ+07083" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="address-link"
                  >
                    <p className="address">2165 Morris Ave, Suite 15<br />Union, NJ 07083</p>
                  </a>
                </div>
                <div className="hours-info">
                  <h4 className="hours-title">Hours of Operation</h4>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span className="day">Tuesday:</span>
                      <span className="time">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Friday:</span>
                      <span className="time">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Saturday:</span>
                      <span className="time">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="hours-item special">
                      <span className="day">24/7 On-call support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Start Your Healthcare Journey?</h2>
          <p className="cta-subtitle">Get personalized guidance from our academic advisors</p>
          <div className="cta-buttons">
            <button className="btn btn--primary cta-btn" onClick={openModal}>REQUEST INFO</button>
            <a href="tel:8482801169" className="btn btn--secondary cta-btn">CALL 848.280.1169</a>
          </div>
          <p className="cta-hours">Available Tuesday, Friday, Saturday 9 AM - 5 PM, plus 24/7 on-call support</p>
        </div>
      </section>

      {/* Social Proof Footer */}
      <section className="social-proof">
        <div className="container">
          <h3 className="social-title">Follow our student success stories</h3>
          <div className="social-links">
            <a 
              href="https://web.facebook.com/profile.php?id=61577615826915&mibextid=wwXIfr&rdid=0oGpVXfW70LZrU5p&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1CDmHi4TbU%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>

            <a 
              href="https://www.linkedin.com/company/elite-training-institue/about/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://www.tiktok.com/@elite.training.in?_t=ZT-8xl7qKshlkb&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link tiktok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span>TikTok</span>
            </a>

            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  )
}

export default About