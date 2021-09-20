import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { url } from '../common/constants';
import axios from 'axios';
import SellerNavbar from './SellerNavbar';

const Product = () => {

    const [productId, setProductId] = useState(0);
    const [category, setCategory] = useState(0);
    const[seller,setSeller]=useState(0)
    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [quantityPerUnit, setQuantityPerUnit] = useState(0)
    const [productPrice, setProductPrice] = useState(0)
    const [productDiscount, setProductDiscount] = useState(0)
    const [productRating, setProductRating] = useState(0)
    const [productImage, setProductImage] = useState(undefined)
   
   
    const history = useHistory()


    const [seller1,setSeller1] = useState(JSON.parse(sessionStorage.getItem('seller')))
  console.log(sessionStorage.getItem('seller'))

    const product = (() => {
        const body = new FormData();

        body.append("productId", productId);
        body.append("productName", productName);
        body.append("productDescription", productDescription);
        body.append("quantityPerUnit", quantityPerUnit);
        body.append("productPrice", productPrice);
        body.append("productDiscount", productDiscount);
        body.append("productRating", productRating);
        body.append("productImage", productImage);
        body.append("category", category);
        body.append("sellerId", seller1.sellerId);
       // body.append('sellerId', seller1.sellerId);


        // console.log("body :"+ body)
        
        // console.log("body :"+ body.seller)
        // console.log("body category :" + body.category)


        

        // const body = {category}
        axios.post(url + `/products/image`, body).then(response => {
            const result = response.data;

            console.log(result)
            if (result) {
                alert('succcess')
                // sessionStorage.setItem("seller", JSON.stringify({sellerId : result.sellerId}))
               history.push("/sellerDashboard")

               console.log(result.category)
               console.log(result.seller)
               console.log(seller1.sellerId)
            }

            else {
                alert('error')
            }
        })
    })


    return (
        <div>
            
            <div>
                <SellerNavbar />
              

                <div div className="container-fluid">
                    <div className="row">
                        <div className="customer_border col-lg-5 col-sm-12 border-end border-4 p-5">
                            <h1>Add Product</h1>
                            Category Id: <input
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className="form-control" type="text" required style={{ width: "400px" }} />


                            <input className="form-control" type="hidden" required style={{ width: "400px" }}
                                onChange={(e) => {
                                    setSeller(e.target.value)
                                 
                                }}  /><br />
                              
                            <input
                                onChange={(e) => {
                                    setProductId(e.target.value)
                                   
                                }}
                                className="form-control" type="hidden" required style={{ width: "400px" }} />

                            Product Name: <input
                                onChange={(e) => {
                                    setProductName(e.target.value)
                                }}
                                className="form-control" type="text" required style={{ width: "400px" }} />

                            Product Description: <input
                                onChange={(e) => {
                                    setProductDescription(e.target.value)
                                }}
                                className="form-control" type="text" required style={{ width: "400px" }} />

                            Quantity Per Unit: <input
                                onChange={(e) => {
                                    setQuantityPerUnit(e.target.value)
                                }}
                                className="form-control" type="text" required style={{ width: "400px" }} />

                            Product Price: <input
                                onChange={(e) => {
                                    setProductPrice(e.target.value)
                                }}
                                className="form-control" type="text" required style={{ width: "400px" }} />

                            Product Discount: <input
                                onChange={(e) => {
                                    setProductDiscount(e.target.value)
                                }}
                                className="form-control" type="text" required style={{ width: "400px" }} />

                            Product Rating: <input
                                onChange={(e) => {
                                    setProductRating(e.target.value)
                                }}
                                className="form-control" type="text" required style={{ width: "400px" }} />

                            productImage: <input
                                onChange={(e) => {
                                    setProductImage(e.target.files[0])
                                }}
                                className="form-control" type="file" required style={{ width: "400px" }} />




                            <br />
                            <button onClick={product} className="btn btn-success">Add Product</button>{'   '}{'   '}{'  '}{'  '}
                            <a href="/sellerDashboard" className="btn btn-success">Back To DashBoard</a>

                                {
                                    console.log(" category :"+category)
                                   
                                }
                                {
                                     console.log( " seller " +seller)
                                }
                        </div>

                    </div>
                </div>
   
            </div>
        </div>
    )
}
export default Product