import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Users from "./pages/Users";
// import UserDetail from "./pages/UserDetails";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./pages/Navbar";
import "./App.css"
import { useState } from "react";
import OrderConfirmed from "./pages/OrderConfirmed";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="order-summery" element={<OrderConfirmed/>}></Route>
      </Routes>
      
      
    </>
  );
}

export default App;
