import { ArrowRight, LogIn, Phone } from 'lucide-react'
import './StudentPortal.css'

const PORTAL_URL = 'https://trainatelite.talentlms.com/'

function StudentPortal() {
  return (
    <main className="student-portal-page">
      <div className="portal-card">
        <img src="/elite-crest-green.png" alt="" className="portal-crest" />
        <h1 className="portal-title">Student Portal</h1>
        <p className="portal-text">
          Access your courses, learning materials, and progress in our online learning platform.
        </p>
        <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="portal-button">
          <LogIn size={18} aria-hidden="true" />
          Sign in to the Student Portal
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
