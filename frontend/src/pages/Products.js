import { useDispatch } from 'react-redux'
import { addToCartAction } from '../actions/cartActions'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = () => {
    axios.get(url + '/products/').then((response) => {
        const result = response.data
        setProducts(result)
    })
  }
  // used to send action(s)
  const dispatch = useDispatch()

  const addToCart = (product) => {
    dispatch(addToCartAction(product))
  }

  return (
    <div>
      <h1 className="myTable">Products</h1>

      <table className="table table-striped myTable">
        <thead>
          <tr>
           
            <th>id</th>
            <th>Name</th>
            <th>price</th>
            <th>image</th>
            <th>seller Id</th>
           
            

          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td> <img src={url+'/'+product.productImage}alt="" class="rounded"/></td>
                <td >{product.supplierId}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Products
