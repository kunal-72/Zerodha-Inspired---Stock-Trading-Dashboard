import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Menu.css'
const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);


  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);


  const [username, setUsername] = useState("");

  const navigate = useNavigate();


  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };



  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };



  useEffect(() => {

    const getUser = async () => {

      try {

        const response = await axios.get(
          "https://zerodha-backend-vq4p.onrender.com/api/users/me",
          {
            withCredentials: true
          }
        );



        setUsername(response.data.user.username);

      } catch (error) {

        console.log(error);

      }

    };

    getUser();

  }, []);




  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-backend-vq4p.onrender.com/api/users/logout",
        {},
        {
          withCredentials: true
        }
      );

      console.log("Logout response:", response.data);

      window.location.replace(
        "https://zerodha-frontend-or4v.onrender.com/signup"
      );

    } catch (error) {
      console.log(
        "Logout error:",
        error.response?.data || error.message
      );
    }
  };



  const menuClass = "menu";
  const activeMenuClass = "menu selected";


  return (
    <div className="menu-container">

      <img
        src="logo.png"
        style={{ width: "50px" }}
      />


      <div className="menus">

        <ul>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>

        </ul>


        <hr />


        {/* Profile */}
        <div
          className="profile"
          onClick={handleProfileClick}
        >

          <div className="avatar">
            {username.slice(0, 2).toUpperCase()}
          </div>

          <p className="username">
            {username}
          </p>


          {/* Dropdown */}
          {isProfileDropdownOpen && (

            <div
              className="profile-dropdown"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="dropdown-item">
                Profile
              </div>

              <div className="dropdown-item">
                About
              </div>

              <div className="dropdown-item">
                Community
              </div>

              <hr />

              <div
                className="dropdown-item logout"
                onClick={handleLogout}
              >
                Logout
              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Menu;