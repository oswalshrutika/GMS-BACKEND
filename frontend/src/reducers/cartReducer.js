const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'add-to-cart':
      return [...state, action.product]

    
      // return state.filter((p) => p.productId != action.product.productId)
      // remove the product from cartItems
      
  
      case 'remove-from-cart':
        const update = [...state];
        update.splice(update.indexOf(action.product), 1);
        return update
     
    default:
      return state
  }
}



export default cartReducer
