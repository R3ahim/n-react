import React from 'react';
import './Cart.css'

const Cart = (cart) => {
    return (
        <div className='cart'>
              <h3>order summeray</h3>
       <p>selcted Itmes: {cart.cart.length}</p>
     
        </div>
    );
};

export default Cart;