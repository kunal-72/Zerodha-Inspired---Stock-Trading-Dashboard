import React from 'react'

export default function LeftSection({ productName, productDescription, tryDemo, learnMore, googlePlay, appStore, imageURL }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 ">
                    <img src={imageURL} alt="" />
                </div>
               <div className="col-2"></div>
                <div className="col-5 p-5 mt-5">
                    <h4>{productName}</h4>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration: "none", fontWeight: "500"}}>Try Demo →</a>
                        <a href={learnMore} style={{marginLeft: "100px", textDecoration: "none", fontWeight: "500"}}>Learn More →</a>
                    </div>
                    <div className='mt-3 mb-3' >
                        <a href={googlePlay}>
                            <img src="/media/images/googlePlayBadge.svg" alt="" />
                        </a>
                        <a href={appStore} style={{marginLeft: "50px"}} >
                            <img src='/media/images/appstoreBadge.svg' alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
