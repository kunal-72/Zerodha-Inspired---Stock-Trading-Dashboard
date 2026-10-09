import React from 'react'

export default function Stats() {
  return (
    <div className='container  p-3' >
      <div className="row p-3">
        <div className="col-6 p-5">
          <h4 className='mb-5' >Trust with confidence</h4>
          <h5>Customer-first always</h5>
          <p className='fs-6 text-muted fw-medium'>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          <h5>No spam or gimmicks</h5>
          <p className='fs-6 text-muted fw-medium '>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a style={{textDecoration:"none"}} href="">Our philosophies.</a></p>
          <h5>The Zerodha universe</h5>
          <p className='fs-6 text-muted fw-medium'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h5>Do better with money</h5>
          <p className='fs-6 text-muted fw-medium'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-6">
          <img src="/media/images/ecosystem.png" style={{ width: "100%" }} alt="" />
          <div className=' d-flex justify-content-center align-items-center gap-5 '>
            <a className='fw-medium' style={{textDecoration: "none"}} href="">Explore our products <i class="fa-solid fa-arrow-right"></i> </a>
            <a className='fw-medium' style={{textDecoration: "none"}} href="">Try Kite demo<i class="fa-solid fa-arrow-right"></i> </a>
          </div>
        </div>
      </div>
    </div>
  )
}
