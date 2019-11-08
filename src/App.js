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
  const [formData, setFormData] = useState({ markets: [], cuisines: [] })

  useEffect(() => {
    // console.log("app reloaded")
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

  // const myWidget = window.cloudinary.createUploadWidget(
  //   {
  //     cloudName: keys.cloudName,
  //     uploadPreset: keys.uploadPreset
  //   },
  //   (error, result) => {
  //     if (!error && result && result.event === "success") {
  //       console.log("Done! Here is the image info: ", result.info)
  //     }
  //   }
  // )

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
      <div className="top-banner"> YUM BREAK</div>
      <div className="main">
        <Router>
          <HomePublic path="/" {...{ formData }} />
          <SignUp path="sign_up" {...{ login }} />
          <Login path="login" {...{ login }} />
          {user ? (
            <HomeAdmin
              path="my_food_trucks/*"
              {...{
                user,
                formData
              }}
            />
          ) : (
            () => navigate("/login")
          )}
        </Router>
      </div>
      <Navbar user={user} logout={logout} />
    </div>
  )
}

export default App
