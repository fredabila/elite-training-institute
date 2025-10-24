import { useState } from 'react'
import './CHHAProgram.css'
import EnrollmentModal from '../EnrollmentModal'

function CHHAProgram() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <main className="chha-program-page">
      {/* Hero Section */}
      <section className="program-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-link">Home</a>
              <span className="breadcrumb-separator">{'>'}</span>
              <a href="/courses" className="breadcrumb-link">Courses</a>
              <span className="breadcrumb-separator">{'>'}</span>
              <span className="breadcrumb-current">CHHA Program</span>
            </nav>
            
            <div className="hero-main">
              <div className="special-badge">
                <span className="badge-text">LIMITED TIME: $499</span>
                <span className="badge-savings">(Save $150!)</span>
              </div>
              <h1 className="hero-title">Certified Home Health Aide (CHHA) Program</h1>
              <p className="hero-subtitle">Compassionate care training for New Jersey's home healthcare professionals</p>
              
              {/* Top Enroll Button */}
              <div className="hero-cta">
                <button className="hero-enroll-btn" onClick={openModal}>ENROLL NOW</button>
                <div className="hero-pricing">
                  <span className="hero-price-original">Regular: $649</span>
                  <span className="hero-price-current">Now: $499</span>
                </div>
              </div>
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
                At Elite Training Institute, our CHHA program is designed to prepare students to provide compassionate and competent care to patients in their homes. The program aligns with the New Jersey Board of Nursing standards, ensuring that our graduates are equipped with the necessary skills and knowledge to excel in the home health care field.
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
                      </div>
                      <p>Students engage in comprehensive online coursework covering:</p>
                      <ul className="topics-list">
                        <li>Personal care</li>
                        <li>Patient rights</li>
                        <li>Infection control</li>
                        <li>Safety procedures</li>
                        <li>Nutrition</li>
                        <li>Communication skills</li>
                      </ul>
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
                      </div>
                      <p>Supervised hands-on experience in a home or clinical setting, practicing patient care tasks such as bathing, feeding, mobility assistance, and vital signs under the guidance of licensed professionals.</p>
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
                        <div className="timeline-description">Complete program combining online theory and in-person practical training</div>
                      </div>
                      <div className="timeline-breakdown">
                        <div className="breakdown-item">
                          <span className="breakdown-label">Online Theory:</span>
                          <span className="breakdown-value">60 hours</span>
                        </div>
                        <div className="breakdown-item">
                          <span className="breakdown-label">Clinical Practice:</span>
                          <span className="breakdown-value">16 hours</span>
                        </div>
                        <div className="breakdown-item">
                          <span className="breakdown-label">Total Program:</span>
                          <span className="breakdown-value">76 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Section */}
            <div className="eligibility-section">
              <h2 className="section-title">Student Eligibility & Prerequisites</h2>
              <p className="section-subtitle">To enroll in the CHHA program at Elite, applicants must:</p>
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
                  <span>Complete a criminal background check and fingerprint</span>
                </div>
                <div className="checklist-item">
                  <div className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <span>Demonstrate basic communication skills and compassion for patient care</span>
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
                    <h3>New Jersey Board of Nursing Licensure</h3>
                    <p>Graduates are eligible to apply for NJ Certified Homemaker-Home Health Aide licensure through the New Jersey Board of Nursing.</p>
                  </div>
                </div>
                
                <div className="requirements-grid">
                  <div className="requirement-item">
                    <div className="req-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Complete All Requirements</h4>
                      <p>Students must complete all required classroom and clinical hours to be eligible for certification.</p>
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
                      <h4>2-Year Validity</h4>
                      <p>Certification is valid for 2 years; recertification requires completion of continuing education and employment verification.</p>
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
                  <p>Hybrid schedule for online theory and in-person skills training</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3>Hands-on Experience</h3>
                  <p>Clinical experience to build confidence and competence</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4v6h6"/>
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                    </svg>
                  </div>
                  <h3>Accelerated Program</h3>
                  <p>2-week program for fast entry into the workforce</p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3>Career Preparation</h3>
                  <p>Prepares students for NJ CHHA licensure and meaningful home care careers</p>
                </div>
              </div>
            </div>

            {/* Special Notice */}
            <div className="special-notice">
              <div className="notice-header">
                <div className="notice-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <h3>Important Notice</h3>
              </div>
              <p>
                "Please be advised that starting May 1, 2018, ALL applicants who wish to become a Certified Homemaker-Home Health Aide (CHHA) must apply for initial certification, with the Board of Nursing, ONLINE only. Paper applications for initial certification will no longer be accepted on or after May 1st. Additionally, the Board of Nursing has eliminated the conditional/temporary work certification, so ALL applicants MUST undergo a criminal background check before beginning employment as a CHHA."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-content">
            <div className="pricing-card">
              <div className="pricing-header">
                <h2>Program Pricing</h2>
                <div className="pricing-badges">
                  <div className="original-price">Regular: $649.00</div>
                  <div className="current-price">NOW: $499.00</div>
                  <div className="urgency-text">Until December 31, 2025</div>
                </div>
              </div>
              
              <div className="pricing-details">
                <div className="includes-section">
                  <h3>Includes:</h3>
                  <ul>
                    <li>All training materials</li>
                    <li>Registration fees</li>
                    <li>Clinical practice</li>
                    <li>Certification preparation</li>
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
              
              <div className="action-buttons">
                <button className="enroll-btn" onClick={openModal}>ENROLL NOW</button>
                <a href="https://app.autobooks.co/pay/elite-training-institute" target="_blank" rel="noopener noreferrer" className="pay-btn">
                  <span>PAY HERE</span>
                  <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <EnrollmentModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  )
}

export default CHHAProgram
