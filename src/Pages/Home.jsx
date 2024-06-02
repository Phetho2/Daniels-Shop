import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import data from '../ProductsData/ProductsData'
import '../Pages/Home.css'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='product-container'>
          <div className='product'>
            {data.map((product) => (
              <div className='product-cart'>
                <Products 
                data={product}
              />
              </div>

            ))}
          </div>
        </div>
    </div>
  )
}

export default Home