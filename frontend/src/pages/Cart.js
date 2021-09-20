import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from '../actions/cartActions'
import { url } from '../common/constants'
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()

  const removeFromCart = (product) => {
    dispatch(removeFromCartAction(product))
  }

  return (
    <div>
      <h1>My Cart</h1>

      <table className="table table-striped">
        <thead>
          <tr>
           <th>id</th>
            <th>Name</th>
            <th>price</th>
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
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Cart
