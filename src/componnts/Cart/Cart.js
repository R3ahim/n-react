import React from 'react';
import './Cart.css'

const Cart = (cart) => {
    return (
        <div className='cart'>
              <h3>Order Summery</h3>
       <p>Selected itmes: {cart.cart.length}</p>
       <p>Total price: </p>
       <p>Total Shipping: </p>
       <p>Tax: </p>
       <h4>Grand Total: </h4>
     
        </div>
    );
};

export default Cart;