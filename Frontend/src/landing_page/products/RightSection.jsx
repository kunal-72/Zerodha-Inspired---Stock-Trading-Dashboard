
export default function RightSection({ productName, productDescription, learnMore, imageURL }) {
  return (
      <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h4>{productName}</h4>
                    <p className="mt-4">{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{marginLeft: "100px", textDecoration: "none", fontWeight: "500"}}> key connect →</a>
                    </div>
                    
                </div>

                {/* <div className="col-1"></div> */}

                <div className="col-6">
                    <img src={imageURL} style={{width: "105%"}} alt="" />
                </div>
            </div>
        </div>
  )
}
