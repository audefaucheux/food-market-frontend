import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import Helpers from "../Helpers"

const AdminFoodTruckEdit = ({ id, selectedTruck, editFoodTruck, formData }) => {
  const foodTruckDetails = selectedTruck(id)

  const initialStates = (
    setName,
    setDescription,
    setProfilePicture,
    setTwitterAccount,
    setCuisines
  ) => {
    // if (foodTruckDetails && !globalLoading) {
    setName(foodTruckDetails.name)
    setDescription(foodTruckDetails.description)
    setProfilePicture(foodTruckDetails.profile_picture)
    setTwitterAccount(foodTruckDetails.twitter_account)
    let cuisineIdArray = foodTruckDetails.cuisines.map(cuisine =>
      JSON.stringify(cuisine.id)
    )
    setCuisines(cuisineIdArray)
    // }
  }

  const sendAPIRequest = data => {
    return editFoodTruck(id, data)
  }

  return (
    <div>
      {Helpers.backButton()}
      {/* {globalLoading && Helpers.showLoader()} */}
      {/* <h3>Edit {foodTruckDetails.name}</h3> */}
      <FoodTruckForm {...{ initialStates, formData, sendAPIRequest }} />
    </div>
  )
}

export default AdminFoodTruckEdit
