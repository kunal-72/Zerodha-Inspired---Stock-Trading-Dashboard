export default function pricing() {
  return (
    <div className="container ">
      <div className="row  ">
        <div className="col-4">
          <h4>Unbeatable pricing</h4>
          <p className="text-muted " >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a className='fw-medium' style={{ textDecoration: "none" }} href="">See pricing <i class="fa-solid fa-arrow-right"></i> </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col py-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and <br /> direct mutual funds</p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
