import { useState, useMemo } from 'react'
import './Courses.css'

function Courses() {
  const [activeFilter, setActiveFilter] = useState('All Courses')
  const [searchTerm, setSearchTerm] = useState('')

  const filters = ['All Courses', 'AHA Certifications', 'Medical Programs', 'Available Now', 'Coming Soon']

  // Course data for filtering and sorting
  const allCourses = useMemo(() => [
    // AHA Provider Courses
    { id: 'bls', title: 'Basic Life Support (BLS)', category: 'AHA Certifications', status: 'available', price: 95, duration: '4 hours' },
    { id: 'acls', title: 'Advanced Cardiovascular Life Support (ACLS)', category: 'AHA Certifications', status: 'available', price: 240, duration: '2 days' },
    { id: 'pals', title: 'Pediatric Advanced Life Support (PALS)', category: 'AHA Certifications', status: 'available', price: 240, duration: '2 days' },
    { id: 'heartsaver', title: 'HeartSaver First Aid CPR AED', category: 'AHA Certifications', status: 'available', price: 140, duration: '6 hours' },
    // AHA Instructor Courses
    { id: 'bls-instructor-initial', title: 'BLS/CPR Instructor - Initial', category: 'AHA Certifications', status: 'available', price: 549, duration: '2-3 weeks' },
    { id: 'bls-instructor-renewal', title: 'BLS/CPR Instructor - Renewal', category: 'AHA Certifications', status: 'available', price: 349, duration: '1 day' },
    // Medical Programs
    { id: 'chha', title: 'Certified Home Health Aide (CHHA)', category: 'Medical Programs', status: 'available', price: 499, duration: '2 weeks' },
    { id: 'ma', title: 'Medical Assistant (MA)', category: 'Medical Programs', status: 'coming-soon', price: 0, duration: '5 months' },
    { id: 'cma', title: 'Certified Medication Aide (CMA)', category: 'Medical Programs', status: 'coming-soon', price: 0, duration: '2 weeks' },
    { id: 'cna', title: 'Certified Nurse Assistant (CNA)', category: 'Medical Programs', status: 'coming-soon', price: 0, duration: '4 weeks' },
    { id: 'pct', title: 'Patient Care Technician (PCT)', category: 'Medical Programs', status: 'coming-soon', price: 0, duration: '5 months' },
    { id: 'phlebotomy', title: 'Phlebotomy Technician', category: 'Medical Programs', status: 'coming-soon', price: 0, duration: '2 months' },
    { id: 'ekg', title: 'EKG Technician', category: 'Medical Programs', status: 'coming-soon', price: 0, duration: '2 months' },
    { id: 'pharmacy', title: 'Pharmacy Technician', category: 'Medical Programs', status: 'coming-soon', price: 0, duration: '4 months' }
  ], [])

  // Filter courses
  const filteredCourses = useMemo(() => {
    let filtered = allCourses

    // Apply category filter
    if (activeFilter !== 'All Courses') {
      if (activeFilter === 'Available Now') {
        filtered = filtered.filter(course => course.status === 'available')
      } else if (activeFilter === 'Coming Soon') {
        filtered = filtered.filter(course => course.status === 'coming-soon')
      } else {
        filtered = filtered.filter(course => course.category === activeFilter)
      }
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort alphabetically by default
    filtered.sort((a, b) => a.title.localeCompare(b.title))

    return filtered
  }, [activeFilter, searchTerm, allCourses])

  // Check if course should be visible
  const shouldShowCourse = (courseId) => {
    return filteredCourses.some(course => course.id === courseId)
  }

  return (
    <main className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Training Programs & Certifications</h1>
            <p className="hero-subtitle">State-approved healthcare training with job placement assistance</p>
            
            {/* Filter Bar */}
            <div className="filter-bar">
              <div className="filter-pills">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              
              <div className="search-container">
                <div className="search-bar">
                  <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AHA Provider Certification Courses */}
      <section className="aha-provider-section">
        <div className="container">
          <div className="section-header">
            <div className="header-content">
              <h2 className="section-title">AHA Provider Certification Courses</h2>
              <div className="aha-authorized">
                <img src="/aha-authorized.jpg" alt="AHA Authorized Training Site" className="aha-authorized-image" />
              </div>
            </div>
            <div className="accent-line"></div>
          </div>
          
          <div className="courses-grid">
            {/* BLS Course Card */}
            {shouldShowCourse('bls') && (
            <div className="course-card">
              <div className="card-background">
                <img src="https://i.ibb.co/0V1MYzK8/Whats-App-Image-2025-09-22-at-16-04-14-25058794.jpg" alt="BLS Course" className="background-image" />
              </div>
              <div className="card-content">
                <h3 className="course-title">Basic Life Support (BLS)</h3>
                <p className="course-highlights">Same-day certification • 4-hour course • Healthcare professionals</p>
                <p className="course-details">CPR, AED use, and emergency response training</p>
                
                <div className="pricing-section">
                  <div className="pricing-box">
                    <span className="price-label">Initial:</span>
                    <span className="price-value">$95</span>
                    <span className="price-separator">|</span>
                    <span className="price-label">Renewal:</span>
                    <span className="price-value">$85</span>
                  </div>
                </div>
                
                <div className="duration-badge">4 hours</div>
                
                <button className="register-btn" onClick={() => window.open('/bls-course', '_blank')}>REGISTER</button>
              </div>
            </div>
            )}

            {/* ACLS Course Card */}
            {shouldShowCourse('acls') && (
            <div className="course-card">
              <div className="card-background">
                <img src="https://i.ibb.co/1fPrG6Mb/Whats-App-Image-2025-09-22-at-16-04-59-10d96c26.jpg" alt="ACLS Course" className="background-image" />
              </div>
              <div className="card-content">
                <h3 className="course-title">Advanced Cardiovascular Life Support (ACLS)</h3>
                <p className="course-highlights">Advanced emergency care • 2-day course • Healthcare professionals</p>
                
                <div className="pricing-section">
                  <div className="pricing-box">
                    <span className="price-label">Initial:</span>
                    <span className="price-value">$240</span>
                    <span className="price-separator">|</span>
                    <span className="price-label">Renewal:</span>
                    <span className="price-value">$200</span>
                  </div>
                </div>
                
                <div className="duration-badge">2 days</div>
                
                <button className="register-btn" onClick={() => window.open('/acls-course', '_blank')}>REGISTER</button>
              </div>
            </div>
            )}

            {/* PALS Course Card */}
            {shouldShowCourse('pals') && (
            <div className="course-card">
              <div className="card-background">
                <img src="https://i.ibb.co/JRrpDyWw/Whats-App-Image-2025-09-22-at-16-04-14-94a2ff36.jpg" alt="PALS Course" className="background-image" />
              </div>
              <div className="card-content">
                <h3 className="course-title">Pediatric Advanced Life Support (PALS)</h3>
                <p className="course-highlights">Pediatric emergency care • 2-day course • Child healthcare providers</p>
                
                <div className="pricing-section">
                  <div className="pricing-box">
                    <span className="price-label">Initial:</span>
                    <span className="price-value">$240</span>
                    <span className="price-separator">|</span>
                    <span className="price-label">Renewal:</span>
                    <span className="price-value">$200</span>
                  </div>
                </div>
                
                <div className="duration-badge">2 days</div>
                
                <button className="register-btn" onClick={() => window.open('/pals-course', '_blank')}>REGISTER</button>
              </div>
            </div>
            )}

            {/* HeartSaver Course Card */}
            {shouldShowCourse('heartsaver') && (
            <div className="course-card">
              <div className="card-background">
                <img src="https://i.ibb.co/fY5g2xwK/Whats-App-Image-2025-09-22-at-16-04-14-f0697797.jpg" alt="HeartSaver Course" className="background-image" />
              </div>
              <div className="card-content">
                <h3 className="course-title">HeartSaver First Aid CPR AED</h3>
                <p className="course-highlights">Community CPR • 1-day course • General public</p>
                
                <div className="pricing-section">
                  <div className="pricing-box">
                    <span className="price-label">Initial:</span>
                    <span className="price-value">$140</span>
                    <span className="price-separator">|</span>
                    <span className="price-label">Renewal:</span>
                    <span className="price-value">$120</span>
                  </div>
                </div>
                
                <div className="duration-badge">6 hours</div>
                
                <button className="register-btn" onClick={() => window.open('/heartsaver-course', '_blank')}>REGISTER</button>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* AHA Instructor Courses */}
      <section className="aha-instructor-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">AHA Instructor Certification Courses</h2>
            <div className="accent-line"></div>
          </div>
          
          <div className="instructor-grid">
            {/* Instructor Initial Card */}
            {shouldShowCourse('bls-instructor-initial') && (
            <div className="instructor-card premium">
              <div className="card-background">
                <img src="https://i.ibb.co/Kct2yz5j/Whats-App-Image-2025-09-22-at-16-04-14-7f14413f.jpg" alt="BLS/CPR Instructor Course" className="background-image" />
              </div>
              <div className="premium-badge">INSTRUCTOR</div>
              <div className="card-content">
                <h3 className="course-title">BLS/CPR Instructor - Initial</h3>
                <p className="course-highlights">Become an AHA instructor • Teach BLS & HeartSaver • Blended learning</p>
                
                <div className="pricing-section">
                  <div className="pricing-box large">
                    <span className="price-label">Course Fee:</span>
                    <span className="price-value large">$549.00</span>
                  </div>
                </div>
                
                <div className="duration-badge">2-3 weeks</div>
                <div className="requirements-badge">Current BLS required</div>
                
                <button className="instructor-btn" onClick={() => window.open('/bls-instructor-initial', '_blank')}>REGISTER</button>
              </div>
            </div>
            )}

            {/* Instructor Renewal Card */}
            {shouldShowCourse('bls-instructor-renewal') && (
            <div className="instructor-card premium">
              <div className="card-background">
                <img src="https://i.ibb.co/Kct2yz5j/Whats-App-Image-2025-09-22-at-16-04-14-7f14413f.jpg" alt="BLS/CPR Instructor Course" className="background-image" />
              </div>
              <div className="premium-badge">RENEWAL</div>
              <div className="card-content">
                <h3 className="course-title">BLS/CPR Instructor - Renewal</h3>
                <p className="course-highlights">Maintain instructor status • Skills update • Administrative review</p>
                
                <div className="pricing-section">
                  <div className="pricing-box large">
                    <span className="price-label">Renewal Fee:</span>
                    <span className="price-value large">$349.00</span>
                  </div>
                </div>
                
                <div className="duration-badge">1 day</div>
                
                <button className="instructor-btn" onClick={() => window.open('/bls-instructor-renewal', '_blank')}>REGISTER</button>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Medical Training Programs */}
      <section className="medical-programs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Medical Training Programs</h2>
            <p className="section-subtitle">Professional healthcare career training with hands-on experience</p>
            <div className="accent-line"></div>
          </div>
          
          <div className="medical-grid">
            {/* CHHA Program - Available */}
            {shouldShowCourse('chha') && (
            <div className="medical-card available">
              <div className="card-background">
                <img src="https://i.ibb.co/d44Bjy5x/Program-Covers-images-0.jpg" alt="Certified Home Health Aide (CHHA) Program" className="background-image" />
              </div>
              <div className="availability-badge available">AVAILABLE NOW</div>
              <div className="card-content">
                <h3 className="course-title">Certified Home Health Aide (CHHA)</h3>
                <p className="course-highlights">2-week program • Hybrid learning • Job placement assistance</p>
                
                <div className="special-pricing">
                  <div className="special-price-box">
                    <span className="special-label">SPECIAL PRICE:</span>
                    <span className="special-price">$499</span>
                    <span className="original-price">(Was $649)</span>
                  </div>
                  <p className="urgency-text">Until October 31, 2025</p>
                </div>
                
                <div className="program-details">
                  <div className="duration-info">2 weeks (60hrs classroom + 16hrs clinical)</div>
                  <div className="prerequisites">18+ • High school diploma • Background check</div>
                </div>
                
                <button className="enroll-btn pulse" onClick={() => window.open('/chha-program', '_blank')}>ENROLL NOW</button>
              </div>
            </div>
            )}

            {/* Medical Assistant - Coming Soon */}
            {shouldShowCourse('ma') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="https://i.ibb.co/ynW08jQ6/Program-Covers-images-1.jpg" alt="Medical Assistant (MA) Program" className="background-image" />
              </div>
              <div className="availability-badge coming-soon">COMING SOON</div>
              <div className="card-content">
                <h3 className="course-title">Medical Assistant (MA)</h3>
                <p className="course-highlights">5-month program • 4 months online + 1 month clinical</p>
                <p className="certification-info">National certification prep (NHA CCMA)</p>
                
                <div className="program-details">
                  <div className="duration-info">5 months</div>
                  <div className="prerequisites">18+ • High school diploma • Entrance assessment</div>
                </div>
                
                <button className="notify-btn" onClick={() => window.open('/ma-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* CMA Program - Coming Soon */}
            {shouldShowCourse('cma') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="https://i.ibb.co/MxC7vpTy/Program-Covers-images-2.jpg" alt="Certified Medication Aide (CMA) Program" className="background-image" />
              </div>
              <div className="availability-badge coming-soon">COMING SOON</div>
              <div className="card-content">
                <h3 className="course-title">Certified Medication Aide (CMA)</h3>
                <p className="course-highlights">2-week program • Requires active CNA/CHHA/PCA</p>
                <p className="certification-info">Med administration in licensed facilities</p>
                
                <div className="program-details">
                  <div className="duration-info">2 weeks (48hrs online + 3 days hands-on)</div>
                </div>
                
                <button className="notify-btn" onClick={() => window.open('/cma-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* CNA Program - Coming Soon */}
            {shouldShowCourse('cna') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="https://i.ibb.co/QvHBqbNQ/Program-Covers-images-3.jpg" alt="Certified Nursing Assistant (CNA) Program" className="background-image" />
              </div>
              <div className="availability-badge coming-soon">COMING SOON</div>
              <div className="card-content">
                <h3 className="course-title">Certified Nurse Assistant (CNA)</h3>
                <p className="course-highlights">4-week program • Long-term care and hospitals</p>
                <p className="certification-info">State exam preparation included</p>
                
                <div className="program-details">
                  <div className="duration-info">4 weeks (50hrs classroom + 40hrs clinical)</div>
                </div>
                
                <button className="notify-btn" onClick={() => window.open('/cna-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* PCT Program - Coming Soon */}
            {shouldShowCourse('pct') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="https://i.ibb.co/GQw4ytVp/Program-Covers-images-4.jpg" alt="Patient Care Technician (PCT) Program" className="background-image" />
              </div>
              <div className="availability-badge coming-soon">COMING SOON</div>
              <div className="card-content">
                <h3 className="course-title">Patient Care Technician (PCT)</h3>
                <p className="course-highlights">5-month program • Advanced CNA skills + Phlebotomy + EKG</p>
                <p className="certification-info">Multiple national certifications eligible</p>
                
                <div className="program-details">
                  <div className="duration-info">5 months (300hrs classroom + 120hrs clinical)</div>
                </div>
                
                <button className="notify-btn" onClick={() => window.open('/pct-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* Phlebotomy - Coming Soon */}
            {shouldShowCourse('phlebotomy') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="https://i.ibb.co/qMbnhY2j/Program-Covers-images-5.jpg" alt="Phlebotomy Technician Program" className="background-image" />
              </div>
              <div className="availability-badge coming-soon">COMING SOON</div>
              <div className="card-content">
                <h3 className="course-title">Phlebotomy Technician</h3>
                <p className="course-highlights">2-month program • Blood collection specialist</p>
                <p className="certification-info">Hospital and lab employment</p>
                
                <div className="program-details">
                  <div className="duration-info">2 months (50hrs classroom + 120hrs clinical)</div>
                </div>
                
                <button className="notify-btn" onClick={() => window.open('/phlebotomy-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* EKG Technician - Coming Soon */}
            {shouldShowCourse('ekg') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="https://i.ibb.co/8DbSM0RD/Program-Covers-images-6.jpg" alt="EKG Technician Program" className="background-image" />
              </div>
              <div className="availability-badge coming-soon">COMING SOON</div>
              <div className="card-content">
                <h3 className="course-title">EKG Technician</h3>
                <p className="course-highlights">2-month program • Cardiac monitoring specialist</p>
                <p className="certification-info">Hospital and clinic employment</p>
                
                <div className="program-details">
                  <div className="duration-info">2 months (40hrs classroom + 100hrs clinical)</div>
                </div>
                
                <button className="notify-btn" onClick={() => window.open('/ekg-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* Pharmacy Tech - Coming Soon */}
            {shouldShowCourse('pharmacy') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="https://i.ibb.co/4RpYHTb8/Program-Covers-images-7.jpg" alt="Pharmacy Technician Program" className="background-image" />
              </div>
              <div className="availability-badge coming-soon">COMING SOON</div>
              <div className="card-content">
                <h3 className="course-title">Pharmacy Technician</h3>
                <p className="course-highlights">4-month program • Retail and hospital pharmacy</p>
                <p className="certification-info">National certification preparation</p>
                
                <div className="program-details">
                  <div className="duration-info">4 months (3 months online + 1 month clinical)</div>
                </div>
                
                <button className="notify-btn" onClick={() => window.open('/pharmacy-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="courses-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Healthcare Career?</h2>
            <p className="cta-subtitle">Get personalized guidance on choosing the right program</p>
            
            <div className="cta-buttons">
              <button className="cta-btn primary">REQUEST INFO</button>
              <button className="cta-btn secondary">SCHEDULE CONSULTATION</button>
            </div>
            
            <p className="cta-phone">Call us at <a href="tel:8482801169">848.280.1169</a> for immediate assistance</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Courses
