/**
 * @description - Header component with company logo and cart
 */

import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

import Logo from "../logo.png"
import HeaderCard from "./HeaderCard";

const Header = () => {
  const cartLength = useSelector(store => store.cart.cartLength);

  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img src={Logo} width={100} />
        </Link>
        <Link to="/cart">
          <p> Cart - {cartLength}</p>
        </Link>
      </div>
      <div className="header-items-container">
        <div className="header-items">
          <HeaderCard/>
        </div>
      </div>
    </div>
  );
};

export  default Header;
