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
  const [foodTrucks, setFoodTrucks] = useState([])
  const [foodTruckUpdate, setFoodTruckUpdate] = useState(null)

  // Get all food trucks for Public Home Page
  // Get user info when reloading the page if user didn't logout
  // Reload if one of the food truck is updated
  useEffect(() => {
    API.getFoodTrucks().then(foodTrucks => {
      API.validateUser()
        .then(data => {
          if (data.errors) {
            history.push("/login")
            throw Error(data.errors)
          } else if (data.user) {
            setUser(data.user)
            history.push("/my_food_trucks")
          }
          setFoodTrucks(foodTrucks)
        })
        .catch(alert)
    })
  }, [foodTruckUpdate, history])

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
    API.addFoodTruck(newFoodTruck).then(data => setFoodTruckUpdate(data))
  }

  const deleteFoodTruck = id => {
    API.deleteFoodTruck(id)
    setFoodTruckUpdate(id)
  }

  return (
    <div className="App">
      <Navbar user={user} logout={logout} />
      <Route key="/" exact path="/">
        <HomePublic {...{ foodTrucks }} />
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
            {...{ login, user, history, addFoodTruck, deleteFoodTruck }}
          />
        ) : (
          <Redirect to={"/login"} />
        )}
      </Route>
    </div>
  )
}

export default App
