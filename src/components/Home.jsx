/**
 * @description - Component to show all products that we have
 */

import React from "react";
import FoodItems from './FoodItems';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title">
        <h4>New Products</h4>
      </div>
      <div className="food-menu-items">
        <FoodItems />
      </div>
    </div>
  );
};

export default Home;
