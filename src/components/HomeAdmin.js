import React from "react"
import { Router, navigate } from "@reach/router"
import AdminFoodTruckAdd from "./AdminFoodTruckAdd"
import AdminFoodTruckEdit from "./AdminFoodTruckEdit"
import AdminFoodTruckContainer from "../containers/AdminFoodTrucksContainer"
import API from "../adapters/API"

const HomeAdmin = ({ user, setUserUpdate }) => {
  const addFoodTruck = newFoodTruck => {
    API.addFoodTruck(newFoodTruck).then(data => {
      if (data.errors) {
        alert(data.errors)
      } else if (data.food_truck) {
        setUserUpdate(data.food_truck)
        navigate("/my_food_trucks")
      }
    })
  }

  const selectedTruck = id => {
    return user.food_trucks.find(foodTruck => foodTruck.id === parseInt(id))
  }

  return (
    <div id="home_admin">
      <p>HOME ADMIN PAGE</p>
      <Router>
        <AdminFoodTruckContainer path="/" {...{ user }} />
        <AdminFoodTruckAdd path="add" {...{ addFoodTruck }} />
        <AdminFoodTruckEdit path="edit/:id" {...{ selectedTruck }} />
      </Router>
    </div>
  )
}

export default HomeAdmin
