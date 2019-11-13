import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import Helpers from "../Helpers"

const AdminFoodTruckAdd = ({ addFoodTruck, formData }) => {
  const initialStates = (
    setName,
    setDescription,
    setProfilePicture,
    setTwitterAccount,
    setCuisines
  ) => {
    // if (!globalLoading) {
    setName("")
    setDescription("")
    setProfilePicture(
      "https://toppng.com/public/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
    )
    setTwitterAccount("")
    setCuisines([])
    // }
  }

  // const initialStates = {
  //   name: "",
  //   description: "",
  //   profilePicture: "",
  //   twitterAccount: "",
  //   cuisine: []
  // }

  // const nameDef = "test"

  return (
    <>
      {Helpers.backButton()}
      {/* {globalLoading && Helpers.showLoader()} */}
      <FoodTruckForm
        {...{ formData, initialStates }}
        sendAPIRequest={addFoodTruck}
      />
    </>
  )
}

export default AdminFoodTruckAdd
