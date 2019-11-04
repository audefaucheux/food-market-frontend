import React, { useState, useEffect } from "react"
import "./stylesheets/App.css"
import { Router, navigate } from "@reach/router"
import API from "./adapters/API"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import HomePublic from "./components/HomePublic"
import SignUp from "./components/SignUp"
import HomeAdmin from "./components/HomeAdmin"

const App = props => {
  const [user, setUser] = useState(null)
  const [userUpdate, setUserUpdate] = useState(null)
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
  }, [userUpdate])

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
    <div className="App">
      <Navbar user={user} logout={logout} />
      <Router>
        <HomePublic path="/" {...{ formData }} />
        <SignUp path="sign_up" {...{ login }} />
        <Login path="login" {...{ login }} />
        {user ? (
          <HomeAdmin
            path="my_food_trucks/*"
            {...{
              login,
              user,
              setUserUpdate
            }}
          />
        ) : (
          () => navigate("/login")
        )}
      </Router>
    </div>
  )
}

export default App
