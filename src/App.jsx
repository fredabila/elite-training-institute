import Header from './Header'
import Footer from './Footer'
import BottomTabNav from './BottomTabNav'
import ScrollToTop from './ScrollToTop'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import StudentPortal from './pages/StudentPortal'
import Blog from './pages/Blog'
import BLSCourse from './pages/BLSCourse'
import ACLSCourse from './pages/ACLSCourse'
import PALSCourse from './pages/PALSCourse'
import HeartSaverCourse from './pages/HeartSaverCourse'
import InstructorCourse from './pages/InstructorCourse'
import InstructorRenewalCourse from './pages/InstructorRenewalCourse'
import CHHAProgram from './pages/CHHAProgram'
import CMAProgram from './pages/CMAProgram'
import MAProgram from './pages/MAProgram'
import CNAProgram from './pages/CNAProgram'
import PCTProgram from './pages/PCTProgram'
import PhlebotomyProgram from './pages/PhlebotomyProgram'
import EKGProgram from './pages/EKGProgram'
import PharmacyProgram from './pages/PharmacyProgram'
import './App.css'
import './Global.css'

function App() {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/bls-course" element={<BLSCourse />} />
          <Route path="/acls-course" element={<ACLSCourse />} />
          <Route path="/pals-course" element={<PALSCourse />} />
          <Route path="/heartsaver-course" element={<HeartSaverCourse />} />
          <Route path="/bls-instructor-initial" element={<InstructorCourse />} />
          <Route path="/bls-instructor-renewal" element={<InstructorRenewalCourse />} />
          <Route path="/chha-program" element={<CHHAProgram />} />
          <Route path="/cma-program" element={<CMAProgram />} />
          <Route path="/ma-program" element={<MAProgram />} />
          <Route path="/cna-program" element={<CNAProgram />} />
          <Route path="/pct-program" element={<PCTProgram />} />
          <Route path="/phlebotomy-program" element={<PhlebotomyProgram />} />
          <Route path="/ekg-program" element={<EKGProgram />} />
          <Route path="/pharmacy-program" element={<PharmacyProgram />} />
        </Routes>
      </main>
      <BottomTabNav />
      <Footer />
    </div>
  )
}

export default App
