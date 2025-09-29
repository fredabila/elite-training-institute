import './HeartSaverCourse.css'

function HeartSaverCourse() {
  return (
    <main className="heartsaver-course-page">
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
              <span className="breadcrumb-current">HeartSaver Course</span>
            </nav>
            
            <div className="hero-main">
              <div className="aha-logo-container">
                <img src="/aha-authorized.jpg" alt="AHA Authorized Training Site" className="aha-hero-logo" />
              </div>
              <h1 className="hero-title">HeartSaver First Aid CPR AED</h1>
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
                  The AHA's HeartSaver First Aid CPR AED course teaches lifesaving skills for adults, children, and infants in everyday emergencies. The course emphasizes hands-on practice, practical scenarios, and confidence in providing first aid, CPR, and using an AED. It follows the latest American Heart Association Guidelines for CPR and Emergency Cardiovascular Care (ECC).
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
                  This course is designed for anyone with little or no medical training who wants to learn how to respond to emergencies. It is ideal for teachers, coaches, workplace responders, and community members. Upon successful completion, students receive a course completion card, valid for two years.
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
                    <span>Adult, child, and infant CPR</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Use of an automated external defibrillator (AED)</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Basic first aid for common injuries and emergencies</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Recognition and management of choking</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Preventing infection and responding safely</span>
                  </li>
                  <li className="curriculum-item">
                    <div className="curriculum-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span>Skills for real-life emergency situations</span>
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
                    <div className="detail-value">6 Hours</div>
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
                    <span className="price-value">$140.00</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">Renewal Fee:</span>
                    <span className="price-value">$120.00</span>
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
                    <li>Community CPR training</li>
                    <li>AHA certified instructors</li>
                    <li>Hands-on practice</li>
                    <li>Small class sizes</li>
                    <li>All materials included</li>
                    <li>Real-life scenarios</li>
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

export default HeartSaverCourse
