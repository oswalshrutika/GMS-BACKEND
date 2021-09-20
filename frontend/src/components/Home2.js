import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'


const Home2 = () => {
    const [category, setCategory] = useState([])
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
        <div>
   
            <ul className="list-inline">
                {
                    category.map((cat) => {
                        return (
                            <div >
                                <li className="list-inline-item "><Link className="nav-link " to={cat.categoryName}>{cat.categoryName}</Link></li>
                                <br></br>
                                <ul className="list-inline">
                                    {/* {
                                        setProducts(cat.productItem) 
                                    } */}
                                    {
                                        cat.productItem.map((product)=>{
                                            return(
                                                <div>
                                                    <li className="list-inline-item ">{product.productName}  price = {product.productPrice}</li>
                                                </div>
                                            )
                                        })
                                    }

                                </ul>
                            </div>

                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Home2