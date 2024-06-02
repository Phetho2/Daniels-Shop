import React, { useContext } from 'react'
import data from '../ProductsData/ProductsData'
import Products from '../components/Products'
import { ShopContext } from '../context/shop-context'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import '../Pages/Cart.css'

function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
        <div className="header">
            <h1>Your Cart items</h1>
        </div>
        <div className="cartItems">
            {data.map((product) => (
                cartItems[product.id] !== 0 && <><CartItem data={product} /></>
            ))}
        </div>
        {totalAmount > 0 ? 
            <div className="checkout">
                <span>Subtotal: <span className='sub-total'>${totalAmount}</span></span>
                <Link to="/">
                    <button>Continue shopping</button>
                </Link>
                <button>Checkout</button>
            </div>:
                <div className='empty-cart'>
                    <h1 className="header">Your cart is currently empty</h1>
                    <Link to="/">
                        <button>Go to shopping</button>
                    </Link>
                </div>}
    </div>
  )
}

export default Cart