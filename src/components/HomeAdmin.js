import React, { useState, useEffect } from "react"
import { Router } from "@reach/router"
import AdminFoodTruckAdd from "./AdminFoodTruckAdd"
import AdminFoodTruckEdit from "./AdminFoodTruckEdit"
import AdminFoodTruckSchedule from "./AdminFoodTruckSchedule"
import AdminFoodTruckContainer from "../containers/AdminFoodTrucksContainer"
import API from "../adapters/API"

const HomeAdmin = ({ user, formData, handleRedirect }) => {
  const [foodTrucks, setFoodTrucks] = useState([])

  useEffect(() => {
    API.getUser(user.id).then(data => setFoodTrucks(data.food_trucks))
  }, [user.id])

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
      <AdminFoodTruckContainer
        path="/"
        {...{ foodTrucks, setFoodTrucks, handleRedirect }}
      />
      <AdminFoodTruckAdd
        path="add"
        {...{ formData, foodTrucks, setFoodTrucks, handleRedirect }}
      />
      <AdminFoodTruckEdit
        path="edit/:id"
        {...{
          selectedTruck,
          formData,
          foodTrucks,
          setFoodTrucks,
          handleRedirect
        }}
      />
      <AdminFoodTruckSchedule
        path="schedule/:id"
        {...{ formData, selectedTruck }}
      />
    </Router>
  )
}

export default HomeAdmin
