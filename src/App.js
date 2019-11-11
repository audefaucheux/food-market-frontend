import React, { useState, useEffect } from "react"
import "./stylesheets/App.css"
import { Router, navigate } from "@reach/router"
import API from "./adapters/API"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import HomePublic from "./components/HomePublic"
import SignUp from "./components/SignUp"
import HomeAdmin from "./components/HomeAdmin"
// import UserSettingsForm from "./components/UserSettingsForm"
import UserSettingsMenu from "./containers/UserSettingsMenu"

const App = props => {
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({ markets: [], cuisines: [] })

  useEffect(() => {
    API.getFormData().then(formData => {
      API.validateUser().then(data => {
        if (data.errors) {
          navigate("/login")
          alert(data.errors)
        } else if (data.user) {
          setUser(data.user)
          // navigate("/my_food_trucks")
        }
        setFormData(formData)
      })
    })
  }, [])

  const login = user => {
    setUser(user)
    navigate("/my_food_trucks")
  }

  const logout = () => {
    API.logout()
    setUser(null)
    navigate("/login")
  }

  return (
    <div className="app">
      <div className="top-banner"> YUM BREAK</div>
      <div className="main">
        {user ? (
          <Router primary={false}>
            <HomePublic path="/" {...{ formData }} />
            <HomeAdmin path="my_food_trucks/*" {...{ user, formData }} />
            {/* <UserSettingsForm path="user_settings" {...{ user, logout }} /> */}
            <UserSettingsMenu path="user_settings/*" {...{ user, logout }} />
          </Router>
        ) : (
          <Router primary={false}>
            <HomePublic path="/" {...{ formData }} />
            <SignUp path="sign_up" {...{ login }} />
            <Login path="login" {...{ login }} />
          </Router>
        )}
      </div>
      <Navbar {...{ user }} />
    </div>
  )
}

export default App
