import './EKGProgram.css'

function EKGProgram() {
  return (
    <main className="ekg-program-page">
      {/* Hero Section */}
      <section className="program-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-link">Home</a>
              <span className="breadcrumb-separator">></span>
              <a href="/courses" className="breadcrumb-link">Courses</a>
              <span className="breadcrumb-separator">></span>
              <span className="breadcrumb-current">EKG Program</span>
            </nav>
            
            <div className="hero-main">
              <div className="coming-soon-badge">
                <span className="badge-text">COMING SOON</span>
              </div>
              <h1 className="hero-title">EKG Technician Program</h1>
              <p className="hero-subtitle">Electrocardiogram testing and cardiac rhythm interpretation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="program-overview">
        <div className="container">
          <div className="overview-content">
            <div className="intro-paragraph">
              <p>
                At Elite Training Institute, our EKG Technician program prepares students to perform electrocardiogram (EKG/ECG) testing, interpret basic cardiac rhythms, and support healthcare providers in hospitals, clinics, and diagnostic centers. The program combines online theory with hands-on, in-person clinical practice, ensuring graduates meet New Jersey standards for EKG technicians.
              </p>
            </div>

            {/* Program Format Section */}
            <div className="program-format">
              <h2 className="section-title">Program Format</h2>
              <div className="format-grid">
                {/* Left Column - Hybrid Learning */}
                <div className="format-column">
                  <div className="format-card">
                    <div className="format-header">
                      <div className="format-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                        </svg>
                      </div>
                      <h3>Hybrid Learning Model</h3>
                    </div>
                    
                    <div className="learning-component">
                      <div className="component-header">
                        <div className="component-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                          </svg>
                        </div>
                        <h4>Online Instruction</h4>
                        <div className="hours-badge">Classroom: 40 hours</div>
                      </div>
                      <p>Students learn cardiac anatomy & physiology, medical terminology, EKG fundamentals, safety and infection control, patient communication, and rhythm interpretation basics.</p>
                    </div>

                    <div className="learning-component">
                      <div className="component-header">
                        <div className="component-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                          </svg>
                        </div>
                        <h4>In-Person Clinical Training</h4>
                        <div className="hours-badge">100 hours</div>
                      </div>
                      <p>Supervised practice placing electrodes, performing EKG tests, troubleshooting equipment, and assisting in cardiac monitoring in a healthcare facility.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Program Length */}
                <div className="format-column">
                  <div className="format-card">
                    <div className="format-header">
                      <div className="format-icon clock">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12,6 12,12 16,14"/>
                        </svg>
                      </div>
                      <h3>Program Length</h3>
                    </div>
                    
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-duration">2 months</div>
                        <div className="timeline-description">Complete program combining 2 weeks online theory and 6 weeks in person clinical</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Section */}
            <div className="eligibility-section">
              <h2 className="section-title">Student Eligibility & Prerequisites</h2>
              <p className="section-subtitle">To enroll in the EKG Technician program at Elite, applicants must:</p>
              <div className="checklist">
                <div className="checklist-item">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span>Be at least 18 years old</span>
                </div>
                <div className="checklist-item">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span>Hold a high school diploma or GED</span>
                </div>
                <div className="checklist-item">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span>Complete a criminal background check, physical exam, and immunization/TB clearance before clinical placement</span>
                </div>
                <div className="checklist-item">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span>Possess basic computer literacy and attention to detail</span>
                </div>
              </div>
            </div>

            {/* Certification Requirements */}
            <div className="certification-section">
              <h2 className="section-title">Certification Requirements</h2>
              <div className="certification-content">
                <div className="certification-badge">
                  <div className="badge-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="badge-content">
                    <h3>National Certification</h3>
                    <p>Graduates are prepared to sit for national certification exams: CET (Certified EKG Technician) through NHA. NOTE: Certification is not required but enhances employability and prepares graduates to work in hospitals, physician offices, outpatient clinics, and cardiac diagnostic centers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Elite */}
            <div className="why-choose-section">
              <h2 className="section-title">Why Choose Elite?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4v6h6"/>
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                    </svg>
                  </div>
                  <h3>Flexible Schedule</h3>
                  <p>Online theory and in-person clinical practice</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3>Clinical Experience</h3>
                  <p>Hands-on experience under licensed healthcare professionals</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4v6h6"/>
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                    </svg>
                  </div>
                  <h3>Accelerated Program</h3>
                  <p>2-month program for quick entry into the workforce</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3>Career Ready</h3>
                  <p>Skills for hospitals, clinics, and diagnostic centers</p>
                </div>
              </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="coming-soon-notice">
              <div className="notice-header">
                <div className="notice-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <h3>Coming Soon</h3>
              </div>
              <p>
                Elite's EKG Technician Program enrollment will open shortly. Gain the knowledge, practical skills, and certification to start a rewarding career in cardiac care in just a few months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon CTA Section */}
      <section className="coming-soon-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Stay Updated</h2>
            <p>Be the first to know when enrollment opens for our EKG Program</p>
            <button className="notify-btn">NOTIFY ME WHEN AVAILABLE</button>
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
        </div>
      </section>
    </main>
  )
}

export default EKGProgram
