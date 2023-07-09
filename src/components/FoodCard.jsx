/**
 * @description - Component to show all products that we have
 */

import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { addItem, decreaseItem, increaseItem } from '../utils/cartSlice';

const FoodCard = ({name, price, img, id}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items);

    const handleAddItemToCart = (cart) => {
        dispatch(addItem(cart));
    }

    const handleIncreaseItem = (cart) => {
        dispatch(increaseItem(cart));
    }

    const handleDecreaseItem = (cart) => {
        dispatch(decreaseItem(cart))
    }

    const countItemInCart = cartItems.reduce((count, item) => {
        if (item.id === id) {
          return item.count;
        }
        return count;
      }, 0);

    return (
        <div className='menu-card-container'>
            <img src = {img} className='menu-card-img'/>
            <div className='menu-card'>
                <p style={{fontSize: '14px'}}>{name}</p>
                <p style={{fontSize: '12px'}}>₹{price}</p>
                {countItemInCart < 1 ? <button className='menu-add-to-cart-btn' onClick={()=> handleAddItemToCart({id, name, price, count:1})}>Add to cart</button> :
                        <div className='counter'>
                            <div className='counter-btn' onClick={()=> handleIncreaseItem({id,name, price})}>+</div>
                            <div className='count'>{countItemInCart}</div>
                            <div className='counter-btn' onClick={()=> handleDecreaseItem({id,name,price})}>-</div>
                        </div>
                }
            </div>
        </div>
    );
}

export default FoodCard;