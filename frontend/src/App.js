import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import Browse from './components/Browse';
import Signin from './components/Signin';
import Cart from './components/Cart';


import EditProfile from './components/EditProfile';
import Changepassword from './components/Changepassword';
import SignUp from './components/SignUp';
import Info from './components/Info';
import Logout from './components/Logout';
import Category from './pages/Category';
import Product from './components/AddProduct';
import AddCategory from './components/AddCategory';
import SignUpSeller from './components/SignUpSeller';
import SellerSignIn from './components/SellerSignIn';
import SellerDashboard from './components/SellerDashboard';
import AllProducts from './components/AllProducts';
import SellerEditProfile from './components/SellerEditProfile';
import AllCategory from './components/AllCategory';
import SellerLogout from './components/SellerLogout';
import SellerProfile from './components/SellerProfile';
import ChangeSellerPassword from './components/ChangeSellerPassword';

import CategoryNavbar from './components/CategoryNavbar';
import CategoryList from './components/Categorylist';
import Home from './components/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Payment from './components/Payment';
import Delivery from './components/Delivery';
import Order from './components/Order';
import AdminDashBoard from './components/AdminDashBoard';

function App() {
  return (
    <div className="app">
      <div className="container-fluid">
        <BrowserRouter>
         
         
          <Switch>
            {/* <Route path="/home" component={Home}></Route> */}
            
            <Route path="/browse" component={Browse}></Route>
            <Route path="/signin-signup" component={Signin}></Route>
            <Route path="/cart" component={Cart}></Route> 
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/sellerSignup" component={SignUpSeller}></Route>
            <Route path="/sellerSignin" component={SellerSignIn}></Route>
            <Route path="/changepassword" component={Changepassword}></Route>
            <Route path="/changeSellerPassword" component={ChangeSellerPassword}></Route>
            <Route path="/profile" component={Info}></Route>
            <Route path="/editprofile" component={EditProfile}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/sellerLogout" component={SellerLogout}></Route>
            <Route path="/category" component={Category}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/addCategory" component={AddCategory}></Route>
            <Route path="/sellerDashboard" component={SellerDashboard}></Route>
            <Route path="/allProducts" component={AllProducts}></Route>
            <Route path="/allCategory" component={AllCategory}></Route>
            <Route path="/sellerEditProfile" component={SellerEditProfile}></Route>
            <Route path="/sellerProfile" component={SellerProfile}></Route>
            <Route path="/home" component={Home}></Route>
           
            <Route path="/categoryNavbar" component={CategoryNavbar}></Route>
            <Route path="/categoryList" component={CategoryList}></Route>
            <Route path="/contactus" component={ContactUs}></Route>
            <Route path="/aboutus" component={AboutUs}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/delivery" component={Delivery}></Route>
            <Route path="/order" component={Order}></Route>
            <Route path="/admin" >
              <AdminDashBoard/>
          
            </Route>
            <Route path="/" component={Home}></Route>
         
             {/* <Redirect to="/" /> 
             */}
           

          </Switch>
        </BrowserRouter>
      </div>


    </div>
  );
}

export default App;
