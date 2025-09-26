import './CMAProgram.css'

function CMAProgram() {
  return (
    <main className="cma-program-page">
      {/* Hero Section */}
      <section className="program-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-link">Home</a>
              <span className="breadcrumb-separator"></span>
              <a href="/courses" className="breadcrumb-link">Courses</a>
              <span className="breadcrumb-separator"></span>
              <span className="breadcrumb-current">CMA Program</span>
            </nav>
            
            <div className="hero-main">
              <div className="coming-soon-badge">
                <span className="badge-text">COMING SOON</span>
              </div>
              <h1 className="hero-title">Certified Medication Aide (CMA) Program</h1>
              <p className="hero-subtitle">Safe medication administration training for New Jersey healthcare professionals</p>
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
                At Elite, our Certified Medication Aide (CMA) program is designed to prepare healthcare professionals to safely administer medications in licensed facilities across New Jersey. The program is approved by the New Jersey Department of Health (NJDOH) and combines the flexibility of online learning with the essential hands-on experience of in-person training.
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
                        <div className="hours-badge">Classroom: 48 hours</div>
                      </div>
                      <p>Complete the theory coursework from the comfort of home, at your own pace, within structured deadlines.</p>
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
                        <h4>In-Person Training</h4>
                        <div className="hours-badge">Skills & Med Passes: 3 days</div>
                      </div>
                      <p>Gain supervised, hands-on practice in a healthcare setting with licensed professionals.</p>
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
                        <div className="timeline-duration">2 weeks</div>
                        <div className="timeline-description">Complete program blending both classroom instruction and clinical skills training</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Section */}
            <div className="eligibility-section">
              <h2 className="section-title">Student Eligibility & Prerequisites</h2>
              <p className="section-subtitle">To enroll, you must hold an active New Jersey certification as one of the following:</p>
              <div className="prerequisites-grid">
                <div className="prerequisite-item">
                  <div className="prereq-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span>Certified Nurse Aide (CNA)</span>
                </div>
                <div className="prerequisite-item">
                  <div className="prereq-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span>Homemaker-Home Health Aide (CHHA)</span>
                </div>
                <div className="prerequisite-item">
                  <div className="prereq-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span>Personal Care Assistant (PCA)</span>
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
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                    </svg>
                  </div>
                  <div className="badge-content">
                    <h3>State Standardized Exam</h3>
                    <p>Upon completion, students must pass the NJDOH-approved exam within 6 months of training. At Elite, our streamlined schedule ensures that in only two weeks, you can be fully prepared to sit for the New Jersey Department of Health standardized CMA exam and advance your healthcare career.</p>
                  </div>
                </div>
                
                <div className="requirements-grid">
                  <div className="requirement-item">
                    <div className="req-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Criminal Background Investigation (CBI)</h4>
                      <p>A background check is required before certification can be issued.</p>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <div className="req-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Recertification</h4>
                      <p>Certification is valid for 2 years. Renewal requires 10 hours of continuing education, including 5 hours reviewing principles and skills of medication administration and 5 hours on current drug use topics relevant to the elderly.</p>
                    </div>
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
                  <p>Hybrid schedule for working professionals</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3>Hands-on Training</h3>
                  <p>In-person skills training to build confidence</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4v6h6"/>
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                    </svg>
                  </div>
                  <h3>Accelerated Program</h3>
                  <p>2-week completion time</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3>State Exam Prep</h3>
                  <p>Preparation for the state exam and your next career step</p>
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
                Elite's Certified Medication Aide Program will open enrollment shortly. Get the right mix of online flexibility and hands-on training to become a skilled healthcare professional in just two weeks.
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
            <p>Be the first to know when enrollment opens for our CMA Program</p>
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

export default CMAProgram
