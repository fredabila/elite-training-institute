import './PrivacyStatement.css'

function PrivacyStatement() {
  return (
    <main className="privacy-statement-page">
      <div className="container">
        <div className="policy-content">
          <h1 className="policy-title">Privacy Statement</h1>

          <p className="policy-text">
            Elite Training Institute respects your privacy and is committed to protecting the personal and educational information you provide. We comply with applicable federal and state privacy laws, including FERPA (Family Educational Rights and Privacy Act) and relevant New Jersey statutes.
          </p>

          <h2 className="section-title">Your Information</h2>
          <p className="policy-text">
            When you enroll or participate in our programs, we collect personal information such as your name, contact information, educational records, and certifications. We use this information to:
          </p>
          <ul className="policy-list">
            <li>Administer your enrollment, attendance, and certification programs</li>
            <li>Communicate with instructors, students, and regulatory bodies</li>
            <li>Ensure compliance with state and federal regulations</li>
            <li>Maintain program quality and continuous improvement</li>
          </ul>

          <h2 className="section-title">Your Rights</h2>
          <p className="policy-text">You have the right to:</p>
          <ul className="policy-list">
            <li>Access and review your educational records</li>
            <li>Request corrections to your records if they are inaccurate or incomplete</li>
            <li>Request restrictions on sharing your information, to the extent permitted by law</li>
            <li>Receive information on how your data is used and shared</li>
          </ul>

          <h2 className="section-title">How We Protect Your Information</h2>
          <p className="policy-text">
            Elite Training Institute uses physical, electronic, and administrative safeguards to protect your personal information. Only authorized personnel access your records for legitimate educational, regulatory, or administrative purposes.
          </p>

          <h2 className="section-title">Questions or Concerns</h2>
          <p className="policy-text">
            If you have questions about your privacy or believe your privacy rights have been violated, please contact:
          </p>
          <p className="policy-text"><strong>Elite Training Institute, Privacy Officer</strong></p>
          <p className="policy-text">2165 Morris Ave. St #15. Union, NJ. 07083</p>
          <p className="policy-text">Tel: 848-280-2532. Email: a.greene@manicarehomehealth.com</p>
        </div>
      </div>
    </main>
  )
}

export default PrivacyStatement
