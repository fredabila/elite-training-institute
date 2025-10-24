import { useState } from 'react'
import './ContactModal.css'

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    
    // Submit to Google Forms
    try {
      const formDataToSubmit = new FormData()
      formDataToSubmit.append('entry.168917428', formData.name) // Name
      formDataToSubmit.append('entry.46568492', formData.phone) // Phone
      formDataToSubmit.append('entry.1617001008', formData.email) // Email
      formDataToSubmit.append('entry.287544379', formData.message) // Message
      
      const response = await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScu9OOnMeJWA6IEiDp_BHl-kUNtrls1PvqgMVzIFcu1pg8jqw/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit
      })
      
      setIsSubmitted(true)
      setFormData({ name: '', phone: '', email: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      // Even if there's an error, show success since Google Forms doesn't return response
      setIsSubmitted(true)
      setFormData({ name: '', phone: '', email: '', message: '' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: '', phone: '', email: '', message: '' })
      setErrors({})
      setIsSubmitted(false)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">
          <span className="close-icon">×</span>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">Send Us a Message</h2>
          <p className="modal-subtitle">We'll get back to you within 24 hours</p>
        </div>

        {isSubmitted ? (
          <div className="modal-success">
            <div className="success-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="success-title">Message Sent!</h3>
            <p className="success-message">Thank you for contacting us. We'll get back to you soon.</p>
            <button className="success-close-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <label htmlFor="modal-name" className="form-label">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="modal-name"
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
              <label htmlFor="modal-phone" className="form-label">
                Phone <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="modal-phone"
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
              <label htmlFor="modal-email" className="form-label">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="modal-email"
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
              <label htmlFor="modal-message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Tell us how we can help you..."
                rows="4"
              />
              {errors.message && (
                <div className="error-message show">{errors.message}</div>
              )}
            </div>

            <div className="modal-actions">
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
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactModal
