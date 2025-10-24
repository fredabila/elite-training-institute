import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname
  const navigate = useNavigate()

  const navItems = ['HOME', 'COURSES', 'ABOUT US', 'BLOG', 'STUDENT PORTAL', 'CONTACT US']

  return (
    <>
      <header className="text-white w-full shadow-lg fixed top-0 left-0 right-0 z-50" style={{backgroundColor: '#0c1929'}}>
        <div className="w-full p-0 m-0">
          <div className="flex items-center justify-between h-24 w-full m-0 p-0 pr-6">
            <Link to="/" className="flex items-center group ml-0">
              <img 
                src="/elite-logo-white.png" 
                alt="Elite Training Institute Logo" 
                className="h-20 w-auto max-w-[200px] transition-transform group-hover:scale-105 ml-0 object-contain"
                style={{marginLeft: 0, paddingLeft: 0}}
              />
            </Link>
            
            {/* Desktop Contact Info */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a10.024 10.024 0 006.46 6.46l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm font-medium">848.280.1169</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
                <span className="text-sm font-medium">info@trainatelite.com</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
               <Link to="/" className={`text-sm font-medium transition-colors ${currentPath === '/' ? 'text-red-500' : 'text-white hover:text-red-500'}`} style={{color: currentPath === '/' ? '#ef4444' : '#ffffff'}}>HOME</Link>
               <Link to="/courses" className={`text-sm font-medium transition-colors ${currentPath === '/courses' ? 'text-red-500' : 'text-white hover:text-red-500'}`} style={{color: currentPath === '/courses' ? '#ef4444' : '#ffffff'}}>COURSES</Link>
               <Link to="/about" className={`text-sm font-medium transition-colors ${currentPath === '/about' ? 'text-red-500' : 'text-white hover:text-red-500'}`} style={{color: currentPath === '/about' ? '#ef4444' : '#ffffff'}}>ABOUT US</Link>
               <Link to="/blog" className={`text-sm font-medium transition-colors ${currentPath === '/blog' ? 'text-red-500' : 'text-white hover:text-red-500'}`} style={{color: currentPath === '/blog' ? '#ef4444' : '#ffffff'}}>BLOG</Link>
              <a 
                href="https://trainatelite.talentlms.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors text-white hover:text-red-500"
              >
                STUDENT PORTAL
              </a>
              <Link 
                to="/contact"
                className={`bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors ml-2 ${currentPath === '/contact' ? 'ring-2 ring-red-500' : ''}`}
                style={{
                  backgroundColor: currentPath === '/contact' ? '#dc2626 !important' : '#dc2626 !important',
                  boxShadow: currentPath === '/contact' ? '0 0 0 2px #ef4444 !important' : 'none !important'
                }}
              >
                Contact Us
              </Link>
            </nav>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden flex items-center px-3 py-2 border-2 border-red-500 rounded bg-transparent focus:outline-none"
              style={{
                borderColor: '#ef4444 !important',
                backgroundColor: 'transparent !important',
                color: '#ffffff !important'
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#ffffff !important'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
        </div>

          {/* Mobile menu slide down */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-24 left-0 w-full z-50 bg-gray-800 shadow-xl">
              <div className="flex flex-col items-center py-8 space-y-6">
                 <Link to="/" className={`text-lg font-bold transition-colors ${currentPath === '/' ? 'text-red-500' : 'text-white hover:text-red-500'}`} style={{color: currentPath === '/' ? '#ef4444' : '#ffffff'}} onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                 <Link to="/courses" className={`text-lg font-bold transition-colors ${currentPath === '/courses' ? 'text-red-500' : 'text-white hover:text-red-500'}`} style={{color: currentPath === '/courses' ? '#ef4444' : '#ffffff'}} onClick={() => setMobileMenuOpen(false)}>COURSES</Link>
                 <Link to="/about" className={`text-lg font-bold transition-colors ${currentPath === '/about' ? 'text-red-500' : 'text-white hover:text-red-500'}`} style={{color: currentPath === '/about' ? '#ef4444' : '#ffffff'}} onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
                 <Link to="/blog" className={`text-lg font-bold transition-colors ${currentPath === '/blog' ? 'text-red-500' : 'text-white hover:text-red-500'}`} style={{color: currentPath === '/blog' ? '#ef4444' : '#ffffff'}} onClick={() => setMobileMenuOpen(false)}>BLOG</Link>
                <a 
                  href="https://trainatelite.talentlms.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold transition-colors text-white hover:text-red-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  STUDENT PORTAL
                </a>
                <Link to="/contact" className={`bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors w-40 text-center ${currentPath === '/contact' ? 'ring-2 ring-red-500' : ''}`} style={{
                  backgroundColor: currentPath === '/contact' ? '#dc2626 !important' : '#dc2626 !important',
                  boxShadow: currentPath === '/contact' ? '0 0 0 2px #ef4444 !important' : 'none !important'
                }} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                
                {/* Mobile Contact Info */}
                <div className="flex flex-col items-center mt-6 space-y-2">
                  <div className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a10.024 10.024 0 006.46 6.46l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-base font-medium ">848.280.1169</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-base font-medium">info@trainatelite.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
      </header>
      
       {/* Mobile Contact Bar */}
       <div className="md:hidden bg-white border-b border-gray-200 fixed top-24 left-0 right-0 z-40">
         <div className="flex items-center justify-center py-2 px-4">
           <a 
             href="tel:18482801169" 
             className="flex items-center text-black hover:text-red-600 transition-colors"
           >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
               <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a10.024 10.024 0 006.46 6.46l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
             <span className="text-sm font-medium text-black">Call/Text: (848) 280-1169</span>
        </a>
      </div>
       </div>
      
    </>
  )
}

export default Header


