import React, { useState, useEffect } from "react"
import { Router, navigate } from "@reach/router"
import AdminFoodTruckAdd from "./AdminFoodTruckAdd"
import AdminFoodTruckEdit from "./AdminFoodTruckEdit"
import AdminFoodTruckSchedule from "./AdminFoodTruckSchedule"
import AdminFoodTruckContainer from "../containers/AdminFoodTrucksContainer"
import API from "../adapters/API"
import Helpers from "../Helpers"

const HomeAdmin = ({ user, formData }) => {
  const [foodTrucks, setFoodTrucks] = useState([])
  const [errors, setErrors] = useState([])

  useEffect(() => {
    API.getUser(user.id).then(data => setFoodTrucks(data.food_trucks))
  }, [user.id])

  const addFoodTruck = newFoodTruck => {
    API.addFoodTruck(newFoodTruck).then(data => {
      if (data.errors) {
        setErrors(data.errors)
      } else if (data.food_truck) {
        setFoodTrucks([...foodTrucks, data.food_truck])
        navigate("/my_food_trucks")
      }
    })
  }

  const editFoodTruck = (id, updatedFoodTruck) => {
    API.updateFoodTruck(id, updatedFoodTruck).then(data => {
      if (data.errors) {
        setErrors(data.errors)
      } else if (data.food_truck) {
        setFoodTrucks(Helpers.findAndReplace(foodTrucks, data.food_truck))
        navigate("/my_food_trucks")
      }
    })
  }

  // find selected truck and replace null values with "" to make the form working
  const selectedTruck = id => {
    let truck = foodTrucks.find(foodTruck => foodTruck.id === parseInt(id))
    if (foodTrucks.length !== 0) {
      Object.keys(truck).forEach(key => {
        if (truck[key] === null) return (truck[key] = "")
      })
      return truck
    }
  }

  return (
    <Router primary={false}>
      <AdminFoodTruckContainer path="/" {...{ foodTrucks, editFoodTruck }} />
      <AdminFoodTruckAdd
        path="add"
        {...{ addFoodTruck, formData, errors, setErrors }}
      />
      <AdminFoodTruckEdit
        path="edit/:id"
        {...{ selectedTruck, editFoodTruck, formData, errors, setErrors }}
      />
      <AdminFoodTruckSchedule
        path="schedule/:id"
        {...{ formData, selectedTruck, errors, setErrors }}
      />
    </Router>
  )
}

export default HomeAdmin
