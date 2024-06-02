import React, { createContext, useState } from 'react'
import data from '../ProductsData/ProductsData'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < data.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            let itemInfo = data.find((product) => product.id === Number(item))
            totalAmount += cartItems[item] * itemInfo.price
        }
        
        return totalAmount
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updatedCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }
    const contextValue = { cartItems, addToCart, removeFromCart, updatedCartItemCount, getTotalCartAmount }

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider