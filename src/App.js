import React, { useState, useEffect } from "react"
import "./stylesheets/App.css"
import { Route, Redirect } from "react-router-dom"
import API from "./adapters/API"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import HomePublic from "./components/HomePublic"
import SignUp from "./components/SignUp"
import AdminFoodTruckContainer from "./containers/AdminFoodTrucksContainer"

const App = ({ history }) => {
  const [user, setUser] = useState(null)
  const [userUpdate, setUserUpdate] = useState(null)
  const [formData, setFormData] = useState({ markets: [], cuisines: [] })

  useEffect(() => {
    API.getFormData().then(formData => {
      API.validateUser().then(data => {
        redirectUser(data)
        setFormData(formData)
      })
    })
  }, [userUpdate])

  const redirectUser = data => {
    if (data.errors) {
      history.push("/login")
      throw Error(data.errors)
    } else if (data.user) {
      setUser(data.user)
      history.push("/my_food_trucks")
    }
  }

  const login = user => {
    setUser(user)
    history.push("/my_food_trucks")
  }

  const logout = () => {
    API.logout()
    setUser(null)
    history.push("/login")
  }

  const addFoodTruck = newFoodTruck => {
    API.addFoodTruck(newFoodTruck).then(setUserUpdate)
  }

  const deleteFoodTruck = id => {
    API.deleteFoodTruck(id)
    setUserUpdate(id)
  }

  return (
    <div className="App">
      <Navbar user={user} logout={logout} />
      <Route key="/" exact path="/">
        <HomePublic {...{ formData }} />
      </Route>
      <Route key="/sign_up" exact path="/sign_up">
        <SignUp {...{ login }} />
      </Route>
      <Route key="/login" exact path="/login">
        <Login {...{ login }} />
      </Route>
      <Route key="/my_food_trucks" exact path="/my_food_trucks">
        {user ? (
          <AdminFoodTruckContainer
            {...{
              login,
              user,
              history,
              addFoodTruck,
              deleteFoodTruck
            }}
          />
        ) : (
          <Redirect to={"/login"} />
        )}
      </Route>
    </div>
  )
}

export default App
