import './PALSCourse.css'

function PALSCourse() {
  return (
    <main className="pals-course-page">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-link">Home</a>
              <span className="breadcrumb-separator">></span>
              <a href="/courses" className="breadcrumb-link">Courses</a>
              <span className="breadcrumb-separator">></span>
              <span className="breadcrumb-current">PALS Course</span>
            </nav>
            
            <div className="hero-main">
              <div className="aha-logo-container">
                <img src="/aha-authorized.jpg" alt="AHA Authorized Training Site" className="aha-hero-logo" />
              </div>
              <h1 className="hero-title">Pediatric Advanced Life Support (PALS)</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="course-overview">
        <div className="container">
          <div className="course-layout">
            {/* Main Content */}
            <div className="course-main">
              {/* Description Box */}
              <div className="description-box">
                <p className="course-description">
                  The AHA's PALS course is designed to improve outcomes for pediatric patients experiencing emergencies. It builds on the foundation of BLS skills, focusing on the recognition and treatment of infants and children at risk for cardiopulmonary arrest. The course follows the latest American Heart Association Guidelines Update for CPR and Emergency Cardiovascular Care (ECC).
                </p>
              </div>

              {/* Who Should Take This Section */}
              <div className="course-section">
                <div className="section-header">
                  <div className="section-icon target-audience">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <h2 className="section-title">Who should take this course?</h2>
                </div>
                <p className="section-content">
                  The AHA PALS course is intended for healthcare providers who respond to emergencies involving infants and children, including those who work in emergency response, emergency medicine, intensive care, and critical care units. Upon successful completion, students receive a PALS course completion card, valid for two years. Please confirm with your employer that this is the appropriate course for your role.
                </p>
              </div>

              {/* Curriculum Section */}
              <div className="course-section">
                <div className="section-header">
                  <div className="section-icon curriculum">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                  </div>
                  <h2 className="section-title">What does this course teach?</h2>
                </div>
                <ul className="curriculum-list">
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>High-quality CPR for infants and children</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Recognition and management of respiratory emergencies</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Recognition and management of shock and cardiopulmonary arrest</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Systematic approach to pediatric assessment</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Effective airway management</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Vascular access and related pharmacology</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Team dynamics and effective communication during resuscitation</span>
                  </li>
                </ul>
              </div>

              {/* Course Details Section */}
              <div className="course-section">
                <div className="section-header">
                  <div className="section-icon details">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <h2 className="section-title">Course Details</h2>
                </div>
                <div className="details-grid">
                  <div className="detail-item">
                    <div className="detail-label">Duration</div>
                    <div className="detail-value">2 Days</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Certification</div>
                    <div className="detail-value">2 Years Valid</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Format</div>
                    <div className="detail-value">In-Person Training</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Materials</div>
                    <div className="detail-value">Included</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Sidebar */}
            <aside className="pricing-sidebar">
              <div className="pricing-card">
                <h3 className="pricing-header">Course Pricing</h3>
                
                <div className="pricing-details">
                  <div className="price-item">
                    <span className="price-label">Initial Fee:</span>
                    <span className="price-value">$240.00</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">Renewal Fee:</span>
                    <span className="price-value">$200.00</span>
                  </div>
                </div>

                <button className="register-btn">REGISTER NOW</button>
                
                <div className="payment-link">
                  <a href="https://app.autobooks.co/pay/elite-training-institute" target="_blank" rel="noopener noreferrer" className="pay-link">
                    <span>PAY HERE</span>
                    <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>

                <div className="course-highlights">
                  <h4 className="highlights-title">Course Highlights</h4>
                  <ul className="highlights-list">
                    <li>Pediatric emergency care</li>
                    <li>AHA certified instructors</li>
                    <li>Hands-on practice</li>
                    <li>Small class sizes</li>
                    <li>All materials included</li>
                    <li>Infant & child focus</li>
                  </ul>
                </div>

                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">Questions?</span>
                      <a href="tel:8482801169" className="contact-link">848.280.1169</a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PALSCourse
