import React from 'react'

export default function Universe() {
  return (
    <div className="container mt-5 text-muted">
      <div className="row text-center">
        <h3>The Zerodha Universe</h3>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

        <div className="col-4 p-3 fw-semibold p-5" style={{ fontSize: "0.8rem", color: "gray" }}>
          <img src='/media/images/zerodhaFundhouse.png' style={{margin: "5%", width: "60%"}} alt="" />
          <p>Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4  fw-semibold p-5" style={{ fontSize: "0.8rem", color: "gray" }}>
          <img src='/media/images/sensibullLogo.svg' style={{margin: "5%", width: "80%"}} alt="" />
          <p>Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.

          </p>
        </div>
        <div className="col-4 p-3 fw-semibold p-5" style={{ fontSize: "0.8rem", color: "gray" }}>
          <img src='/media/images/tijori.svg' style={{margin: "5%", width: "60%"}} alt="" />
          <p>Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 fw-semibold  p-5" style={{ fontSize: "0.8rem", color: "gray" }}>
          <img src='/media/images/streakLogo.png' style={{margin: "5%", width: "50%"}} alt="" />
          <p>Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding. <br />
          </p>
        </div>
        <div className="col-4 p-3 fw-semibold  p-5" style={{ fontSize: "0.8rem", color: "gray" }}>
          <img src='/media/images/dittoLogo.png' style={{margin: "5%", width: "50%"}} alt="" />
          <p>Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 fw-semibold  p-5" style={{ fontSize: "0.8rem", color: "gray" }}>
          <img src='/media/images/smallcaseLogo.png' style={{margin: "5%"}} alt="" />
          <p>Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
      <button type="button" class="btn btn-primary p-2 fs-5 fw-bold mb-5" style={{width: "17%", margin: "0 auto", textAlign: "center"}} >Sign up for free</button>
      </div>
    </div>
  )
}
