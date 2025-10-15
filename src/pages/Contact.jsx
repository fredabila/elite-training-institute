import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqData = [
    {
      question: "When does the next CHHA class start?",
      answer: "Contact us for more details on the next class schedule. Contact us to reserve your seat!"
    },
    {
      question: "How long does the CHHA program take to complete?",
      answer: "Our CHHA program can be completed in as little as 2 weeks, depending on the class schedule and your attendance."
    },
    {
      question: "Do you offer job placement assistance to graduates who have completed a course?",
      answer: "Yes, we offer job placement assistance through our affiliated home care agency. Graduates of our CHHA program are given priority for employment opportunities and are guided through the application and onboarding process."
    },
    {
      question: "How do I register for a course?",
      answer: "You can register online through our website, contact us via phone or WhatsApp, or visit our office during open hours to sign up in person."
    },
    {
      question: "Can I renew my CPR, ACLS, or PALS certification with you?",
      answer: "Yes! We offer renewal courses for CPR, BLS, ACLS, Heart Saver First Aid, and PALS. Contact us to check availability and schedule your renewal session."
    },
    {
      question: "Do you offer group or corporate training?",
      answer: "Yes! We offer group rates and on-site training for businesses and healthcare facilities."
    },
    {
      question: "Are your certifications AHA or NJ Board approved?",
      answer: "Absolutely. All CPR certifications are American Heart Association (AHA) approved. The CHHA course is New Jersey Board of Nursing approved under our affiliate Homecare Agency, \"Manicare Home Health\". Verify <a href='https://newjersey.mylicense.com/verification/Search.aspx?facility=Y' target='_blank' rel='noopener noreferrer' style='color: #104aa4; text-decoration: underline; font-weight: 600;'>HERE</a>"
    },
    {
      question: "Are payment plans available for courses?",
      answer: "Yes, we offer flexible payment plans for many of our certification programs to make training more accessible."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({ name: '', phone: '', email: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="hero-title">We are Just a Call Away</h1>
          <p className="hero-subtitle">Get free academic advice</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column - Contact Details */}
            <div className="contact-details">
              {/* Address Card */}
              <div className="contact-card">
                <div className="card-header">
                  <div className="card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="card-title">Address</h3>
                </div>
                <a 
                  href="https://www.google.com/maps/search/2165+Morris+Ave+Suite+15+Union+NJ+07083" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="address-link"
                >
                  <p className="card-content">
                    2165 Morris Ave, Suite 15<br />
                    Union, NJ 07083
                  </p>
                </a>
              </div>

              {/* Phone Card */}
              <div className="contact-card">
                <div className="card-header">
                  <div className="card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="card-title">Phone</h3>
                </div>
                <p className="card-content">
                  <a href="tel:8482801169" className="contact-link">
                    848.280.1169
                  </a>
                </p>
              </div>

              {/* Email Card */}
              <div className="contact-card">
                <div className="card-header">
                  <div className="card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="card-title">Email</h3>
                </div>
                <p className="card-content">
                  <a href="mailto:info@trainatelite.com" className="contact-link">
                    info@trainatelite.com
                  </a>
                </p>
              </div>

              {/* Office Hours Card */}
              <div className="contact-card office-hours-card">
                <div className="card-header">
                  <div className="card-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="card-title">Office Hours</h3>
                </div>
                <ul className="hours-list">
                  <li className="hours-item">
                    <svg className="clock-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="day">Tuesday:</span>
                    <span className="time">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="hours-item">
                    <svg className="clock-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="day">Friday:</span>
                    <span className="time">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="hours-item">
                    <svg className="clock-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="day">Saturday:</span>
                    <span className="time">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="hours-item special">
                    <svg className="clock-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="day">24/7 On-call support</span>
                    <span className="time">Always available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Inquiry Form */}
            <div className="inquiry-form">
              <div className="form-header">
                <h2 className="form-title">Send us a message</h2>
                <p className="form-subtitle">We'll get back to you within 24 hours</p>
              </div>

              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div className="card-icon" style={{ margin: '0 auto 20px', background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 style={{ color: '#22c55e', marginBottom: '10px' }}>Message Sent!</h3>
                  <p style={{ color: '#666' }}>Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <div className="error-message show">{errors.name}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && (
                      <div className="error-message show">{errors.phone}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <div className="error-message show">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && (
                      <div className="error-message show">{errors.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <h2 className="map-title">Find Us</h2>
            <p className="map-subtitle">Visit our training center in Union, New Jersey</p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1234567890123!2d-74.2634!3d40.6975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b8c8c8c8c8c8%3A0x1234567890abcdef!2s2165%20Morris%20Ave%20Suite%2015%2C%20Union%2C%20NJ%2007083!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite Training Institute Location"
            ></iframe>
            <div className="map-info">
              <div className="address-info">
                <h3>Elite Training Institute</h3>
                <a 
                  href="https://www.google.com/maps/search/2165+Morris+Ave+Suite+15+Union+NJ+07083" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="address-link"
                >
                  <p>2165 Morris Ave, Suite 15<br />Union, NJ 07083</p>
                </a>
                <a href="https://maps.google.com/?q=2165+Morris+Ave+Suite+15+Union+NJ+07083" target="_blank" rel="noopener noreferrer" className="directions-btn">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2 className="faq-title">FAQ</h2>
            <p className="faq-subtitle">Have a question?</p>
          </div>
          
          <div className="faq-accordion">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${openFAQ === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <svg 
                    className={`faq-icon ${openFAQ === index ? 'rotated' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
                </button>
                {openFAQ === index && <div className="faq-divider"></div>}
                <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                  <div className="faq-answer-content">
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
