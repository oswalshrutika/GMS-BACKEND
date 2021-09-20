//npm i @material-ui/icons
//npm install @material-ui/core
import React, { useState } from "react";
//import * as FaIcons from "react-icons/fa";
//import * as AiIcons from "react-icons/ai";
 import "./Dashboard.css";
//import { IconContext } from "react-icons";
//import * as IoIcons from "react-icons/io";
import { NavDropdown, Dropdown, Container } from "react-bootstrap";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import Products from "../pages/Products";

import Charts from "../pages/Charts";
import Linechart from "../pages/LineChart";
import { Users } from "../pages/Users";

// import Header from "./../Header";
// import AddFruits from "./AddFruits";
// import EmployeeSignup from "./EmployeeSignup";
// import EmployeeLogin from "./../pages/EmployeeLogin";
const AdminDashBoard = () => {
  useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });
  }, []);

  return (
    <div>
      <Router>
        <div>
          <div className="sidebar open">
            <div className="logo-details">
              <i className="bx bx-menu"></i>
              <span className="logo_name"> Admin</span>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/greenMartRevenue">
                  <i className="bx bx-grid-alt"></i>
                  <span className="link_name">Dashboard</span>
                </Link>
              </li>
              <li>
                <div className="iocn-link">
                  <Link>
                    <i className="bx bx-collection"></i>
                    <span className="link_name"> Overview</span>
                  </Link>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link to="/overview/users">Users</Link>
                  </li>
                  <li>
                    <Link to="/employeelist">Sellers</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="iocn-link">
                  <Link>
                    <i>
                      <LocalHospitalOutlinedIcon />
                    </i>
                    <span className="link_name">Products</span>
                  </Link>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link to="/products">All Products</Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="iocn-link">
                  <Link>
                    <i className="bx bx-pie-chart-alt-2"></i>
                    <span className="link_name">Reports</span>
                  </Link>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <ul className="sub-menu">
                  <li>
                    <Link to="/revenue">Revenue</Link>
                  </li>

                  <li>
                    <Link to="/sales">Reports </Link>
                  </li>
                </ul>
              </li>

              <li>
                <div className="profile-details">
                  <div className="profile-content">
                    {/* <img
                      src="./images/Admin_logo.jpg"
                      alt="profileImg"
                    ></img> */}
                  </div>
                  <div className="name-job">
                    <div className="profile_name">Priyanka Chauhan </div>
                    <div className="job">Admin</div>
                  </div>
                  <i className="bx bx-log-out"></i>
                </div>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path="/products">
             <Products/>            
            </Route>

            <Route path="/overview/users">
              <Users/>
            </Route>

            <Route path="/revenue">
                <Charts/>          
            </Route>

            <Route path="/sales">
            <Linechart></Linechart>       
            </Route>
            
            

          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AdminDashBoard;
