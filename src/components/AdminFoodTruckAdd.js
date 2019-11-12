import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import Helpers from "../Helpers"

const AdminFoodTruckAdd = ({
  addFoodTruck,
  formData,
  errors,
  setErrors,
  loading,
  setLoading
}) => {
  const initialStates = (
    setName,
    setDescription,
    setProfilePicture,
    setTwitterAccount,
    setCuisines
  ) => {
    if (!loading) {
      setName("")
      setDescription("")
      setProfilePicture(
        "https://toppng.com/public/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
      )
      setTwitterAccount("")
      setCuisines([])
    }
  }

  return (
    <>
      {Helpers.backButton()}
      {loading && Helpers.showLoader()}

      <FoodTruckForm
        {...{ formData, initialStates, errors, setErrors, loading, setLoading }}
        sendAPIRequest={addFoodTruck}
      />
    </>
  )
}

export default AdminFoodTruckAdd
