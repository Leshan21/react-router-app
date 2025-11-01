import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users"
import UserDetail from "./pages/UserDetails"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div>
        <h1>My Router App </h1>

        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/about">About</Link> | {" "}
          <Link to="/users">Users</Link> | {" "}
          <Link to="/dashboard">DashBoard</Link> | {" "}
          <Link to="/login">Login</Link>
        </nav>

        <hr />

        
      </div>
    </>  
  )
}

export default App
