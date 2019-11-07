import React from "react"
import { Link } from "@reach/router"
import "../stylesheets/components/Navbar.css"

const Navbar = ({ user, logout }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={require("../images/icons8-home-96.png")} alt="Home" />
      </Link>
      {user ? (
        <>
          <Link to="/my_food_trucks">
            <img
              src={require("../images/icons8-food-truck-64.png")}
              alt="My Food Trucks"
            />
          </Link>

          <img
            onClick={logout}
            src={require("../images/icons8-exit-52.png")}
            alt="Logout"
          />
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> <Link to="/sign_up">Sign Up</Link>
        </>
      )}
    </div>
  )
}

export default Navbar
