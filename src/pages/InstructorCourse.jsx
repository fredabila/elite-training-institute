import { useState } from 'react'
import './InstructorCourse.css'
import RegistrationModal from '../RegistrationModal'

function InstructorCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <main className="instructor-course-page">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-link">Home</a>
              <span className="breadcrumb-separator">{'>'}</span>
              <a href="/courses" className="breadcrumb-link">Courses</a>
              <span className="breadcrumb-separator">{'>'}</span>
              <span className="breadcrumb-current">Instructor Course</span>
            </nav>
            
            <div className="hero-main">
              <div className="aha-logo-container">
                <img src="/aha-authorized.jpg" alt="AHA Authorized Training Site" className="aha-hero-logo" />
              </div>
              <h1 className="hero-title">AHA BLS/CPR Instructor (Initial)</h1>
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
                  Thank you for your interest in becoming an American Heart Association BLS Instructor. The American Heart Association CPR Instructor Course will allow the participant to teach all American Heart Association BLS level certification & Heartsaver CPR classes. Instructor candidates must have the American Heart Association BLS certification (not expired) before attending the instructor course.
                </p>
              </div>

              {/* Prerequisites Section */}
              <div className="course-section">
                <div className="section-header">
                  <div className="section-icon prerequisites">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                      <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                      <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                    </svg>
                  </div>
                  <h2 className="section-title">Prerequisites for Instructor Essentials</h2>
                </div>
                <div className="prerequisites-box">
                  <p className="section-content">
                    Before taking this course, candidates must have a current Provider Card for the discipline they wish to teach. Candidates must also be aligned with an AHA Training Center that is accepting new instructors for their discipline.
                  </p>
                  <div className="checklist">
                    <div className="checklist-item">
                      <div className="check-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      </div>
                      <span>Current AHA BLS Provider Card (not expired)</span>
                    </div>
                    <div className="checklist-item">
                      <div className="check-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      </div>
                      <span>Aligned with an AHA Training Center</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Covers Section */}
              <div className="course-section">
                <div className="section-header">
                  <div className="section-icon curriculum">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <h2 className="section-title">Course Covers</h2>
                </div>
                <ul className="curriculum-list">
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                      </svg>
                    </div>
                    <span>Planning and preparation for courses</span>
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
                    <span>Instructing courses</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4l3-3 3 3h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-4l-3 3-3-3z"/>
                        <path d="M9 7l3 3 3-3"/>
                      </svg>
                    </div>
                    <span>Conducting written exams, skills practice, and skills testing</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span>Keeping your instructor status current</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                      </svg>
                    </div>
                    <span>Includes general information about instructing AHA courses, followed by discipline-specific course information</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                    <span>Course information is available for 24 months following online activation</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                    </div>
                    <span>Continued education credits available</span>
                  </li>
                </ul>
              </div>

              {/* Delivery Method Section */}
              <div className="course-section">
                <div className="section-header">
                  <div className="section-icon delivery">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <h2 className="section-title">Course Delivery</h2>
                </div>
                <div className="delivery-box">
                  <p className="section-content">
                    <strong>Blended learning</strong> includes a combination of eLearning, in which a student completes part of the course in a self-directed manner, and a hands-on session.
                  </p>
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
                    <div className="detail-value">2 Days</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Certification</div>
                    <div className="detail-value">2 Years Valid</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Format</div>
                    <div className="detail-value">Blended Learning</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Materials</div>
                    <div className="detail-value">Included</div>
                  </div>
                </div>
              </div>

              {/* Important Details Section */}
              <div className="course-section">
                <div className="section-header">
                  <div className="section-icon details">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </div>
                  <h2 className="section-title">Important Details</h2>
                </div>
                <div className="details-box">
                  <div className="detail-highlight">
                    <div className="highlight-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Instructor Manual Included</h4>
                      <p>Your course fee covers the official AHA BLS Instructor Manual.</p>
                    </div>
                  </div>
                  <div className="detail-highlight">
                    <div className="highlight-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Timeline</h4>
                      <p>You must begin student teaching within 90 days and finish the process within 6 months.</p>
                    </div>
                  </div>
                  <div className="detail-highlight">
                    <div className="highlight-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Support</h4>
                      <p>Upon successful completion of all steps, candidates receive an Instructor card, valid for two years. We'll guide you step by step and support you through the entire journey to becoming a certified instructor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Sidebar */}
            <aside className="pricing-sidebar">
              <div className="pricing-card">
                <h3 className="pricing-header">Course Pricing</h3>
                
                <div className="pricing-details">
                  <div className="price-item featured">
                    <span className="price-label">Initial Course Fee:</span>
                    <span className="price-value">$549.00</span>
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
                  <h4 className="highlights-title">Instructor Benefits</h4>
                  <ul className="highlights-list">
                    <li>Become an AHA Instructor</li>
                    <li>Teach BLS & HeartSaver</li>
                    <li>Blended learning format</li>
                    <li>Manual included</li>
                    <li>Ongoing support</li>
                    <li>2-year certification</li>
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

export default InstructorCourse
