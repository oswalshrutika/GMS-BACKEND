//npm install --save @progress/kendo-react-buttons @progress/kendo-licensing
//npm install --save @progress/kendo-react-pdf @progress/kendo-drawing @progress/kendo-licensing

import { Button } from '@progress/kendo-react-buttons';//pdf
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';//pdf
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from '../actions/cartActions'
import { url } from '../common/constants'
import Navbar from '../components/NavBar';
import { addToCartAction } from '../actions/cartActions'
import { clearCartAction } from '../actions/cartActions'
import { useState, useEffect } from 'react'
// import { useCart } from "react-use-cart";
import { CartProvider, useCart } from "react-use-cart";
import { Link, useHistory } from 'react-router-dom'
import { useRef } from 'react';



const Order = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()
  const [cartTotal, setCartTotal] = useState(0);
  const orderItems = [];
  const history = useHistory()
  //pdf
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);
 

  
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  }

const payment = () => {
    sessionStorage.setItem("payment", JSON.stringify({cartTotal}))

    cartItems.map((product) => {
      if(product.productId != undefined){
        var item = {
          "productId":product.productId,
          "quantity":1
        }
        orderItems.push(item)
      }
    })
    
    const body = {userId:user.id,total:cartTotal,orderItem:orderItems
    }
    // console.log(body)
    axios.post(url + '/orders/addorder',body).then((response)=>{
    })
    history.push('/payment')
  }

//   const addToCart = (product) => {
//     dispatch(addToCartAction(product))
//   }
//   const updateItemQuantity= useCart();
  

  //  const clearCart = () => {
  //  dispatch(clearCartAction());
  // };


// const { emptyCart } = useCart();

