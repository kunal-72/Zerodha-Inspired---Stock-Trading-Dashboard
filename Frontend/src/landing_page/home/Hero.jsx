import React from 'react'

export default function Hero() {
  return (
    <div className='container  p-4 mb-5' >
        <div className="row  text-center">
            <img src="./media/images/homeHero.png" alt="Hero Image" className='mb-5' />
            <h2 className='mt-5' >Invest in everything</h2>
            <p className='fs-5' >Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button type="button" class="btn btn-primary p-2 fs-5 fw-bold mb-5" style={{width: "17%", margin: "0 auto"}} >Sign up for free</button>
        </div>
        
    </div>
  )
}
