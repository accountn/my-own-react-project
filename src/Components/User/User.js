import React from 'react';
import userData from '../../fakeData/fakeData.json';
import { useEffect, useState } from 'react';
import Show from '../Show/Show';
import Cart from '../Cart/Cart';


import './User.css';

const User = () => {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setUsers(userData);
    // console.log(userData);
  }, [])

  const handleAddProduct = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  }

  return (
    <div className="userDesign">
      <div className="product-container">
        {
          users.map(user => <Show
            handleAddProduct={handleAddProduct}
            user={user}
          ></Show>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default User;