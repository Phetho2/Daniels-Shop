import React, { useContext } from 'react'
import '../components/Products.css'
import { ShopContext } from '../context/shop-context'

function Products(props) {
  const {id, title, price, image} = props.data
  const { addToCart, cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  return (
    <div className='product-container'>
        <div className="product-cart" key={id}>
            <img src={image} alt="" height="50px"/>
            <span><b>{title}</b></span>
            <p>Price: ${price}</p>
            <button onClick={() => addToCart(id)}>
                Add to cart {cartItemAmount > 0 && <>({
                cartItemAmount
            })</>}
            </button>
        </div>
    </div>
  )
}

export default Products