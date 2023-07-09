import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import {Provider, useDispatch} from 'react-redux';

import store from "../utils/store";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '50px', alignItems: 'center', justifyContent: 'center'}}>
            <h4>Cart ({cartItems.length})</h4>
            {cartItems.length !== 0 && <button onClick={handleClearCart}>Clear Cart</button>}
        </div>
        {cartItems.length === 0 && 
            <div>
                <p>Cart is empty</p>
                <Link to='/'>
                    Back to home
                </Link>
            </div>
        }
        {cartItems.map((item) => {
            return (
                <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            )
        })}
    </div>
  );
};


const CartList = () => {
    return (
      <Provider store={store}>
       <Cart />
      </Provider>
    );
  };

export default CartList;