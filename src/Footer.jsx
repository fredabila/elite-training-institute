import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <a href="/" className="footer-logo-link">
                  <img src="/elite-logo-white.png" alt="Elite Training Institute" className="footer-logo-image" />
                </a>
              </div>
              <p className="company-description">
                Leading provider of healthcare education, recognized for excellence in training, 
                student success, and commitment to improving community health.
              </p>
            </div>

            {/* Contact Information */}
            <div className="footer-section">
              <h4 className="footer-title">Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <a 
                      href="https://www.google.com/maps/search/2165+Morris+Ave+Suite+15+Union+NJ+07083" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="address-link"
                    >
                      <span>2165 Morris Ave, Suite 15</span>
                      <span>Union, NJ 07083</span>
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <a href="tel:8482801169" className="contact-link">848.280.1169</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <a href="mailto:info@trainatelite.com" className="contact-link">
                      info@trainatelite.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="footer-section">
              <h4 className="footer-title">Office Hours</h4>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">Tuesday</span>
                  <span className="time">9:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Thursday</span>
                  <span className="time">9:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Friday</span>
                  <span className="time">9:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-item special">
                  <span className="day">On-call Support</span>
                  <span className="time">24/7</span>
                </div>
              </div>
            </div>

            {/* Social Media & Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Follow Us</h4>
              <div className="social-links">
                <a 
                  href="https://web.facebook.com/profile.php?id=61577615826915&mibextid=wwXIfr&rdid=0oGpVXfW70LZrU5p&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1CDmHi4TbU%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  aria-label="Follow us on Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                <a 
                  href="https://www.linkedin.com/company/elite-training-institue/about/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="https://www.instagram.com/elite.training.institute/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                <a 
                  href="https://www.tiktok.com/@elite.training.institute?_t=ZP-90AsPvOUOT8&_r=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link tiktok"
                  aria-label="Follow us on TikTok"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>

              <div className="quick-links">
                <h5 className="quick-links-title">Quick Links</h5>
                <ul className="links-list">
                  <li><a href="/" className="footer-link">Home</a></li>
                  <li><a href="/courses" className="footer-link">Courses</a></li>
                  <li><a href="/about" className="footer-link">About</a></li>
                  <li><a href="/contact" className="footer-link">Contact</a></li>
                  <li><a href="/student-portal" className="footer-link">Student Portal</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 Elite Training Institute. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="/terms" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
