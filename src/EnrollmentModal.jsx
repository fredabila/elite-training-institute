import { useState } from 'react'
import './EnrollmentModal.css'

function EnrollmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const courseOptions = [
    { id: 'chha', label: 'CHHA (Certified Home Health Aide)' }
  ]

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

  const handleCourseChange = (courseId) => {
    setFormData(prev => ({
      ...prev,
      course: courseId
    }))
    
    // Clear error when user selects a course
    if (errors.course) {
      setErrors(prev => ({
        ...prev,
        course: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.course) {
      newErrors.course = 'Please select a course'
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
    
    // Submit to Google Forms
    try {
      const formDataToSubmit = new FormData()
      formDataToSubmit.append('entry.693691713', formData.fullName)
      formDataToSubmit.append('entry.1651044243', formData.phone)
      formDataToSubmit.append('entry.1070821365', formData.email)
      
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfJ1DOPHuWeWLqdyNdcN8CKzEaOa8miZ4VCgIXYTVnwQ4MkQg/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit
      })
      
      setIsSubmitted(true)
      setFormData({ 
        fullName: '', 
        phone: '', 
        email: '', 
        course: '' 
      })
    } catch (error) {
      console.error('Form submission error:', error)
      // Even if there's an error, show success since Google Forms doesn't return response
      setIsSubmitted(true)
      setFormData({ 
        fullName: '', 
        phone: '', 
        email: '', 
        course: '' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Enroll in CHHA Program</h2>
          <button className="close-button" onClick={onClose}>
            <span className="close-icon">×</span>
          </button>
        </div>

        {isSubmitted ? (
          <div className="modal-success">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 className="success-title">Enrollment Submitted!</h3>
            <p className="success-message">
              Thank you for your enrollment. We'll contact you within 24 hours to confirm your program details and schedule.
            </p>
            <div className="success-actions">
              <a
                href="https://app.autobooks.co/pay/elite-training-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="pay-btn"
              >
                <span>PAY HERE</span>
                <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <div className="error-message show">{errors.fullName}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`form-input ${errors.phone ? 'error' : ''}`}
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <div className="error-message show">{errors.phone}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
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
              <label className="form-label">
                Select Course <span className="required">*</span>
              </label>
              <div className="courses-grid">
                {courseOptions.map((course) => (
                  <label key={course.id} className="course-radio">
                    <input
                      type="radio"
                      name="course"
                      value={course.id}
                      checked={formData.course === course.id}
                      onChange={() => handleCourseChange(course.id)}
                      className="radio-input"
                    />
                    <span className="radio-label">{course.label}</span>
                  </label>
                ))}
              </div>
              {errors.course && (
                <div className="error-message show">{errors.course}</div>
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
                  Submitting...
                </>
              ) : (
                'Submit Enrollment'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default EnrollmentModal
