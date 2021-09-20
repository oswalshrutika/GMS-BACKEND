
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { url } from '../common/constants'
import Search from '../components/Search'


const CategoryList = () => {
    const history = useHistory()
    const [category, setCategory] = useState([])
    console.log("🚀 ~ file: Categorylist.js ~ line 12 ~ CategoryList ~ category", category)
    // const [products, setProducts] = useState([])

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {
        axios.get(url + '/category/').then((response) => {
            const result = response.data
            setCategory(result)
        })
    }

    return (
        <div >
            <Search categories={category} />

            {/* <ul className="list-inline-item ">
                {
                    category.map((cat) => {
                        return (

                            <div className="list-inline-item">
                                <div className="cards">
                                    <div className="card2 border border-2">
                                        <a
                                            onClick={() => {
                                                history.push(`/category/${cat.categoryName}`, { cat: cat })
                                                

                                            }}
                                        >
                                            <img src={url + '/' + cat.categoryImage} className="card-img-top m-auto" alt="" /><br></br>
                                       
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                <h4 style={{ color: "black", fontStyle: "oblique" }} >{cat.categoryName}</h4>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        )

                    })
                }
            </ul> */}

        </div>
    )

}

export default CategoryList














// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { url } from '../common/constants'
// import { useHistory, useLocation } from 'react-router-dom'


// const CategoryList = () => {
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

//             <ul className="list-inline-item ">
//                 {
//                     category.map((cat) => {
//                         return (

//                             <div className="list-inline-item">
//                                 <div className="cards">
//                                     <div className="card2 border border-2">
//                                         {/* <img src={props.imgsrc} className="card-img-top m-auto" alt="imgsrc" style={{height: "150px", width:"100px"}}/> */}
//                                         <a
//                                             onClick={() => {
//                                                 history.push(`/category/${cat.categoryName}`, { cat: cat })
//                                                 console.log(cat.categoryName);

//                                             }}
//                                         >
//                                             <img src={url + '/' + cat.categoryImage} className="card-img-top m-auto" alt="" /><br></br>
//                                             {/* <div className="card-body" style={{textAlign:"center"}}>
//                 <h6 className={props.title} style={{color:"black",fontStyle:"oblique"}} >     </h6> */}
//                                             <div className="card-body" style={{ textAlign: "center" }}>
//                                                 <h4 style={{ color: "black", fontStyle: "oblique" }} >{cat.categoryName}</h4>
//                                             </div>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>

//                         )

//                     })
//                 }
//             </ul>

//         </div>
//     )

// }

// export default CategoryList












// // import axios from 'axios'
// // import { useState, useEffect } from 'react'
// // import { Link } from 'react-router-dom'
// // import { url } from '../common/constants'


// // const Categorylist = () => {
// //     const [category, setCategory] = useState([])

// //     useEffect(()=>{
// //         getCategory()
// //     },[])

// //     const getCategory = ()=>{
// //         axios.get(url + '/category/').then((response)=>{
// //             const result = response.data
// //             setCategory(result)
// //         })
// //     }

// //     return (
// //         <div>
// //             {
// //                 console.log(category)
// //             }
// //             <ul  className="list-inline">
// //                 {
// //                     category.map((cat) =>{
// //                         return (
// //                             <li className="list-inline-item "><Link className="nav-link " to={cat.categoryName}>{cat.categoryName}</Link></li>
// //                         )
// //                     })
// //                 }
// //             </ul>
// //         </div>
// //     )

// // }

// // export default Categorylist

// // const Categorylist = () => {
// //     const [category, setCategory] = useState([])

// //     useEffect(()=>{
// //         getCategory()
// //     },[])

// //     const getCategory = ()=>{
// //         axios.get(url + '/category/').then((response)=>{
// //             const result = response.data
// //             setCategory(result)
// //         })
// //     }

// //     return (
// //         <div>
// //             {
// //                 console.log(category)
// //             }
// //             <ul  className="list-inline">
// //                 {
// //                     category.map((cat) =>{
// //                         return (
// //                             <li className="list-inline-item "><Link className="nav-link " to={cat.categoryName}>{cat.categoryName}</Link></li>
// //                         )
// //                     })
// //                 }
// //             </ul>
// //         </div>
// //     )

// // }

// // export default Categorylist