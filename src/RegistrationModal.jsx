import { useState } from 'react'
import './RegistrationModal.css'

function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    phone: '',
    email: '',
    courses: []
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const courseOptions = [
    { id: 'bls-initial', label: 'BLS Initial' },
    { id: 'bls-renewal', label: 'BLS Renewal' },
    { id: 'acls-initial', label: 'ACLS Initial' },
    { id: 'acls-renewal', label: 'ACLS Renewal' },
    { id: 'pals-initial', label: 'PALS Initial' },
    { id: 'pals-renewal', label: 'PALS Renewal' },
    { id: 'heartsaver-initial', label: 'Heartsaver First Aid Initial' },
    { id: 'heartsaver-renewal', label: 'Heartsaver First Aid Renewal' },
    { id: 'bls-instructor-initial', label: 'BLS Instructor Initial' },
    { id: 'bls-instructor-renewal', label: 'BLS Instructor Renewal' }
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
      courses: prev.courses.includes(courseId)
        ? prev.courses.filter(id => id !== courseId)
        : [...prev.courses, courseId]
    }))
    
    // Clear error when user selects a course
    if (errors.courses) {
      setErrors(prev => ({
        ...prev,
        courses: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required'
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
    
    if (formData.courses.length === 0) {
      newErrors.courses = 'Please select at least one course'
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
      formDataToSubmit.append('entry.747551509', formData.firstName) // First Name
      formDataToSubmit.append('entry.121062574', formData.middleInitial) // Middle Initial
      formDataToSubmit.append('entry.1797656917', formData.lastName) // Last Name
      formDataToSubmit.append('entry.8789594', formData.phone) // Phone Number
      formDataToSubmit.append('entry.1334923959', formData.email) // Email Address
      
      // Add selected courses as checkboxes
      formData.courses.forEach(courseId => {
        const courseLabel = courseOptions.find(course => course.id === courseId)?.label
        if (courseLabel) {
          formDataToSubmit.append('entry.575908799', courseLabel)
        }
      })
      
      const response = await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSdInESAtlxTik-p33WBIRpuW-GIa3XQlKtuURtXmDdEv8hQpQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit
      })
      
      setIsSubmitted(true)
      setFormData({ 
        firstName: '', 
        middleInitial: '', 
        lastName: '', 
        phone: '', 
        email: '', 
        courses: [] 
      })
    } catch (error) {
      console.error('Form submission error:', error)
      // Even if there's an error, show success since Google Forms doesn't return response
      setIsSubmitted(true)
      setFormData({ 
        firstName: '', 
        middleInitial: '', 
        lastName: '', 
        phone: '', 
        email: '', 
        courses: [] 
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
          <h2 className="modal-title">Register for AHA Courses</h2>
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
            <h3 className="success-title">Registration Submitted!</h3>
            <p className="success-message">
              Thank you for your registration. We'll contact you within 24 hours to confirm your course selection and schedule.
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
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.firstName ? 'error' : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <div className="error-message show">{errors.firstName}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="middleInitial" className="form-label">
                  Middle Initial
                </label>
                <input
                  type="text"
                  id="middleInitial"
                  name="middleInitial"
                  value={formData.middleInitial}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="M.I."
                  maxLength="1"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.lastName ? 'error' : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <div className="error-message show">{errors.lastName}</div>
                )}
              </div>
            </div>

            <div className="form-row">
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
            </div>

            <div className="form-group">
              <label className="form-label">
                Courses (You May Select More Than One) <span className="required">*</span>
              </label>
              <div className="courses-grid">
                {courseOptions.map((course) => (
                  <label key={course.id} className="course-checkbox">
                    <input
                      type="checkbox"
                      checked={formData.courses.includes(course.id)}
                      onChange={() => handleCourseChange(course.id)}
                      className="checkbox-input"
                    />
                    <span className="checkbox-label">{course.label}</span>
                  </label>
                ))}
              </div>
              {errors.courses && (
                <div className="error-message show">{errors.courses}</div>
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
                'Submit Registration'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default RegistrationModal
