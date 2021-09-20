import React from 'react'


import { Row, Col } from 'reactstrap'


import SellerNavbar from './SellerNavbar'
import SellerMenuBar from './SellerMenuBar'

class SellerDashboard extends React.Component {

  render(){
  return (
    <div>
      < SellerNavbar />
      <div className="py-5">
        <Row>
          <Col md={2}>
            <SellerMenuBar />
          </Col>
          
        </Row>
      </div>
    </div>
  )
 }
}

export default SellerDashboard





















// import SellerNavbar from "./SellerNavbar"



// const SellerDashboard = () => {


//     return (
//         <div>
//             <div>
//                <SellerNavbar/> 
//             </div>


//             <div>
//                 <h2>Seller Pannel</h2>
//                 <a href="/addCategory">Add New Category</a>

//                 <br>
//                 </br>

//                 <a href="/product">Add New Product</a>
//                 <br></br>

//                 <a href="/allProduct">View all Products</a>
//             </div>
//         </div>
//     )
// }

// export default SellerDashboard