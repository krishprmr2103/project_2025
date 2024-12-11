import axios from "axios";
import React, { useEffect, useState } from "react";

import { Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
const Header =  () => {
  return (
    <>
      
      <header>
            <div class="logo">Marvels Books Store</div>
            <nav>
                {/* <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/books">Books</a>
                <a className="nav-link" href="/about">About</a>
                <a className="nav-link" href="contact">About</a> */}
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/books'>Books Catagory</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>About</Link>
           
           </nav>
        </header>
    </>
  );
};
export default Header;
