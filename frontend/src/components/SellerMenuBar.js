import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

const SellerMenuBar = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <NavLink className="nav-link" exact to="/sellerDashboard">
            <h5>
              {' '}
              <i className="fa fa-dashboard"></i>
              <p>Seller DashBoard</p>
            </h5>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/product">
            <Button outline color="danger">
              ADD Product
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/addCategory">
            <Button outline color="secondary">
              ADD Category
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/allProducts">
            <Button outline color="success">
              View All products
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/allCategory">
            <Button outline color="danger">
              View All Category
            </Button>
          </NavLink>
        </ListGroupItem>

        <ListGroupItem>
          <NavLink className="nav-link" exact to="/sellerEditProfile">
            <Button outline color="danger">
             Update Profile
            </Button>
          </NavLink>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default SellerMenuBar