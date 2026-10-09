import { ArrowRight, LogIn, Phone } from 'lucide-react'
import { MYELITE_URL } from '../siteLinks'
import './StudentPortal.css'

function StudentPortal() {
  return (
    <main className="student-portal-page">
      <div className="portal-card">
        <img src="/myelite-logo.png" alt="MyElite" className="portal-logo" />
        <h1 className="portal-title">Welcome to MyElite</h1>
        <p className="portal-text">
          Access your courses, learning materials, and progress in MyElite, our student portal.
        </p>
        <a href={MYELITE_URL} target="_blank" rel="noopener noreferrer" className="portal-button">
          <LogIn size={18} aria-hidden="true" />
          Go to MyElite
          <ArrowRight size={18} aria-hidden="true" />
        </a>
        <p className="portal-help">
          Trouble signing in?{' '}
          <a href="tel:18482801169">
            <Phone size={14} aria-hidden="true" /> (848) 280-1169
          </a>
        </p>
      </div>
    </main>
  )
}

export default StudentPortal
