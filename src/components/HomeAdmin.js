import React from "react"
import { Router, Link } from "@reach/router"
import AdminFoodTruckForm from "./AdminFoodTruckForm"
import AdminFoodTruckContainer from "../containers/AdminFoodTrucksContainer"
import API from "../adapters/API"

const HomeAdmin = ({ user, setUserUpdate }) => {
  const addFoodTruck = newFoodTruck => {
    API.addFoodTruck(newFoodTruck).then(data => {
      if (data.errors) {
        alert(data.errors)
      } else if (data.food_truck) {
        setUserUpdate(data.food_truck)
      }
    })
  }

  return (
    <div id="home_admin">
      <p>HOME ADMIN PAGE</p>
      <Router>
        <AdminFoodTruckContainer path="/" {...{ user }} />
        <AdminFoodTruckForm path="add" />
      </Router>
    </div>
  )
}

export default HomeAdmin
