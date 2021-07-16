import React from 'react';
import Newcart from '../Newcart/Newcart';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        const product = cart[i]
        total = total + product.cost;
    }
       
    return (
        <div>
            <h1>length: {cart.length}</h1>
            <h3>Total cost: {total}</h3>
            {
                cart.map(cart => <Newcart cart={cart}></Newcart>)
            }
        </div>
    );
};

export default Cart;