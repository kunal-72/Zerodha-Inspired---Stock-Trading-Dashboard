import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";


const BuyActionWindow = ({ uid, mode }) => {

  const [stockQuantity, setStockQuantity] = useState(1);

  const [stockPrice, setStockPrice] = useState(0);


  const generalContext = useContext(GeneralContext);





  const handleOrderClick = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-backend-vq4p.onrender.com/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: mode
        },
        {
          withCredentials: true
        }
      );

      console.log(response.data);

      alert(`${mode} order placed successfully`);

      generalContext.closeOrderWindow();
    } catch (error) {
      console.log("Order error:", error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };






  const handleCancelClick = () => {

    generalContext.closeOrderWindow();

  };


  return (

    <div
      className="container"
      id="buy-window"
      draggable="true"
    >

      <div className="regular-order">

        <h3>
          {mode === "BUY" ? "Buy" : "Sell"} {uid}
        </h3>


        <div className="inputs">



          <fieldset>

            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"

              min="1"

              onChange={(e) =>
                setStockQuantity(e.target.value)
              }

              value={stockQuantity}
            />

          </fieldset>




          <fieldset>

            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"

              min="0"

              step="0.05"

              onChange={(e) =>
                setStockPrice(e.target.value)
              }

              value={stockPrice}
            />

          </fieldset>

        </div>

      </div>


      <div className="buttons">

        <span>
          Margin required ₹140.65
        </span>


        <div>

          <button
            className="btn btn-blue"
            onClick={handleOrderClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </button>


          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  );

};


export default BuyActionWindow;