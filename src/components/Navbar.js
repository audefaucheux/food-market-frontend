import React from "react"
import { Icon } from "semantic-ui-react"
import "../stylesheets/components/Navbar.css"

const Navbar = ({ user, buttonClicked, handleRedirect }) => {
  const navbarItems = [
    {
      active: buttonClicked === "/" ? "active" : "",
      hidden: "",
      path: "/",
      icon: "home",
      text: "Home"
    },
    {
      active: buttonClicked === "/my_food_trucks" ? "active" : "",
      hidden: !user ? "hidden" : "",
      path: "/my_food_trucks",
      icon: "truck",
      text: "My Food Trucks"
    },
    {
      active: buttonClicked === "/user_settings" ? "active" : "",
      hidden: !user ? "hidden" : "",
      path: "/user_settings",
      icon: "setting",
      text: "Settings"
    },
    {
      active: buttonClicked === "/login" ? "active" : "",
      hidden: user ? "hidden" : "",
      path: "/login",
      icon: "sign in",
      text: "Login"
    },
    {
      active: buttonClicked === "/sign_up" ? "active" : "",
      hidden: user ? "hidden" : "",
      path: "/sign_up",
      icon: "signup",
      text: "Sign Up"
    }
  ]

  return (
    <div className="navbar">
      {navbarItems.map(item => {
        return (
          <div
            key={item.path}
            className={`navbar-item ${item.active} ${item.hidden}`}
            onClick={() => handleRedirect(item.path)}
          >
            <div>
              <Icon name={item.icon} />
            </div>
            <div>{item.text}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Navbar
