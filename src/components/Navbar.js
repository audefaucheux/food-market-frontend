import React from "react"
import { Link } from "@reach/router"
import { Icon } from "semantic-ui-react"
import "../stylesheets/components/Navbar.css"

const Navbar = ({ user, logout }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <Icon name="home" size="large" />
      </Link>
      {user ? (
        <>
          <Link to="/my_food_trucks">
            <img
              src={require("../images/icons8-food-truck-64.png")}
              alt="My Food Trucks"
            />
          </Link>
          <Link to="/user_settings">
            <Icon name="setting" />
          </Link>
          <button onClick={logout}>Logout</button>
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
