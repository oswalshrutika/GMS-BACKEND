import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import {useHistory,useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../actions/cartActions'
import { removeFromCartAction } from '../actions/cartActions'
import Navbar from '../components/NavBar'



const Category = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const history = useHistory()
    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        getCategory()
    }, [])


    const location = useLocation()
    const cat = location.state.cat;

    const getCategory = () => {
        axios.post(url + `/category/${cat.categoryName}`).then((response) => {
            const result = response.data
            setCategory(result)
        })
    }
    // const getProducts = () => {
    //     axios.get(url + '/products/').then((response) => {
    //         const result = response.data
    //         setProducts(result)
    //     })
    //   }
      // used to send action(s)
      const dispatch = useDispatch()
    
      const addToCart = (product) => {
        dispatch(addToCartAction(product))
        const body = {productId: product.productId,productQuantity:1}
        axios.put(url + '/cart/' +`${user.id}`,body).then((response)=>{
          // alert("success")
        })
      }
    
      const removeFromCart = (product) => {
        dispatch(removeFromCartAction(product))
        
      }
    return (
        <div>
            <Navbar/>
        <div className="itemcontainer" >
            {
                console.log(category)
            }
              
        
                            <div className="outerDiv itemcontainer ">
                                    { 
                                        cat.productItem.map((product)=>{
                                            return(
                                                <div className="list-inline-item ">
                                                   <div className="cards">
                <div className="card2 border border-2">
                                                 {/* <img src={props.imgsrc} className="card-img-top m-auto" alt="imgsrc" style={{height: "150px", width:"100px"}}/> */}  
                                                   
                                                     <img src={url+'/'+product.productImage}alt="" className="card-img-top m-auto"/><br></br>

                                                     {/* <div className="card-body" style={{textAlign:"center"}}>
                <h6 className={props.title} style={{color:"black",fontStyle:"oblique"}} >     </h6> */}
                <div className="card-body" style={{textAlign:"center"}}>
                                                     <h4 style={{color:"black",fontStyle:"oblique"}}> {product.productName}</h4>
                                                     <h5 style={{color:"black",fontStyle:"oblique"}}>price  ₹{product.productPrice}</h5>
                                                     
                                                     </div>
                                                    <br/>
                                                    
                                                     </div>
                                                </div>
                  {sessionStorage.getItem("isLoggedin") == 'true' &&
                  <button
                  className="btn btn-outline-success"
                    onClick={() => {
                      removeFromCart(product)
                    }}>
                   -
                  </button>}
                  
                  {sessionStorage.getItem("isLoggedin") == 'true' &&
                  <button
                   className="btn btn-success btn-sm"
                    onClick={() => {
                      addToCart(product)
                    }}>
                    Add To Cart
                  </button>}

                  {sessionStorage.getItem("isLoggedin") == 'true' &&
                  <button 
                   className="btn btn-outline-success"
                    onClick={() => {
                      addToCart(product)
                    }}>
                    +
                  </button>}
                  
                  </div>
                                            )
                                        })
                                    }

                                
                         </div >   

                       
     
                         </div>   </div>
    )

}

export default Category







// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { url } from '../common/constants'
// import {useHistory,useLocation } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { addToCartAction } from '../actions/cartActions'
// import { removeFromCartAction } from '../actions/cartActions'
// import Navbar from '../components/NavBar'



// const Category = () => {
//     const history = useHistory()
//     const [category, setCategory] = useState([])
//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         getCategory()
//     }, [])


//     const location = useLocation()
//     const cat = location.state.cat;

//     const getCategory = () => {
//         axios.post(url + `/category/${cat.categoryName}`).then((response) => {
//             const result = response.data
//             setCategory(result)
//         })
//     }
//     // const getProducts = () => {
//     //     axios.get(url + '/products/').then((response) => {
//     //         const result = response.data
//     //         setProducts(result)
//     //     })
//     //   }
//       // used to send action(s)
//       const dispatch = useDispatch()
    
