import './Blog.css'

function Blog() {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">Our Blog</h1>
            <p className="blog-hero-subtitle">
              Stay updated with the latest insights, news, and resources from Elite Training Institute
            </p>
            <div className="blog-hero-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {/* Coming Soon Card */}
            <div className="blog-coming-soon">
              <div className="coming-soon-card">
                <div className="coming-soon-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <h2 className="coming-soon-title">Coming Soon</h2>
                <p className="coming-soon-description">
                  We're working hard to bring you valuable content about healthcare education, 
                  career insights, industry news, and student success stories.
                </p>
                <div className="coming-soon-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      </svg>
                    </div>
                    <span>Career Guidance</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                      </svg>
                    </div>
                    <span>Student Stories</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                      </svg>
                    </div>
                    <span>Industry News</span>
                  </div>
                </div>
                <div className="coming-soon-cta">
                  <p className="cta-text">Want to be notified when we publish new content?</p>
                  <button className="cta-button">
                    <span>Notify Me</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="blog-newsletter">
              <div className="newsletter-card">
                <div className="newsletter-content">
                  <h3 className="newsletter-title">Stay in the Loop</h3>
                  <p className="newsletter-description">
                    Subscribe to our newsletter and be the first to know about new blog posts, 
                    course updates, and exclusive healthcare education resources.
                  </p>
                  <form className="newsletter-form">
                    <div className="form-group">
                      <input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="newsletter-input"
                        required
                      />
                      <button type="submit" className="newsletter-button">
                        Subscribe
                      </button>
                    </div>
                    <p className="newsletter-privacy">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
                <div className="newsletter-decoration">
                  <div className="decoration-circle"></div>
                  <div className="decoration-circle"></div>
                  <div className="decoration-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="blog-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Healthcare Career?</h2>
            <p className="cta-description">
              While you wait for our blog content, explore our comprehensive healthcare training programs 
              and take the first step toward your new career.
            </p>
            <div className="cta-buttons">
              <a href="/courses" className="cta-button-primary">
                View All Courses
              </a>
              <a href="/contact" className="cta-button-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
