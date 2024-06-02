import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
import '../components/CartItem.css'

function CartItem(props) {
    const { cartItems, addToCart, removeFromCart, updatedCartItemCount} = useContext(ShopContext)
    const { id, title, price, image } = props.data
  return (
    <div className='cart-details-wrapper'>
      <div className="cart-details">
        <img src={image} alt="" />
        <span>{title}</span>
        <span>${price}</span>
      </div>

      <div className="count">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(e) => updatedCartItemCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}> + </button>
      </div>
        
    </div>
  )
}

export default CartItem