import Carousel1 from '../Carousel1';
import Slider from '../Slider'
import Navbar from './NavBar';
import CategoryNavbar from './CategoryNavbar';

import CategoryList from './Categorylist';



const Home = () => {
   

    return (
        <div >
            <Navbar />
            
            <CategoryNavbar />
        
                <Carousel1 />
            
               <CategoryList/>

           
            <Slider />
        </div>
    )

}

export default Home
































// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { url } from '../common/constants'
// import Carousel1 from '../Carousel1';
// import Slider from '../Slider'
// import { useHistory, useLocation } from 'react-router-dom'
// import Navbar from '../components/NavBar';
// import CategoryNavbar from '../components/CategoryNavbar';



// const Home = () => {
//     const history = useHistory()
//     const [category, setCategory] = useState([])
//     // const [products, setProducts] = useState([])

//     useEffect(() => {
//         getCategory()
//     }, [])

//     const getCategory = () => {
//         axios.get(url + '/category/').then((response) => {
//             const result = response.data
//             setCategory(result)
//         })
//     }
//     return (
//         <div >
//              <Navbar></Navbar>
//              <CategoryNavbar></CategoryNavbar>
//              <div>
//                  {/* <Navbar></Navbar> */}
//                <Carousel1/>
//              <div>

//            </div>
//              </div>
//              <br/>
//              <br/><br/><br/>
//             {
//                 console.log(category)
//             }
//             <ul className="list-inline-item ">
//                 {
//                     category.map((cat) => {
//                         return (

//                                 <div className="list-inline-item">
//                                <div className="cards">
//                 <div className="card2 border border-2">
//                               {/* <img src={props.imgsrc} className="card-img-top m-auto" alt="imgsrc" style={{height: "150px", width:"100px"}}/> */}
//                                    <a
//                                         onClick={() => {
//                                             history.push(`/category/${cat.categoryName}`, { cat: cat })
//                                             console.log(cat.categoryName);

//                                         }}
//                                     >
//                                         <img src={url + '/' + cat.categoryImage} className="card-img-top m-auto" alt="" /><br></br> 
//                                         {/* <div className="card-body" style={{textAlign:"center"}}>
//                 <h6 className={props.title} style={{color:"black",fontStyle:"oblique"}} >     </h6> */}
//                  <div className="card-body" style={{textAlign:"center"}}>
//                                         <h4 style={{color:"black",fontStyle:"oblique"}} >{cat.categoryName}</h4>
//                                         </div>
//                                     </a>
//                                     </div>
//                                     </div>
//                             </div>

//                         )

//                     })
//                 }
//             </ul>
//             <Slider></Slider>
//         </div>
//     )

//     // return (
//     //     <div className="image">
//     //          <div>
//     //          <Navbar></Navbar>
//     //          <CategoryNavbar></CategoryNavbar>
//     //          <Carousel1></Carousel1>


//     //          </div>
//     //         {
//     //             console.log(category)
//     //         }
//     //         <ul className="list-inline-item ">
//     //             {
//     //                 category.map((cat) => {
//     //                     return (

//     //                             <div className="list-inline-item">

//     //                                <a
//     //                                     onClick={() => {
//     //                                         history.push(`/category/${cat.categoryName}`, { cat: cat })
//     //                                         console.log(cat.categoryName);

//     //                                     }}
//     //                                 >
//     //                                     <img src={url + '/' + cat.categoryImage} alt=""  /><br></br> 
//     //                                     <h4>{cat.categoryName}</h4>
//     //                                 </a>

//     //                         </div>

//     //                     )

//     //                 })
//     //             }
//     //         </ul>
//     //         <Slider></Slider>
//     //     </div>
//     // )

// }

// export default Home




// // import axios from 'axios'
// // import { useState, useEffect } from 'react'
// // import { Link } from 'react-router-dom'
// // import { url } from '../common/constants'
// // import Carousel1 from '../Carousel1';
// // import Slider from '../Slider'
// // import { Carousel } from 'react-bootstrap' 
// // import 'bootstrap/dist/css/bootstrap.min.css';






// // const Home = () => {

// //     const [category, setCategory] = useState([])
// //     //const [products, setProducts] = useState([])

// //     useEffect(() => {
// //         getCategory()
// //     }, [])

// //     const getCategory = () => {
// //         axios.get(url + '/category/').then((response) => {
// //             const result = response.data
// //             setCategory(result)
// //         })
// //     }

// //     return (

// //         <div className="image">
// //             <div>
// //                <Carousel1></Carousel1>
// //                <Slider></Slider>
// //             </div>

// //             <ul className="list-inline">
// //                 {
// //                     category.map((cat) => {
// //                         return (
// //                             <div className="container-fluid border-bottom border-4 bs-popover-bottom mt-3" >
// //                                 <Link  className="nav-link " to={cat.categoryName}>{cat.categoryName}</Link>
// //                                 <br></br>
// //                                 <div className="container-fluid">

// //                                     {
// //                                         cat.productItem.map((product)=>{
// //                                             return(
// //                                                 <div className="list-inline-item ">

// //                                                     <div className="image">
// //                                                     <Carousel>
// //                                                        <Carousel.Item>
// //                                                        <img src={url+'/'+product.productImage}alt="" class="rounded" height="150px" width="200px" /><br></br>
// //                                                        <h4> {product.productName}</h4>
// //                                                        <h5>₹{product.productPrice}</h5>
// //                                                        </Carousel.Item>
// //                                                        <Carousel.Item>


// //                                                    </Carousel>


// //                                                       </div>
// //                                                 </div>
// //                                             )
// //                                         })
// //                                     }

// //                                 </div>
// //                             </div>

// //                         )
// //                     })
// //                 }
// //             </ul>
// //         </div>
// //     )

// // }

// // // export default Home