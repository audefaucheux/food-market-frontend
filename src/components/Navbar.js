import React from "react"
import { Link } from "@reach/router"
import "../stylesheets/components/Navbar.css"

const Navbar = ({ user, logout }) => {
  const navbarItems = [
    { title: "Home", path: "/", loggedIn: false },
    { title: "Sign Up", path: "/sign_up", loggedIn: false },
    { title: "Login", path: "/login", loggedIn: false },
    { title: "My Food Trucks", path: "/my_food_trucks", loggedIn: true }
  ]

  // const filterNavbar = navbarItems => {
  //   return navbarItems.filter(item => item.loggedIn === !!user)
  // }

  // const displayNavbar = filterNavbar(navbarItems)

  return (
    <div>
      <div className="navbar">
        {navbarItems.map(item => (
          <Link key={item.title} to={item.path}>
            {item.title}
          </Link>
        ))}
        {user ? <button onClick={logout}>Logout</button> : null}
      </div>
      {/* <p>{user && `Hello ${user.email}`}</p> */}
    </div>
  )
}

export default Navbar
