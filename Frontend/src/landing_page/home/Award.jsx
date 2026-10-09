import React from 'react'

export default function Award() {
  return (
    <div className='container ' >
      <div className="row">
        <div className="col-6 p-5">
          <img src="/media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in;</p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivaties</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
            <img src="media/images/pressLogos.png" style={{width: "90%"}} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
