import React, { useState, useEffect } from "react"
import "./stylesheets/App.css"
import { Router, navigate } from "@reach/router"
import API from "./adapters/API"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import HomePublic from "./components/HomePublic"
import SignUp from "./components/SignUp"
import HomeAdmin from "./components/HomeAdmin"
import UserSettingsMenu from "./containers/UserSettingsMenu"

const App = () => {
  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({ markets: [], cuisines: [] })
  const [globalLoading, setGlobalLoading] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(window.location.pathname)

  useEffect(() => {
    API.getFormData().then(formData => {
      API.validateUser().then(data => {
        if (data.errors || data.error) {
          handleRedirect("/login")
          alert(data.error || data.errors)
        } else if (data.user) {
          setUser(data.user)
          handleRedirect("/my_food_trucks")
        }
        setFormData(formData)
      })
    })
  }, [])

  const login = user => {
    setUser(user)
    handleRedirect("/my_food_trucks")
  }

  const logout = () => {
    API.logout()
    setUser(null)
    handleRedirect("/login")
  }

  const handleRedirect = path => {
    setButtonClicked(path)
    navigate(path)
  }

  return (
    <div className="app">
      <div className="top-banner">
        <img
          src={require("./images/logo-bonfire-no-background-no-text.png")}
          alt="logo-with-background"
        />
        <h2>Yum Break</h2>
      </div>
      <div className="main">
        <Router primary={false}>
          <HomePublic
            path="/"
            {...{ formData, globalLoading, setGlobalLoading, handleRedirect }}
          />
          {user && (
            <HomeAdmin
              path="my_food_trucks/*"
              {...{
                user,
                formData,
                globalLoading,
                setGlobalLoading,
                handleRedirect
              }}
            />
          )}
          {user && (
            <UserSettingsMenu path="user_settings/*" {...{ user, logout }} />
          )}
          <SignUp path="sign_up" {...{ login }} />
          <Login path="login" {...{ login, handleRedirect }} />
        </Router>
      </div>
      <Navbar {...{ user, buttonClicked, setButtonClicked, handleRedirect }} />
    </div>
  )
}

export default App
