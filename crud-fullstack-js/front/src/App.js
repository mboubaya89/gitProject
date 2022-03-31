import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Content from "./components/Content";
import Inventory from "./components/Inventory";
import Checkout from "./components/Checkout";
import Addproduct from "./components/Addproduct";

function App() {
  return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/productlist" element={<Content />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/addproduct" element={<Addproduct />} />

        </Routes>
      </>
  );
}

export default App;
