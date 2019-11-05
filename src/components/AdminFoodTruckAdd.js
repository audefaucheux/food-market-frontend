import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import { Link } from "@reach/router"

const AdminFoodTruckAdd = ({ addFoodTruck, formData }) => {
  const initialStates = (
    setName,
    setDescription,
    setProfilePicture,
    setTwitterAccount,
    setCuisine
  ) => {
    setName("")
    setDescription("")
    setProfilePicture("")
    setTwitterAccount("")
    setCuisine([])
  }

  const sendAPIRequestFoodTruck = data => {
    addFoodTruck(data)
  }

  return (
    <>
      <Link to="/my_food_trucks">BACK</Link>
      <FoodTruckForm
        {...{ formData, sendAPIRequestFoodTruck, initialStates }}
      />
    </>
  )
}

export default AdminFoodTruckAdd
