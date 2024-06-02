import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct } from '../redux/actions/productsActions'
import { removeSelectedProduct } from '../redux/actions/productsActions'


function ProductDetails() {
    const product = useSelector((state) => state.product)
    const { productId }  = useParams()
    const dispatch = useDispatch()
    const { image, title, price, category, description } = product;
     
    const fetchProductsDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log("Err: ", err);
        })
        console.log(response.data)
        dispatch(selectedProduct(response.data));

    
    }
   
    useEffect(() => {
        if (productId && productId !== "") fetchProductsDetails()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

  return (
    <div>
        {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
        ): (
            <div>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>{title}</div>
                <div>{price}</div>
                <div>{category}</div>
                <div>{description}</div>
            </div>
        )}
    </div>
  )
}

export default ProductDetails