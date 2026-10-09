import React from 'react'

export default function Education() {
  return (
    <div className='container mt-5'>
      <div className="row ">
        <div className="col-6">
        <img src="/media/images/education.svg" style={{width: "80%"}} alt="" />
        </div>
        <div className="col-6">
          <h4 className='my-5'>Free and open market education</h4>
          <p className='my-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a className='fw-medium' style={{ textDecoration: "none" }} href="">Varsity <i class="fa-solid fa-arrow-right"></i> </a>
         
          <p className='my-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a className='fw-medium' style={{ textDecoration: "none" }} href="">TradingQ&A <i class="fa-solid fa-arrow-right"></i> </a>

        </div>
      </div>
    </div>
  )
}
