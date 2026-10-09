import React from 'react'

export default function Team() {
    return (
        <div className="container">
            <div className="row text-center p-5 mt-5 border-top">
                <h4>People</h4>
            </div>

            <div className="row px-5  text-muted" style={{ lineHeight: "2", fontWeight: "400" }}>
                <div className="col p-3 text-center ">
                    <img src="/media/images/nithinKamath.jpg" style={{ borderRadius: "50%", width: "70%" }} alt="" />
                    <h5 className='my-4'>Nithin Kamath</h5>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col p-3">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                   <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p> Connect on <a href="" style={{textDecoration: "none"}}> Homepage</a>  / <a href="" style={{textDecoration: "none"}}>TradingQnA</a>  / <a href="" style={{textDecoration: "none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
    )
}
