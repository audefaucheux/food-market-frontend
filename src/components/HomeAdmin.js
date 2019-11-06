import React, { useState } from "react"
import { Router, navigate } from "@reach/router"
import AdminFoodTruckAdd from "./AdminFoodTruckAdd"
import AdminFoodTruckEdit from "./AdminFoodTruckEdit"
import AdminFoodTruckSchedule from "./AdminFoodTruckSchedule"
import AdminFoodTruckContainer from "../containers/AdminFoodTrucksContainer"
import API from "../adapters/API"

const HomeAdmin = ({ user, formData }) => {
  const [foodTrucks, setFoodTrucks] = useState(user.food_trucks)

  const addFoodTruck = newFoodTruck => {
    API.addFoodTruck(newFoodTruck).then(data => {
      if (data.errors) {
        alert(data.errors)
      } else if (data.food_truck) {
        setFoodTrucks([...foodTrucks, data.food_truck])
        navigate("/my_food_trucks")
      }
    })
  }

  const findAndReplace = (array, data) => {
    return array.map(element => {
      if (element.id === data.id) {
        return data
      } else {
        return element
      }
    })
  }

  const editFoodTruck = (id, updatedFoodTruck) => {
    API.updateFoodTruck(id, updatedFoodTruck).then(data => {
      if (data.errors) {
        alert(data.errors)
      } else if (data.food_truck) {
        console.log(data.food_truck)
        setFoodTrucks(findAndReplace(foodTrucks, data.food_truck))
        navigate("/my_food_trucks")
      }
    })
  }

  // find selected truck and replace null values with "" to make the form working
  const selectedTruck = id => {
    let truck = foodTrucks.find(foodTruck => foodTruck.id === parseInt(id))
    Object.keys(truck).forEach(key => {
      if (truck[key] === null) return (truck[key] = "")
    })
    return truck
  }

  return (
    <div id="home_admin">
      <p>HOME ADMIN PAGE</p>
      <Router>
        <AdminFoodTruckContainer path="/" {...{ foodTrucks, editFoodTruck }} />
        <AdminFoodTruckAdd path="add" {...{ addFoodTruck, formData }} />
        <AdminFoodTruckEdit
          path="edit/:id"
          {...{ selectedTruck, editFoodTruck, formData }}
        />
        <AdminFoodTruckSchedule path="schedule/:id" {...{ formData }} />
      </Router>
    </div>
  )
}

export default HomeAdmin
