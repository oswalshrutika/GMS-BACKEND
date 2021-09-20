import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction1, removeFromCartAction } from '../actions/cartActions'
import { url } from '../common/constants'
import Navbar from '../components/NavBar';
import { addToCartAction } from '../actions/cartActions'
import { clearCartAction } from '../actions/cartActions'
import { useState, useEffect } from 'react'
// import { useCart } from "react-use-cart";
import { CartProvider, useCart } from "react-use-cart";
import { Link, useHistory } from 'react-router-dom'



const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()
  const history = useHistory()
  const [cartTotal, setCartTotal] = useState(0);


  const removeFromCart = (product) => {
    dispatch(removeFromCartAction(product))
  }
  const addToCart = (product) => {
    dispatch(addToCartAction(product))
  }


    
  const addOrder = (product) => {
    dispatch(addToCartAction1(product))
    history.push('/order')
  }
  const updateItemQuantity= useCart();
  

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
    for (let i = 0; i < cartItems.length; i++) {
      totalVal += cartItems[i].productPrice;
    }
    setCartTotal(totalVal);
    console.log(totalVal)
  };


  return (<div><Navbar></Navbar>
    <div>
      <h1>My Cart</h1>

      <table className="table table-striped">
        <thead>
          <tr>
           <th>Id</th>
            <th>Name</th>
            
            <th>price</th>
            <th>Quantity</th>
            <th>#</th>
            <th>action</th>
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
                <td>
                  <button
                  className="btn btn-danger btn-sm"
                    onClick={() => {
                      removeFromCart(product)
                    }}>
                    Remove from Cart
                  </button>
                  {/* <button
              // onClick={() => updateItemQuantity(product.productId.id, product.productQuantity + 1)}
            >
              +
            </button> */}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div><h3>Total: ₹{cartTotal}</h3></div>
  
      {/* <a className="btn btn-success btn-sm " href="/order" 
      >CheckOut</a>  */}
    
      <button className="btn btn-success btn-sm" onClick={addOrder}>
         Checkout
          </button>
      </div>
    </div>
  )
}

export default Cart











// import { useDispatch, useSelector } from 'react-redux'
// import { removeFromCartAction } from '../actions/cartActions'
// import { url } from '../common/constants'
// import Navbar from '../components/NavBar';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cartItems)
//   const dispatch = useDispatch()

//   const removeFromCart = (product) => {
//     dispatch(removeFromCartAction(product))
//   }

//   return (<div><Navbar></Navbar>
//     <div>
//       <h1>My Cart</h1>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//            <th>id</th>
//             <th>Name</th>
//             <th>price</th>
//             <th>#</th>
//             <th>action</th>
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
//                 <td>
//                   <button
//                   className="btn btn-danger btn-sm"
//                     onClick={() => {
//                       removeFromCart(product)
//                     }}>
//                     Remove from Cart
//                   </button>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div></div>
//   )
// }

// export default Cart