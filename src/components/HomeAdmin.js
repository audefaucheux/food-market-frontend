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

  const editFoodTruck = (id, updatedFoodTruck) => {
    API.updateFoodTruck(id, updatedFoodTruck).then(data => {
      if (data.errors) {
        alert(data.errors)
      } else if (data.food_truck) {
        console.log(data)
        setUserUpdate(data.food_truck)
        navigate("/my_food_trucks")
      }
    })
  }

  // find selected truck and replace null values with "" to make the form working
  const selectedTruck = id => {
    let truck = user.food_trucks.find(
      foodTruck => foodTruck.id === parseInt(id)
    )
    Object.keys(truck).forEach(key => {
      if (truck[key] === null) return (truck[key] = "")
    })
    return truck
  }

  return (
    <div id="home_admin">
      <p>HOME ADMIN PAGE</p>
      <Router>
        <AdminFoodTruckContainer path="/" {...{ user, editFoodTruck }} />
        <AdminFoodTruckAdd path="add" {...{ addFoodTruck }} />
        <AdminFoodTruckEdit
          path="edit/:id"
          {...{ selectedTruck, editFoodTruck }}
        />
      </Router>
    </div>
  )
}

export default HomeAdmin
