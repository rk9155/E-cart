
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { addItem } from '../utils/cartSlice';

const FoodCard = ({name, price, img, id}) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items);

    const checkIsItemInCart = () => {
        let count = 0;
        cartItems.forEach((item)=> {
            if(item.id === id) {
                count++;
            }
        })
        return count;
    }

    const handleAddItemToCart = (cart) => {
        dispatch(addItem(cart));
    }

    const countItemInCart = checkIsItemInCart();

    return (
        <div className='menu-card-container'>
            <img src = {img} className='menu-card-img'/>
            <div className='menu-card'>
                <p style={{fontSize: '14px'}}>{name}</p>
                <p style={{fontSize: '12px'}}>₹{price}</p>
                {countItemInCart < 1 ? <button className='menu-add-to-cart-btn' onClick={()=> handleAddItemToCart({id, name, price})}>Add to cart</button> :
                        <button className='menu-add-to-cart-btn' onClick={()=> handleAddItemToCart({id, name, price})}>+ {countItemInCart} </button>}
            </div>
        </div>
    );
}

export default FoodCard;