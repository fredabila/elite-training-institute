import { useState } from 'react'
import './InstructorRenewalCourse.css'
import RegistrationModal from '../RegistrationModal'

function InstructorRenewalCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <main className="instructor-renewal-course-page">
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
              <span className="breadcrumb-current">Instructor Renewal</span>
            </nav>
            
            <div className="hero-main">
              <div className="aha-logo-container">
                <img src="/aha-authorized.jpg" alt="AHA Authorized Training Site" className="aha-hero-logo" />
              </div>
              <h1 className="hero-title">AHA BLS/CPR Instructor (Renewal)</h1>
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
              {/* Introduction Box */}
              <div className="intro-box">
                <p className="course-intro">
                  Thank you for your interest in renewing your American Heart Association BLS Instructor certification. The Instructor Renewal Course allows current instructors to maintain their status and continue teaching all American Heart Association BLS level certifications and Heartsaver CPR classes. To be eligible, you must hold a current, unexpired AHA BLS Instructor certification before attending the renewal course.
                </p>
              </div>

              {/* What the Renewal Course Includes Section */}
              <div className="course-section">
                <div className="section-header">
                  <div className="section-icon renewal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 4v6h6"/>
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                    </svg>
                  </div>
                  <h2 className="section-title">What the Renewal Course Includes</h2>
                </div>
                <ul className="curriculum-list">
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
                    </div>
                    <div className="curriculum-content">
                      <h4>Skills Check & Updates</h4>
                      <p>Demonstrate proficiency in BLS skills and review the latest AHA guidelines.</p>
                    </div>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                    </div>
                    <div className="curriculum-content">
                      <h4>Course Administration Review</h4>
                      <p>Updates on instructor paperwork, rosters, monitoring, and AHA policies.</p>
                    </div>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div className="curriculum-content">
                      <h4>Teaching Evaluation</h4>
                      <p>Review of instructional techniques to ensure quality and consistency in teaching.</p>
                    </div>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                      </svg>
                    </div>
                    <div className="curriculum-content">
                      <h4>Resource Updates</h4>
                      <p>Guidance on any changes to instructor manuals, materials, or course delivery.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Eligibility Requirements Section */}
              <div className="course-section">
                <div className="section-header">
                  <div className="section-icon requirements">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <h2 className="section-title">Eligibility Requirements</h2>
                </div>
                <div className="requirements-box">
                  <div className="requirement-item">
                    <div className="requirement-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Current Instructor Status</h4>
                      <p>Must hold a current, unexpired AHA BLS Instructor certification</p>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <div className="requirement-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Timing</h4>
                      <p>Complete renewal before your current instructor certification expires</p>
                    </div>
                  </div>
                </div>
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
                    <div className="detail-value">4 Hours</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Certification</div>
                    <div className="detail-value">2 Years Valid</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Format</div>
                    <div className="detail-value">In-Person Review</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Materials</div>
                    <div className="detail-value">Updates Provided</div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="course-section">
                <div className="section-header">
                  <div className="section-icon benefits">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <h2 className="section-title">Renewal Benefits</h2>
                </div>
                <div className="benefits-box">
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 4v6h6"/>
                        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                      </svg>
                    </div>
                    <span>Maintain your AHA Instructor status for 2 more years</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span>Stay current with the latest AHA guidelines and best practices</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <span>Continue teaching BLS and HeartSaver courses with confidence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Sidebar */}
            <aside className="pricing-sidebar">
              <div className="pricing-card">
                <h3 className="pricing-header">Renewal Investment</h3>
                
                <div className="pricing-details">
                  <div className="price-item featured">
                    <span className="price-label">Renewal Course Fee:</span>
                    <span className="price-value">$349.00</span>
                  </div>
                </div>

                <button className="register-btn" onClick={openModal}>REGISTER NOW</button>
                
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
                  <h4 className="highlights-title">Renewal Benefits</h4>
                  <ul className="highlights-list">
                    <li>Maintain instructor status</li>
                    <li>Latest AHA guidelines</li>
                    <li>Skills assessment</li>
                    <li>Administrative updates</li>
                    <li>Teaching evaluation</li>
                    <li>Resource updates</li>
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
      
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  )
}

export default InstructorRenewalCourse
