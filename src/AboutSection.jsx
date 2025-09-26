import './AboutSection.css'

function AboutSection() {
  return (
    <section className="about-section">
      {/* Hero Section */}
      <div className="about-section-hero">
        <div className="container">
          <h1 className="about-section-title">About Us</h1>
          <div className="accent-line"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="about-section-content">
        <div className="container">
          <div className="about-section-grid">
            {/* About Text Column */}
            <div className="about-section-card glass-card">
              <div className="card-content">
                <p className="about-section-description">
                  At Elite Training Institute, we empower passionate individuals to turn ambition into impact by providing the skills, knowledge, and confidence to succeed and excel in healthcare.
                </p>
              </div>
            </div>

            {/* Mission Column */}
            <div className="about-section-card glass-card">
              <div className="card-content">
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
            </div>

            {/* Vision Column */}
            <div className="about-section-card glass-card">
              <div className="card-content">
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
        </div>
      </div>

      {/* Why Elite Section */}
      <div className="why-elite">
        <div className="container">
          <h2 className="section-title">Why Elite?</h2>
          
          <div className="benefits-grid">
            {/* Benefit 1 */}
            <div className="benefit-card glass-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <p className="benefit-text">
                All programs are approved by the NJ Department of Labor, Education, and Board of Nursing
              </p>
              <div className="official-seal">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="benefit-card glass-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <p className="benefit-text">
                We are Authorized Training Site-Get Same-Day American Heart Association (AHA) Certifications
              </p>
              <div className="aha-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="benefit-card glass-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <p className="benefit-text">
                Flexible online classes that fit your work and family life. Study Anywhere, anytime
              </p>
              <div className="device-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
                </svg>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="benefit-card glass-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <p className="benefit-text">
                Affordable quality healthcare training designed to fit any student's budget
              </p>
              <div className="dollar-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 15h2c0 1.08.81 2 2 2h2c1.19 0 2-.92 2-2s-.81-2-2-2h-2c-1.19 0-2-.92-2-2s.81-2 2-2h2c1.08 0 2 .89 2 2h2c0-1.08-.81-2-2-2V7h-2v2c-1.19 0-2 .92-2 2s.81 2 2 2h2c1.19 0 2 .92 2 2s-.81 2-2 2h-2c-1.08 0-2-.89-2-2H7v2h2v2z"/>
                </svg>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="benefit-card glass-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <p className="benefit-text">
                Job Placement Assistance to help graduates start working immediately after completion
              </p>
              <div className="briefcase-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 2h4c1.1 0 2 .9 2 2v2h4c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2zm4 4V4h-4v2h4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-section-cta">
        <div className="container">
          <button className="cta-button">REQUEST INFO</button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
