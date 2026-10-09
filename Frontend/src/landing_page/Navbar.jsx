import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './signUp/AuthContext'
import { Button } from '@mui/material';
export default function Navbar() {
    const { isLoggedIn, handleLogout } = useContext(AuthContext)
    return (

        <nav className="navbar navbar-expand-lg border-bottom" style={{ background: "#FFF" }}>
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <img src="/media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
                            {!isLoggedIn ? (<li className="nav-item mx-2"> <Link className="nav-link active" to="/signup" >Sign up/Sign in </Link> </li>) : (<li className="nav-item mx-2"> <Link variant="outlined" onClick={handleLogout} > Logout </Link> </li>)}
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="about">About</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="products">Product</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="pricing">Pricing</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="support">Support</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <a
                                    className="nav-link"
                                    href="https://zerodha-dashboard-9wg2.onrender.com"
                                >
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>

    )
}
