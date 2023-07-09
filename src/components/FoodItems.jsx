
import React from 'react';
import FoodCard from './FoodCard';


const restaurantItems = [
    {
      name: "Banana Muffin",
      price: 250,
      id: "1",
      isVeg: "true",
      img: "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/SFS_Banana_Muffins_with_Sesame_and_Chocolate_Chunks_308_zessu8",
    },
    {
      name: "Blueberry Scone",
      price: 305,
      id: "2",
      isVeg: "true",
      img: "https://www.starbucks.tt/wp-content/uploads/2017/05/blueberry-scone.jpg",
    },
    {
      name: "Carrot Cake",
      price: 250,
      id: "3",
      isVeg: "true",
      img: "https://cookingfrog.com/wp-content/uploads/2023/02/Starbucks-Carrot-Cake-Copycat-Recipe.jpg",
    },
    {
      name: "Home-Made Cookies",
      price: 350,
      id: "4",
      img: "https://hips.hearstapps.com/delish/assets/16/07/1455633167-delish-copycat-starbucks-cookies-beauty.jpg",
    },
    {
        name: "Banana Muffin",
        price: 250,
        id: "5",
        isVeg: "true",
        img: "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/SFS_Banana_Muffins_with_Sesame_and_Chocolate_Chunks_308_zessu8",
      },
      {
        name: "Blueberry Scone",
        price: 305,
        id: "6",
        isVeg: "true",
        img: "https://www.starbucks.tt/wp-content/uploads/2017/05/blueberry-scone.jpg",
      },
      {
        name: "Carrot Cake",
        price: 250,
        id: "7",
        isVeg: "true",
        img: "https://cookingfrog.com/wp-content/uploads/2023/02/Starbucks-Carrot-Cake-Copycat-Recipe.jpg",
      },
      {
        name: "Home-Made Cookies",
        price: 350,
        id: "8",
        img: "https://hips.hearstapps.com/delish/assets/16/07/1455633167-delish-copycat-starbucks-cookies-beauty.jpg",
      },
  ];

const FoodItems = () => {
    return (
        restaurantItems.map((foodData)=> {
            return <FoodCard {...foodData} key={foodData.id}/>
        })
    );
}

export default FoodItems;