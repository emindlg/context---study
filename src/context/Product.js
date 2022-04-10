import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';



const Product = ({product}) => {

    const {increasePrice, decreasePrice} = useContext(ProductContext)
    
   

    return (
    <>    
        <h1>Product</h1>
    <div>{product.product}</div>
    <div>{product.price}</div>
    <button onClick={() => increasePrice(product.id)}>Increase</button>
    <button onClick={() => decreasePrice(product.id)}>Increase</button>
    </>
  )
}

export default Product;