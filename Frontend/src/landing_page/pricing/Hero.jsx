import React from 'react'

export default function Hero() {
    return (
        <div className="container">
            <div className="row text-center p-4 mt-5 border-bottom">
                <h3>Charges</h3>
                <h5 className='text-muted mt-3 fs-5'>List of all charges and taxes</h5>
            </div>
            <div className="row p-5  text-center fw-medium">
                <div className="col-4 p-5 text-muted">
                    <img src="/media/images/pricingEquity.svg" alt="" />
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE) ,are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5 text-muted fw-medium">
                    <img src="/media/images/intradayTrades.svg" alt="" />
                    <h3>Intraday and F&O trades</h3>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5 text-muted fw-medium">
                    <img src="/media/images/pricingEquity.svg" alt="" />
                    <h3>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}