// emptyCart();


  useEffect(() => {
    total();
  }, [cartItems]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cartItems.length-1; i++) {
      totalVal += cartItems[i].productPrice;
    }
    setCartTotal(totalVal);
    console.log(totalVal)
  };


  return (<div><Navbar></Navbar>
    <div>
    <div className="app-content">
      <PDFExport ref={pdfExportComponent} paperSize="Tabloid">
        <div ref={contentArea}>

      <h1>My Order</h1>

      <table className="table table-striped">
        <thead>
          <tr>
           <th>Id</th>
            <th>Name</th>
            
            <th>price</th>
            <th>Quantity</th>
            <th>#</th>
         
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => {
            return (
              <tr>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                
                <td>{product.productPrice}</td>
            
                <td> <img src={url+'/'+product.productImage}alt="" class="rounded"/></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div><h3>Total: ${cartTotal}</h3></div>
  
      {/* <a className="btn btn-success btn-sm " href="/checkout" 
      >CheckOut</a>  */}
    

   
        </div>
        </PDFExport>
        <div className="button-area">
            <Button  className ="btn btn-info "onClick={handleExportWithComponent}>Generate Invoice </Button>
            
          </div>
      <button className="btn btn-success btn-sm " onClick={payment}>
        Proceed to payment
          </button>
      </div>

     
      </div>
    </div>
  )
}

export default Order







// //npm install --save @progress/kendo-react-buttons @progress/kendo-licensing
// //npm install --save @progress/kendo-react-pdf @progress/kendo-drawing @progress/kendo-licensing

// import { Button } from '@progress/kendo-react-buttons';//pdf
// import { PDFExport, savePDF } from '@progress/kendo-react-pdf';//pdf

// import { useDispatch, useSelector } from 'react-redux'
// import { removeFromCartAction } from '../actions/cartActions'
// import { url } from '../common/constants'
// import Navbar from '../components/NavBar';
// import { addToCartAction } from '../actions/cartActions'
// import { clearCartAction } from '../actions/cartActions'
// import { useState, useEffect } from 'react'
// // import { useCart } from "react-use-cart";
// import { CartProvider, useCart } from "react-use-cart";
// import { Link, useHistory } from 'react-router-dom'
// import { useRef } from 'react';



// const Order = () => {
//   const cartItems = useSelector((state) => state.cartItems)
//   const dispatch = useDispatch()
//   const [cartTotal, setCartTotal] = useState(0);
//   const history = useHistory()
//   //pdf
//   const pdfExportComponent = useRef(null);
//   const contentArea = useRef(null);
 

  
//   const handleExportWithComponent = (event) => {
//     pdfExportComponent.current.save();
//   }



// const payment = () => {
//     sessionStorage.setItem("payment", JSON.stringify({cartTotal}))
//     history.push('/payment')
//   }

// //   const addToCart = (product) => {
// //     dispatch(addToCartAction(product))
// //   }
// //   const updateItemQuantity= useCart();
  

//   //  const clearCart = () => {
//   //  dispatch(clearCartAction());
//   // };


// // const { emptyCart } = useCart();

// // emptyCart();


//   useEffect(() => {
//     total();
//   }, [cartItems]);

//   const total = () => {
//     let totalVal = 0;
//     for (let i = 0; i < cartItems.length-1; i++) {
//       totalVal += cartItems[i].productPrice;
//     }
//     setCartTotal(totalVal);
//     console.log(totalVal)
//   };


//   return (<div><Navbar></Navbar>
//     <div>
//     <div className="app-content">
//       <PDFExport ref={pdfExportComponent} paperSize="Tabloid">
//         <div ref={contentArea}>

//       <h1>My Order</h1>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//            <th>Id</th>
//             <th>Name</th>
            
//             <th>price</th>
//             <th>Quantity</th>
//             <th>#</th>
         
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((product) => {
//             return (
//               <tr>
//                 <td>{product.productId}</td>
//                 <td>{product.productName}</td>
                
//                 <td>{product.productPrice}</td>
            
//                 <td> <img src={url+'/'+product.productImage}alt="" class="rounded"/></td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//       <div><h3>Total: ${cartTotal}</h3></div>
  
//       {/* <a className="btn btn-success btn-sm " href="/checkout" 
//       >CheckOut</a>  */}
    

   
//         </div>
//         </PDFExport>
//         <div className="button-area">
//             <Button  className ="btn btn-info "onClick={handleExportWithComponent}>Generate Invoice </Button>
            
//           </div>
//       <button className="btn btn-success btn-sm " onClick={payment}>
//         Proceed to payment
//           </button>
//       </div>

     
//       </div>
//     </div>
//   )
// }

// export default Order











// // import { useDispatch, useSelector } from 'react-redux'
// // import { removeFromCartAction } from '../actions/cartActions'
// // import { url } from '../common/constants'
// // import Navbar from '../components/NavBar';

// // const Cart = () => {
// //   const cartItems = useSelector((state) => state.cartItems)
// //   const dispatch = useDispatch()

// //   const removeFromCart = (product) => {
// //     dispatch(removeFromCartAction(product))
// //   }

// //   return (<div><Navbar></Navbar>
// //     <div>
// //       <h1>My Cart</h1>

// //       <table className="table table-striped">
// //         <thead>
// //           <tr>
// //            <th>id</th>
// //             <th>Name</th>
// //             <th>price</th>
// //             <th>#</th>
// //             <th>action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {cartItems.map((product) => {
// //             return (
// //               <tr>
// //                 <td>{product.productId}</td>
// //                 <td>{product.productName}</td>
// //                 <td>{product.productPrice}</td>
// //                 <td> <img src={url+'/'+product.productImage}alt="" class="rounded"/></td>
// //                 <td>
// //                   <button
// //                   className="btn btn-danger btn-sm"
// //                     onClick={() => {
// //                       removeFromCart(product)
// //                     }}>
// //                     Remove from Cart
// //                   </button>
// //                 </td>
// //               </tr>
// //             )
// //           })}
// //         </tbody>
// //       </table>
// //     </div></div>
// //   )
// // }

// // export default Cart