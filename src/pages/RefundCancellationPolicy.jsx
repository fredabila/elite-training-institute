import './RefundCancellationPolicy.css'

function RefundCancellationPolicy() {
  return (
    <main className="refund-cancellation-page">
      <div className="container">
        <div className="policy-content">
          <h1 className="policy-title">Refund & Cancellation Policy</h1>
          <p className="effective-date">Effective Date: 09/01/2025</p>

          <p className="policy-intro">
            At Elite Training Institute, we strive to provide high-quality training programs and a smooth enrollment process. To ensure fairness to all students, please review our refund and cancellation policies carefully before registering.
          </p>

          <h2 className="section-title">American Heart Association (AHA) Courses</h2>
          <p className="policy-text">AHA courses include CPR, BLS, ACLS, PALS, and Instructor-level training.</p>

          <h3 className="subsection-title">Cancellations & Rescheduling:</h3>
          <ul className="policy-list">
            <li><strong>72-Hour Notice Required:</strong> Students must notify us at least 72 hours before the scheduled class to cancel or reschedule without penalty.</li>
            <li><strong>Less Than 72 Hours Notice:</strong> No refunds will be issued for cancellations made within 72 hours of the course start time. Students may reschedule once for a $25 administrative fee.</li>
            <li><strong>No-Show Policy:</strong> Students who do not attend the scheduled class and fail to provide notice will forfeit the full course fee and must re-register at full price.</li>
          </ul>

          <h3 className="subsection-title">Refunds:</h3>
          <ul className="policy-list">
            <li>Refunds are processed within 7–10 business days after approval.</li>
            <li>Digital course keys (for online components) are non-refundable once issued.</li>
          </ul>

          <h2 className="section-title">Medical Training Programs (CHHA, CMA, CNA, etc.)</h2>

          <h3 className="subsection-title">Registration Fee:</h3>
          <ul className="policy-list">
            <li>A non-refundable registration fee is required to secure a seat in any program.</li>
          </ul>

          <h3 className="subsection-title">Cancellations:</h3>
          <ul className="policy-list">
            <li><strong>Before Class Begins:</strong> Students who cancel at least 5 business days before the start date are eligible for a refund of tuition paid (excluding the registration fee).</li>
            <li><strong>After Class Begins:</strong> Students who withdraw within the first 3 days of class will receive a 50% refund.</li>
            <li><strong>No refund will be issued after the third day of class.</strong></li>
          </ul>

          <h3 className="subsection-title">Withdrawals & Transfers:</h3>
          <ul className="policy-list">
            <li>Students may request to transfer to a future session before attending the first class, subject to seat availability and a $50 administrative transfer fee.</li>
            <li>Failure to attend does not constitute official withdrawal and may result in forfeiture of all fees.</li>
          </ul>

          <h2 className="section-title">Refund Processing</h2>
          <p className="policy-text">
            Approved refunds will be processed within [7–14 business days] back to the original payment method.
          </p>

          <h2 className="section-title">Non-Refundable Fees</h2>
          <p className="policy-text">
            Certain administrative or registration fees may be non-refundable.
          </p>

          <h2 className="section-title">General Notes</h2>
          <ul className="policy-list">
            <li>All refund requests must be submitted in writing (email or in person).</li>
            <li>Refunds are issued using the original payment method.</li>
            <li>Elite Training Institute reserves the right to cancel or reschedule classes due to low enrollment, inclement weather, or unforeseen circumstances. In such cases, students may choose to transfer to another class or receive a full refund.</li>
          </ul>

          <h2 className="section-title">Contact Us</h2>
          <p className="policy-text"><strong>Elite Training Institute</strong></p>
          <p className="policy-text">Email: info@trainatelite.com</p>
          <p className="policy-text">Phone: (848)-280-1169</p>
        </div>
      </div>
    </main>
  )
}

export default RefundCancellationPolicy
