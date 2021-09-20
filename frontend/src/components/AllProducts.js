import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useHistory, useLocation } from 'react-router-dom'
import SellerMenuBar from './SellerMenuBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SellerNavbar from './SellerNavbar'



const AllProducts = () => {
    const [category, setCategory] = useState([])
    const [seller, setSeller] = useState(JSON.parse(sessionStorage.getItem('seller')))

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {
        axios.get(url + '/category/').then((response) => {
            const result = response.data
            setCategory(result)

            console.log(result)


        })
    }



    return (
        <div className="image">
            < SellerNavbar />
            <tr>

                <td md={2}>
                    <div>
                        <SellerMenuBar />
                    </div>
                </td>
                <tr >
                    <h4 className="text-center">View All products</h4>
                    <br />
                    <br />
                    {

                        <table

                            className="table table-striped "
                            border='1' >
                            <thead>
                                <tr>

                                    <th scope="col" colSpan="1">
                                        Product Id
                                    </th>
                                    <th scope="col" colSpan="1">
                                        Product Name
                                    </th>
                                    <th scope="col" colSpan="1">
                                        Product Image
                                    </th>
                                    <th scope="col" colSpan="1">
                                        Quantity Per Unit
                                    </th>

                                    <th scope="col" colSpan="1">
                                        Product Price
                                    </th>
                                    <th scope="col" colSpan="1">
                                        Product Discount
                                    </th>
                                    <th scope="col" colSpan="1">
                                        Product Rating
                                    </th>
                                    <th scope="col" colSpan="1">
                                        Category Id
                                    </th>
                                    <th scope="col" colSpan="1">
                                        Seller Id
                                    </th>

                                </tr>
                            </thead>

<tbody>
{
                        category.map((cat) => {
                            return (

                                    cat.productItem.map((product) => {
                                        return (

                                    

                                                
                                                    product.supplierId == seller.sellerId && (
                                                        <tr>
                                                            <td >{product.productId}</td>

                                                            <td >{product.productName}</td>
                                                            <td>
                                                                <img src={url + '/' + product.productImage} alt="" class="rounded" height="150px" width="200px" />

                                                            </td>
                                                            <td >{product.quantityPerUnit}</td>
                                                            <td >{product.productPrice}</td>
                                                            <td >{product.productDiscount}</td>
                                                            <td >{product.productRating}</td>
                                                            <td >{cat.categoryId}</td>
                                                            <td >{product.supplierId}</td>
                                                        </tr>
                                                    ) 
                 
                                        )
                                    }))}
                        )}

                            </tbody>
                        </table>

                           
                        }
                
                </tr>
            </tr>
        </div>

    )




}



export default AllProducts









