import React from 'react'

export default function Hero() {
  return (
    <section className="container-fluid" id='supportHero'>
      <div className="p-4 " id='supportWrapper'>
        <h5>Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>

      <div className=" row ">
        <div className="col-6 p-4 ">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input type="text" placeholder='Eg. how do I activate F&Q' />
          <br />
          <a href="">Track amount opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-4 ">
          <h4>Featured</h4>
          <ol>
            <li><a href="">Current Takeovers and Dislisting - Januray 2024</a></li>
            <li><a href="">Latest Intraday leverages - MTS & CO</a></li>
          </ol>
          
        </div>
      </div>

    </section>
  )
}
