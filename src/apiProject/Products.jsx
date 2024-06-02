import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productsActions'
import { Link } from 'react-router-dom'

function ProductListing() {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err: ", err);
        })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className='products-container' key={id}>
               <Link to={`/product/${id}`}>
                <div className="product">
                    <img src={image} alt="" />
                </div>
                <div className="product-content">
                    <div>{title}</div>
                    <div>{price}</div>
                    <div>{category}</div>
                </div>
                </Link>
            </div>
  )});

        return (
            <>
            {renderList}
            </>
        )
}

export default ProductListing