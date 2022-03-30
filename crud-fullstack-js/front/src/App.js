import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Productlist from "./components/Productlist";
import Checkout from "./components/Checkout";

function App() {
  return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/productlist" element={<Productlist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </>
  );
}

export default App;
