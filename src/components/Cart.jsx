/**
 * @description - Cart with all the items taht user added to checkout.
 */


import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import {Provider, useDispatch} from 'react-redux';

import store from "../utils/store";
import FoodCard from "./FoodCard";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items);
  const cartLength = useSelector(store => store.cart.cartLength);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice = totalPrice + item.count * item.price;
    })
    return totalPrice;
  }

  const handleCartSubmit = () => {
    console.log('Product selected', cartItems);
  }
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '50px', alignItems: 'center', justifyContent: 'center'}}>
            <h4>Cart ({cartLength})</h4>
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
        <div className="food-menu-items">
          {cartItems.map((item) => {
            return (
              item.count > 0 && <FoodCard {...item} key={item.id}/>
            )}
          )}
        </div>
        <div style={{marginTop: '20px'}}>
          <h4 style={{marginTop: '20px'}}>Total - {calculateTotalPrice()}</h4>
          {cartItems.length !== 0 && <button onClick={handleCartSubmit}>Proceed to pay</button>}
        </div>
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