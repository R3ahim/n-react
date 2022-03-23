import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ( {product,handleAddToCart}) => {
    // const {product,handleAddToCart}=props
    const {name,img,seller,price,ratings}=product;
   console.log(product);
    return (
        <div className='product'>
             <img src={img} alt="" />

             <div className='product-info'>
             <p className='product-name' style={{fontSize:'20px'}}>{name}</p>
             <p>price: ${price}</p>
             <p><small>seller: {seller}</small></p>
             <p>ratings: {ratings}</p>
             </div>
             <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                 <p className='btn-text'>Add to cart</p>
                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
             </button> 
        </div>
        

    );
    
};

export default Product;