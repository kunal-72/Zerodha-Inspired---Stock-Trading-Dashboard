import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";


const BuyActionWindow = ({ uid, mode }) => {

  const [stockQuantity, setStockQuantity] = useState(1);

  const [stockPrice, setStockPrice] = useState(0);


  // Context se closeOrderWindow nikal rahe hain
  const generalContext = useContext(GeneralContext);


  // ========================================
  // PLACE ORDER
  // ========================================

  const handleOrderClick = async () => {

    try {

      const response = await axios.post(

        "http://localhost:5500/newOrder",

        {
          name: uid,

          qty: stockQuantity,

          price: stockPrice,

          mode: mode
        },

        {
          // JWT cookie backend ko send hogi
          withCredentials: true
        }

      );


      console.log(response.data);

      alert(`${mode} order placed successfully`);


      // Order successful hone ke baad window close
      generalContext.closeOrderWindow();


    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }

  };


  // ========================================
  // CANCEL
  // ========================================

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

          {/* Quantity */}

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


          {/* Price */}

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