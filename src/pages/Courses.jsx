import { useState, useMemo } from 'react'
import ContactModal from '../ContactModal'
import './Courses.css'

function Courses() {
  const [activeFilter, setActiveFilter] = useState('All Courses')
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

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
              <div className="card-info">
                <div className="price-info">
                  <span className="price-label">Initial: $95</span>
                    <span className="price-separator">|</span>
                  <span className="price-label">Renewal: $85</span>
                </div>
                <div className="certification-info">Same Day Certification</div>
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
              <div className="card-info">
                <div className="price-info">
                  <span className="price-label">Initial: $240</span>
                    <span className="price-separator">|</span>
                  <span className="price-label">Renewal: $200</span>
                </div>
                <div className="certification-info">Same Day Certification</div>
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
              <div className="card-info">
                <div className="price-info">
                  <span className="price-label">Initial: $240</span>
                    <span className="price-separator">|</span>
                  <span className="price-label">Renewal: $200</span>
                </div>
                <div className="certification-info">Same Day Certification</div>
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
              <div className="card-info">
                <div className="price-info">
                  <span className="price-label">Initial: $140</span>
                    <span className="price-separator">|</span>
                  <span className="price-label">Renewal: $120</span>
                </div>
                <div className="certification-info">Same Day Certification</div>
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
              <div className="card-info">
                <div className="price-info">
                  <span className="price-label">Course Fee: $549</span>
                </div>
                <div className="duration-info">Initial - 2 days</div>
                <button className="register-btn" onClick={() => window.open('/bls-instructor-initial', '_blank')}>REGISTER</button>
              </div>
            </div>
            )}

            {/* Instructor Renewal Card */}
            {shouldShowCourse('bls-instructor-renewal') && (
            <div className="instructor-card premium">
              <div className="card-background">
                <img src="https://i.ibb.co/Kct2yz5j/Whats-App-Image-2025-09-22-at-16-04-14-7f14413f.jpg" alt="BLS/CPR Instructor Course" className="background-image" />
              </div>
              <div className="card-info">
                <div className="price-info">
                  <span className="price-label">Renewal Fee: $349</span>
                </div>
                <div className="duration-info">Renewal - 4 hours</div>
                <button className="register-btn" onClick={() => window.open('/bls-instructor-renewal', '_blank')}>REGISTER</button>
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
              <div className="card-info">
                <div className="program-info">CHHA: 2 Weeks | Hybrid Learning</div>
                <div className="price-info chha-pricing">
                  <div className="price-row">
                    <span className="price-label">Regular: $649.00</span>
                  </div>
                  <div className="price-row">
                    <span className="price-label">Now: $499.00</span>
                    <span className="price-note">(Until October 31, 2025)</span>
                  </div>
                </div>
                <button className="register-btn" onClick={() => window.open('/chha-program', '_blank')}>ENROLL NOW</button>
              </div>
            </div>
            )}

            {/* Medical Assistant - Coming Soon */}
            {shouldShowCourse('ma') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="/MA.svg" alt="Medical Assistant (MA) Program" className="background-image" />
              </div>
              <div className="card-info">
                <div className="program-info">MA: 5 Months | Hybrid Learning</div>
                <button className="coming-soon-btn" onClick={() => window.open('/ma-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* CMA Program - Coming Soon */}
            {shouldShowCourse('cma') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="/CMA.svg" alt="Certified Medication Aide (CMA) Program" className="background-image" />
              </div>
              <div className="card-info">
                <div className="program-info">CMA: 2 Weeks | Hybrid Learning</div>
                <button className="coming-soon-btn" onClick={() => window.open('/cma-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* CNA Program - Coming Soon */}
            {shouldShowCourse('cna') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="/CNA.svg" alt="Certified Nursing Assistant (CNA) Program" className="background-image" />
              </div>
              <div className="card-info">
                <div className="program-info">CNA: 4 Weeks | Hybrid Learning</div>
                <button className="coming-soon-btn" onClick={() => window.open('/cna-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* PCT Program - Coming Soon */}
            {shouldShowCourse('pct') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="/PCT.svg" alt="Patient Care Technician (PCT) Program" className="background-image" />
              </div>
              <div className="card-info">
                <div className="program-info">PCT: 5 Months | Hybrid Learning</div>
                <button className="coming-soon-btn" onClick={() => window.open('/pct-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* Phlebotomy - Coming Soon */}
            {shouldShowCourse('phlebotomy') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="/Phlebotomy.svg" alt="Phlebotomy Technician Program" className="background-image" />
              </div>
              <div className="card-info">
                <div className="program-info">Phlebotomy: 2 Months | Hybrid Learning</div>
                <button className="coming-soon-btn" onClick={() => window.open('/phlebotomy-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* EKG Technician - Coming Soon */}
            {shouldShowCourse('ekg') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="/EKG.svg" alt="EKG Technician Program" className="background-image" />
              </div>
              <div className="card-info">
                <div className="program-info">EKG: 2 Months | Hybrid Learning</div>
                <button className="coming-soon-btn" onClick={() => window.open('/ekg-program', '_blank')}>COMING SOON</button>
              </div>
            </div>
            )}

            {/* Pharmacy Tech - Coming Soon */}
            {shouldShowCourse('pharmacy') && (
            <div className="medical-card coming-soon">
              <div className="card-background">
                <img src="/Pharmacy.svg" alt="Pharmacy Technician Program" className="background-image" />
              </div>
              <div className="card-info">
                <div className="program-info">Pharmacy: 4 Months | Hybrid Learning</div>
                <button className="coming-soon-btn" onClick={() => window.open('/pharmacy-program', '_blank')}>COMING SOON</button>
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
              <button className="cta-btn primary" onClick={openModal}>REQUEST INFO</button>
              <a href="tel:8482801169" className="cta-btn secondary">CALL US</a>
            </div>
            
            <p className="cta-phone">Call us at <a href="tel:8482801169">848.280.1169</a> for immediate assistance</p>
          </div>
        </div>
      </section>
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  )
}

export default Courses
