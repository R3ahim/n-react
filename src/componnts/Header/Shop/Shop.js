import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart} from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {
    const [products,setProuucts]=useState([]);
    const [cart,setCart]=useState([])
    useEffect(()=>{
       
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProuucts(data)
        )
    },[]);

    useEffect(()=>{
        
    },[])
    const handleAddToCart=(product)=>{
        // console.log(product); 
        // i am push product on cart 
        // cart.push(product)
        const newCart =[...cart,product];
        setCart(newCart);
        console.log(newCart);

        addToDb(product.id)
    };


    // useEffect(()=>{
    //     const storedCart= getStoredCart();
    //     const savedCart =[];

    //     for(const id in storedCart){
    //        const addedProduct = products.find(product=>product.id===id);
    //        if(addedProduct){
    //             const quantity=storedCart[id];
    //             addedProduct.quantity=quantity;
    //            savedCart.push(addedProduct)
    //        }
    //     }
    //     setCart(savedCart)
    // },[products])
    return (
        <div className='shop-container'>
        <div className="products-container">
        {
            products.map(product=> 
            <Product
             key={product.id}
             product={product}
             handleAddToCart={handleAddToCart}
             >

            </Product>)
        }
     
        </div>
        <div className='cart-container'>
      <Cart cart={cart}></Cart>
     

        </div>
        </div>
    );
};

export default  Shop;