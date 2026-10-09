import React, { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";


const Orders = () => {

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);


 

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const response = await axios.get(

          "http://localhost:5500/allorders",

          {
            withCredentials: true
          }

        );


        setOrders(response.data.orders);


      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };


    fetchOrders();

  }, []);


  

  if (loading) {

    return (

      <div className="orders">

        <p>Loading orders...</p>

      </div>

    );

  }




  if (orders.length === 0) {

    return (

      <div className="orders">

        <div className="no-orders">

          <p>
            You haven't placed any orders today
          </p>


          <Link
            to="/"
            className="btn"
          >
            Get started
          </Link>

        </div>

      </div>

    );

  }


  

  return (

    <div className="orders">

      <h2>Orders</h2>


      <table>

        <thead>

          <tr>

            <th>Stock</th>

            <th>Type</th>

            <th>Quantity</th>

            <th>Price</th>

            <th>Date</th>

          </tr>

        </thead>


        <tbody>

          {orders.map((order) => (

            <tr key={order._id}>

              <td>
                {order.name}
              </td>


              <td>
                {order.mode}
              </td>


              <td>
                {order.qty}
              </td>


              <td>
                ₹{order.price}
              </td>


              <td>
                {new Date(order.createdAt)
                  .toLocaleString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};


export default Orders;