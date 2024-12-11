// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes,Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx"; // Corrected import
import Books from "./components/Books.jsx";
import Home from "./components/Home.jsx"; // New Home component;
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";


const App =  () => {
  
  return (
    <>
      <Header/>
     
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Content/>

      <Footer/> 
    </>
  );
};
export default App;
