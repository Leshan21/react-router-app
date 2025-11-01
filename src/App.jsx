import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import "./App.css"
import { useState } from "react";
import OrderConfirmed from "./pages/OrderConfirmed";
import NoMatchRoute from "./pages/NoMatchRoute";
import Product from "./pages/Product";
import Features from "./pages/Features";
import Details from "./pages/Details";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="order-summery" element={<OrderConfirmed/>}></Route>
        <Route path="product" element={<Product/>}>
          <Route path="features" element={<Features/>}></Route>
          <Route path="Details" element={<Details/>}></Route>
        </Route>


        <Route path="*" element={<NoMatchRoute/>}></Route>
      </Routes>
      
      
    </>
  );
}

export default App;
