import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;
    // console.log(cart);
  console.log(props)
    let total =0;
    // console.log(total);
    let shipping= 0;
    let quantity = 0;

    for(const product of cart){
        // console.log(product);
        // console.log(product.quantity);
        quantity = quantity + product.quantity;
                         
    //    total = total + product.price;
    total=total + product.price * product.quantity;
    //    console.log(ca)
       shipping=shipping + product.shipping;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
              <h3>Order Summery</h3>
       <p>Selected itmes: {quantity}</p>
       <p>Total price: ${total} </p>
       <p>Total Shipping: ${shipping}</p>
       <p>Tax: ${tax} </p>
       <h4>Grand Total: ${grandTotal}</h4>
     
     
        </div>
    );
};

export default Cart;