//       const addToCart = (product) => {
//         dispatch(addToCartAction(product))
//       }
    
//       const removeFromCart = (product) => {
//         dispatch(removeFromCartAction(product))
//       }
//     return (
//         <div>
//             <Navbar/>
//         <div className="itemcontainer" >
//             {
//                 console.log(category)
//             }
              
        
//                             <div className="outerDiv itemcontainer ">
//                                     { 
//                                         cat.productItem.map((product)=>{
//                                             return(
//                                                 <div className="list-inline-item ">
//                                                    <div className="cards">
//                 <div className="card2 border border-2">
//                                                  {/* <img src={props.imgsrc} className="card-img-top m-auto" alt="imgsrc" style={{height: "150px", width:"100px"}}/> */}  
                                                   
//                                                      <img src={url+'/'+product.productImage}alt="" className="card-img-top m-auto"/><br></br>

//                                                      {/* <div className="card-body" style={{textAlign:"center"}}>
//                 <h6 className={props.title} style={{color:"black",fontStyle:"oblique"}} >     </h6> */}
//                 <div className="card-body" style={{textAlign:"center"}}>
//                                                      <h4 style={{color:"black",fontStyle:"oblique"}}> {product.productName}</h4>
//                                                      <h5 style={{color:"black",fontStyle:"oblique"}}>price  ₹{product.productPrice}</h5>
                                                     
//                                                      </div>
//                                                     <br/>
                                                    
//                                                      </div>
//                                                 </div>
//                   {sessionStorage.getItem("isLoggedin") == 'true' &&
//                   <button
//                   className="btn btn-outline-success"
//                     onClick={() => {
//                       removeFromCart(product)
//                     }}>
//                    -
//                   </button>}
                  
//                   {sessionStorage.getItem("isLoggedin") == 'true' &&
//                   <button
//                    className="btn btn-success btn-sm"
//                     onClick={() => {
//                       addToCart(product)
//                     }}>
//                     Add To Cart
//                   </button>}

//                   {sessionStorage.getItem("isLoggedin") == 'true' &&
//                   <button 
//                    className="btn btn-outline-success"
//                     onClick={() => {
//                       addToCart(product)
//                     }}>
//                     +
//                   </button>}
                  
//                   </div>
//                                             )
//                                         })
//                                     }

                                
//                          </div >   

                       
     
//                          </div>   </div>
//     )

// }

// export default Category





















// // import axios from 'axios'
// // import { useState, useEffect } from 'react'
// // import { Link } from 'react-router-dom'
// // import { url } from '../common/constants'
// // import {useHistory,useLocation } from 'react-router-dom'



// // const Category = () => {
// //     const history = useHistory()
// //     const [category, setCategory] = useState([])
// //     // const [products, setProducts] = useState([])

// //     useEffect(() => {
// //         getCategory()
// //     }, [])


// //     const location = useLocation()
// //     const cat = location.state.cat;

// //     const getCategory = () => {
// //         axios.post(url + `/category/${cat.categoryName}`).then((response) => {
// //             const result = response.data
// //             setCategory(result)
// //         })
// //     }

// //     return (
// //         <div className="image">
// //             {
// //                 console.log(category)
// //             }
        
// //                             <div>
// //                                     {
// //                                         cat.productItem.map((product)=>{
// //                                             return(
// //                                                 <div className="list-inline-item ">
                                                   
// //                                                     <div className="image">
                                                   
// //                                                      <img src={url+'/'+product.productImage}alt="" class="rounded"/><br></br>
// //                                                      <h4> {product.productName}</h4>
// //                                                      <h5>price = {product.productPrice}</h5>
// //                                                       </div>
// //                                                 </div>
// //                                             )
// //                                         })
// //                                     }

                                
// //                          </div >   

                       
// //         </div>
// //     )

// // }

// // export default Category