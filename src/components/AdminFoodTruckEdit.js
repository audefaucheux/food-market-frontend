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
    let cuisineIdArray = foodTruckDetails.cuisines.map(cuisine =>
      JSON.stringify(cuisine.id)
    )
    setCuisine(cuisineIdArray)
  }

  const sendAPIRequest = data => {
    editFoodTruck(id, data)
  }

  return (
    <div>
      <p>Edit food truck</p>
      <Link to="/my_food_trucks">BACK</Link>
      <FoodTruckForm {...{ initialStates, formData, sendAPIRequest }} />
    </div>
  )
}

export default AdminFoodTruckEdit
