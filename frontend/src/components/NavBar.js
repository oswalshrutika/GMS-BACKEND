import { Link } from 'react-router-dom'
import Logout from './Logout';
import web5 from "../images/GroceryShopping.jpg"
import web6 from "../images/11.png"
import web7 from "../images/22.png"
import { useSelector } from 'react-redux'



const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems)

  return (
    <div>

      <nav class="navbar navbar-light alert alert-success" style={{ backgroundcolor: "black" }}>

        <div className="container-fluid" style={{ fontSize: "22px" }}>
          <ul className="list-inline">

            <li className="list-inline-item "><Link className="nav-link " to="/home">Home</Link></li>


            {sessionStorage.getItem("isLoggedin") == 'true' ||
              <li className="list-inline-item "> <Link className="nav-link" to="/signin-signup">Signin/Signup</Link></li>}

            {sessionStorage.getItem("isLoggedin") == 'true' &&
              <li className="list-inline-item "> <Link className="nav-link" to="/profile">Profile</Link></li>}
            {/* <li className="list-inline-item "> <Link className="nav-link" to="/product">AddProduct</Link></li> */}
            {sessionStorage.getItem("isLoggedin") == 'true' &&
              <li className="list-inline-item "> <Link className="nav-link" to="/cart">Cart  {cartItems.length}</Link></li>}
            {sessionStorage.getItem("isLoggedin") == 'true' &&
              <li className="list-inline-item "><img className="logocart " src={web6} alt="cart logo" /></li>}
            <li className="list-inline-item "> <Link className="nav-link" to="/contactus">Contact Us</Link></li>
            <li className="list-inline-item "> <Link className="nav-link" to="/aboutus">About Us</Link></li>         


          </ul>
          <li className="list-inline-item ">
            <form class="d-flex">
              <input className="form-control me-2 list-inline-item" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success list-inline-item" type="submit">Search</button>
            </form>
          </li>
          {sessionStorage.getItem("isLoggedin") == 'true' &&
            <li className="list-inline-item"> <Link className="nav-link" to="/logout">Logout<img className="logocart " src={web7} alt="cart logo" /></Link></li>}
          <hr></hr>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;

