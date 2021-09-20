// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { url } from '../common/constants'






import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useHistory, useLocation } from 'react-router-dom'


const CategoryNavbar = () => {
    const history = useHistory()
    const [category, setCategory] = useState([])

    useEffect(()=>{
        getCategory()
    },[])

    const getCategory = ()=>{
        axios.get(url + '/category/').then((response)=>{
            const result = response.data
            setCategory(result)
        })
    }

    return (
        <div>
            {
                console.log(category)
            }
            <ul  className="list-inline">
                {
                    category.map((cat) =>{
                        return (
                     <div className="navcard">
                 <div className="navcard2 ">
                         
                             {/* <li className="list-inline-item "><Link className="nav-link " to={cat.categoryName}>{cat.categoryName}</Link></li> */}
                            <li className="list-inline-item ">   <a className="nav-link "
                            onClick={() => {
                                history.push(`/category/${cat.categoryName}`, { cat: cat })
                                console.log(cat.categoryName);
                                 
                            }}>{cat.categoryName}</a></li>
                           </div></div> )
                    })
                }
            </ul>
        </div>
    )

}

export default CategoryNavbar












// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { url } from '../common/constants'


// const CategoryNavbar = () => {
//     const [category, setCategory] = useState([])

//     useEffect(()=>{
//         getCategory()
//     },[])

//     const getCategory = ()=>{
//         axios.get(url + '/category/').then((response)=>{
//             const result = response.data
//             setCategory(result)
//         })
//     }

//     return (
//         <div>
//             {
//                 console.log(category)
//             }
//             <ul  className="list-inline">
//                 {
//                     category.map((cat) =>{
//                         return (
//                             <li className="list-inline-item "><Link className="nav-link " to={cat.categoryName}>{cat.categoryName}</Link></li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )

// }

// export default CategoryNavbar

// const CategoryNavbar = () => {
//     const [category, setCategory] = useState([])

//     useEffect(()=>{
//         getCategory()
//     },[])

//     const getCategory = ()=>{
//         axios.get(url + '/category/').then((response)=>{
//             const result = response.data
//             setCategory(result)
//         })
//     }

//     return (
//         <div>
//             {
//                 console.log(category)
//             }
//             <ul  className="list-inline">
//                 {
//                     category.map((cat) =>{
//                         return (
//                             <li className="list-inline-item "><Link className="nav-link " to={cat.categoryName}>{cat.categoryName}</Link></li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )

// }

// export default CategoryNavbar