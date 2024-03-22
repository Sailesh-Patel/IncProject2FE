import React, { useState } from "react";
import "./Navbar.css";
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DarkMode from "../DarkMode/DarkMode";
import Logo from '../../Business.png';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className="navbar">
{/* <img className="site_logo" src={Logo} width="100px" ></img> */}

        <a className="title" href="/">Patryk Cash & Carry</a>

        <div className="menu">
            <img className="menuBtn"
            
            src={menuOpen
                ? "/assets/navbar/closeIcon.png"
                : "/assets/navbar/menuIcon.png"      
            }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                ></img>
            <ul 
            className={`${"menuItems"} ${menuOpen && "menuOpen"}`}
            
            onClick={() => setMenuOpen(false)}
            >
                <li><a href="/home">Home</a></li>
                <li><a href="/items">Items</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/basket">
                <ShoppingBasketIcon />  
             {/* <span className="header_optionLineTwo header_basketCount">{.length}</span> */}                  
                    </a></li>
                <li><a href="/basket">
                <DarkMode />
                    </a></li>
            </ul>
        </div>
    </nav>;
};



