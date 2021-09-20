import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'


const SellerNavbar = () => {

  
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark " >
      <a className="navbar" href="/">
      <img src="logo.png" alt="LOGO" height="60" />
        </a>
      <div className="container">
        <Link className="navbar-brand" href="/">
        Grocery Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={{ marginLeft: 620 }}>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav mr-auto justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/sellerProfile">
                <Button outline color="success">
                  My Profile
                </Button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/sellerLogout">
                <Button outline color="success" >
                  Logout
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SellerNavbar