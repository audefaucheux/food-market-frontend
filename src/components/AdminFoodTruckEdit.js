import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import { Link } from "@reach/router"

const AdminFoodTruckEdit = ({ id, selectedTruck, editFoodTruck, formData }) => {
  const foodTruckDetails = selectedTruck(id)

  const initialStates = (
    setName,
    setDescription,
    setProfilePicture,
    setTwitterAccount,
    setCuisine
  ) => {
    setName(foodTruckDetails.name)
    setDescription(foodTruckDetails.description)
    setProfilePicture(foodTruckDetails.profile_picture)
    setTwitterAccount(foodTruckDetails.twitter_account)
    setCuisine(foodTruckDetails.cuisines)
  }

  const sendAPIRequestFoodTruck = data => {
    editFoodTruck(id, data)
  }

  return (
    <div>
      <p>Edit food truck</p>
      <Link to="/my_food_trucks">BACK</Link>
      <FoodTruckForm
        {...{ initialStates, formData, sendAPIRequestFoodTruck }}
      />
    </div>
  )
}

export default AdminFoodTruckEdit
