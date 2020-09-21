import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return <nav className="header">
        
        <Link to="/">  
    {/* Logo on the left -> img */}
    <img className ="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
    </Link>  
    {/*  Search box*/}

    <input type="text" className="header__searchInput"/>
    {/* 3 Links*/}
    {/* Basket icon with number*/}
    </nav>  
}

export default Header
