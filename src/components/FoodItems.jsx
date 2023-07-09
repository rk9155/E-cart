
/**
 * @description - Food Items conatiner that contains all cards.
 */

import React from 'react';
import FoodCard from './FoodCard';

import { restaurantData } from '../utils/restaurantData';

const FoodItems = () => {
    return (
        restaurantData.map((foodData)=> {
            return <FoodCard {...foodData} key={foodData.id}/>
        })
    );
}

export default FoodItems;