import { Link } from 'react-router-dom'
import './CourseGrid.css'

const courses = [
  { key: 'bls', title: 'Basic Life Support (BLS) Course', type: 'aha', cta: 'REGISTER', route: '/bls-course' },
  { key: 'acls', title: 'Advanced Cardiovascular Life Support (ACLS)', type: 'aha', cta: 'REGISTER', route: '/acls-course' },
  { key: 'pals', title: 'Pediatric Advanced Life Support (PALS)', type: 'aha', cta: 'REGISTER', route: '/pals-course' },
  { key: 'heartsaver', title: 'Heart Saver First Aid CPR AED', type: 'aha', cta: 'REGISTER', route: '/heartsaver-course' },
  { key: 'instructor', title: 'BLS/CPR Instructor', type: 'aha', cta: 'REGISTER', route: '/bls-instructor-initial' },
  { key: 'instructor-renewal', title: 'BLS/CPR Instructor Renewal', type: 'aha', cta: 'REGISTER', route: '/bls-instructor-renewal' },
  { key: 'chha', title: 'Certified Home Health Aide (CHHA)', type: 'chha', cta: 'ENROLL NOW', pulse: true, route: '/chha-program' },
  { key: 'ma', title: 'Medical Assistant', type: 'soon', cta: 'COMING SOON', badge: 'Launching soon', route: '/ma-program' },
  { key: 'cma', title: 'Certified Medication Aide (CMA)', type: 'soon', cta: 'COMING SOON', badge: 'Launching soon', route: '/cma-program' },
  { key: 'cna', title: 'Certified Nursing Assistant (CNA)', type: 'soon', cta: 'COMING SOON', badge: 'Launching soon', route: '/cna-program' },
  { key: 'pct', title: 'Patient Care Technician (PCT)', type: 'soon', cta: 'COMING SOON', badge: 'Launching soon', route: '/pct-program' },
  { key: 'phlebotomy', title: 'Phlebotomy', type: 'soon', cta: 'COMING SOON', badge: 'Launching soon', route: '/phlebotomy-program' },
  { key: 'ekg', title: 'EKG Technician', type: 'soon', cta: 'COMING SOON', badge: 'Launching soon', route: '/ekg-program' },
]

function Icon({ type }) {
  const style = { width: 100, height: 60, display: 'block', margin: '0 auto 12px auto' }
  switch (type) {
    case 'aha':
      return (
        <img
          style={style}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/American_Heart_Association_Logo.svg/320px-American_Heart_Association_Logo.svg.png"
          alt="American Heart Association"
        />
      )
    case 'chha':
      return (
        <img
          style={style}
          src="https://cdn-icons-png.flaticon.com/512/4320/4320381.png"
          alt="Healthcare Aide"
        />
      )
    case 'soon':
      return (
        <img
          style={style}
          src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
          alt="Medical Icon"
        />
      )
    default:
      return null
  }
}

function CourseGrid() {
  return (
    <section className="course-grid">
      <div className="course-grid__container">
        <header className="course-grid__header">
          <h2>Quick Course Search</h2>
          <span className="accent" />
        </header>

        <div className="grid">
          {courses.map((c) => (
            <article key={c.key} className={`card ${c.type}`}>
              {c.badge && <span className="badge">{c.badge}</span>}
              
              {/* Course Background Image */}
              {c.key === 'bls' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/0V1MYzK8/Whats-App-Image-2025-09-22-at-16-04-14-25058794.jpg" 
                    alt="BLS Course" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'acls' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/1fPrG6Mb/Whats-App-Image-2025-09-22-at-16-04-59-10d96c26.jpg" 
                    alt="ACLS Course" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'pals' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/JRrpDyWw/Whats-App-Image-2025-09-22-at-16-04-14-94a2ff36.jpg" 
                    alt="PALS Course" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'heartsaver' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/fY5g2xwK/Whats-App-Image-2025-09-22-at-16-04-14-f0697797.jpg" 
                    alt="HeartSaver Course" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'instructor' && (
                <div className="card-background">
                  <img 
                    src="/bls-instructor-initial.png" 
                    alt="BLS/CPR Instructor Course" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'instructor-renewal' && (
                <div className="card-background">
                  <img 
                    src="/bls-instructor-renewal.png" 
                    alt="BLS/CPR Instructor Renewal Course" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'chha' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/d44Bjy5x/Program-Covers-images-0.jpg" 
                    alt="Certified Home Health Aide (CHHA) Program" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'ma' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/ynW08jQ6/Program-Covers-images-1.jpg" 
                    alt="Medical Assistant (MA) Program" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'cma' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/MxC7vpTy/Program-Covers-images-2.jpg" 
                    alt="Certified Medication Aide (CMA) Program" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'cna' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/QvHBqbNQ/Program-Covers-images-3.jpg" 
                    alt="Certified Nursing Assistant (CNA) Program" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'pct' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/GQw4ytVp/Program-Covers-images-4.jpg" 
                    alt="Patient Care Technician (PCT) Program" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'phlebotomy' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/qMbnhY2j/Program-Covers-images-5.jpg" 
                    alt="Phlebotomy Technician Program" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'ekg' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/8DbSM0RD/Program-Covers-images-6.jpg" 
                    alt="EKG Technician Program" 
                    className="background-image"
                  />
                </div>
              )}
              {c.key === 'pharmacy' && (
                <div className="card-background">
                  <img 
                    src="https://i.ibb.co/4RpYHTb8/Program-Covers-images-7.jpg" 
                    alt="Pharmacy Technician Program" 
                    className="background-image"
                  />
                </div>
              )}
              
              {/* Default background for other courses */}
              {!['bls', 'acls', 'pals', 'heartsaver', 'instructor', 'instructor-renewal', 'chha', 'ma', 'cma', 'cna', 'pct', 'phlebotomy', 'ekg', 'pharmacy'].includes(c.key) && (
                <div className="card-background default">
                  <Icon type={c.type} courseKey={c.key} />
                </div>
              )}
              
              {/* Glass Container with Content */}
              <div className="glass-container">
                {c.type === 'soon' ? (
              <button
                    className={`btn btn--disabled`}
                    disabled={true}
              >
                {c.cta}
              </button>
                ) : (
                  <Link
                    to={c.route}
                    className={`btn btn--primary ${c.pulse ? 'btn--pulse' : ''}`}
                  >
                    {c.cta}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseGrid


