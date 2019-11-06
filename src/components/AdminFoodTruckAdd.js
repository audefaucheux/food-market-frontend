import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import { Link } from "@reach/router"

const AdminFoodTruckAdd = ({ addFoodTruck, formData }) => {
  const initialStates = (
    setName,
    setDescription,
    setProfilePicture,
    setTwitterAccount,
    setCuisines
  ) => {
    setName("")
    setDescription("")
    setProfilePicture("")
    setTwitterAccount("")
    setCuisines([])
  }

  return (
    <>
      <Link to="/my_food_trucks">BACK</Link>
      <FoodTruckForm
        {...{ formData, initialStates }}
        sendAPIRequest={addFoodTruck}
      />
    </>
  )
}

export default AdminFoodTruckAdd
