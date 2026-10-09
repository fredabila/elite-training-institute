// Pages included in the site search. Keywords cover common terms people type
// that don't appear in the page title.
const searchIndex = [
  { title: 'Home', path: '/', section: 'Pages', description: 'Elite School of Health Professions in Union, NJ.', keywords: 'home elite school health professions union nj' },
  { title: 'All Courses & Programs', path: '/courses', section: 'Programs', description: 'Browse every AHA course and healthcare career program.', keywords: 'courses catalog programs classes training certification schedule' },

  { title: 'Basic Life Support (BLS)', path: '/bls-course', section: 'AHA Courses', description: 'AHA BLS provider certification — same-day certification.', keywords: 'bls cpr basic life support aha american heart association healthcare provider aed' },
  { title: 'Advanced Cardiovascular Life Support (ACLS)', path: '/acls-course', section: 'AHA Courses', description: 'AHA ACLS provider certification and renewal.', keywords: 'acls advanced cardiovascular life support aha cardiac arrest renewal' },
  { title: 'Pediatric Advanced Life Support (PALS)', path: '/pals-course', section: 'AHA Courses', description: 'AHA PALS provider certification and renewal.', keywords: 'pals pediatric advanced life support aha children infant renewal' },
  { title: 'HeartSaver First Aid CPR AED', path: '/heartsaver-course', section: 'AHA Courses', description: 'First aid, CPR and AED training for the workplace and community.', keywords: 'heartsaver first aid cpr aed aha workplace community' },
  { title: 'BLS/CPR Instructor – Initial', path: '/bls-instructor-initial', section: 'AHA Courses', description: 'Become an AHA BLS/CPR instructor.', keywords: 'bls cpr instructor initial teach aha instructor essentials' },
  { title: 'BLS/CPR Instructor – Renewal', path: '/bls-instructor-renewal', section: 'AHA Courses', description: 'Renew your AHA BLS/CPR instructor status.', keywords: 'bls cpr instructor renewal recertify aha' },

  { title: 'Certified Home Health Aide (CHHA)', path: '/chha-program', section: 'Career Programs', description: '3-week hybrid program offered through Manicare Home Health.', keywords: 'chha hha home health aide homemaker manicare hybrid nj board of nursing apply enroll' },
  { title: 'Medical Assistant (MA)', path: '/ma-program', section: 'Career Programs', description: 'Medical assistant training — coming soon.', keywords: 'ma medical assistant clinical administrative coming soon' },
  { title: 'Certified Medication Aide (CMA)', path: '/cma-program', section: 'Career Programs', description: 'Medication aide training — coming soon.', keywords: 'cma medication aide medication administration coming soon' },
  { title: 'Certified Nurse Assistant (CNA)', path: '/cna-program', section: 'Career Programs', description: 'Nurse assistant training — coming soon.', keywords: 'cna nurse nursing assistant nurse aide coming soon' },
  { title: 'Patient Care Technician (PCT)', path: '/pct-program', section: 'Career Programs', description: 'Patient care technician training — coming soon.', keywords: 'pct patient care technician coming soon' },
  { title: 'Phlebotomy Technician', path: '/phlebotomy-program', section: 'Career Programs', description: 'Phlebotomy training — coming soon.', keywords: 'phlebotomy pbt blood draw venipuncture technician coming soon' },
  { title: 'EKG Technician', path: '/ekg-program', section: 'Career Programs', description: 'EKG technician training — coming soon.', keywords: 'ekg ecg electrocardiogram cardiac technician coming soon' },
  { title: 'Pharmacy Technician', path: '/pharmacy-program', section: 'Career Programs', description: 'Pharmacy technician training — coming soon.', keywords: 'pharmacy technician pharm tech medications coming soon' },

  { title: 'About Elite', path: '/about', section: 'About', description: 'Our mission, team, accreditations and training center.', keywords: 'about mission vision team staff accreditation approvals location hours' },
  { title: 'Contact Us', path: '/contact', section: 'About', description: 'Call, email or visit our training center. FAQs.', keywords: 'contact phone email address directions map faq questions hours admissions' },
  { title: 'Blog & News', path: '/blog', section: 'About', description: 'News, career guidance and student stories.', keywords: 'blog news articles updates stories' },
  { title: 'Donations & Giving', path: '/giving', section: 'About', description: 'Support students at Elite School of Health Professions.', keywords: 'donate donation giving give support gift sponsor' },
  { title: 'MyElite Student Portal', path: '/student-portal', section: 'Students', description: 'Sign in to MyElite for your courses and materials.', keywords: 'myelite student portal login sign in lms online learning' },

  { title: 'Student Rights & Responsibilities', path: '/student-rights-responsibilities', section: 'Policies', description: 'Your rights and responsibilities as a student.', keywords: 'student rights responsibilities grievance complaints policy' },
  { title: 'Refund & Cancellation Policy', path: '/refund-cancellation-policy', section: 'Policies', description: 'Refunds, cancellations, withdrawals and transfers.', keywords: 'refund cancellation withdrawal transfer reschedule policy money back' },
  { title: 'Non-Discrimination Statement', path: '/non-discrimination-statement', section: 'Policies', description: 'Our commitment to equal opportunity.', keywords: 'non-discrimination equal opportunity policy' },
  { title: 'Privacy Policy', path: '/privacy-policy', section: 'Policies', description: 'How we collect and use your information.', keywords: 'privacy policy data information cookies' },
  { title: 'Privacy Statement', path: '/privacy-statement', section: 'Policies', description: 'Our privacy statement.', keywords: 'privacy statement' },
  { title: 'Terms & Conditions', path: '/terms-and-conditions', section: 'Policies', description: 'Terms of using our website and services.', keywords: 'terms conditions legal' },
]

// Every query word must match somewhere; title matches rank first.
export function searchSite(query) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  if (!words.length) return []
  return searchIndex
    .map((item) => {
      const title = item.title.toLowerCase()
      const haystack = `${title} ${item.description.toLowerCase()} ${item.keywords} ${item.section.toLowerCase()}`
      if (!words.every((w) => haystack.includes(w))) return null
      const score = words.reduce((sum, w) => sum + (title.includes(w) ? 3 : 0) + (item.keywords.includes(w) ? 1 : 0), 0)
      return { ...item, score }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
}

export const popularSearches = ['CPR', 'BLS', 'CHHA', 'ACLS', 'Refund policy']

export default searchIndex
