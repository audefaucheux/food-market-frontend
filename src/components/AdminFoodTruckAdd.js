import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import { Link } from "@reach/router"
import { Icon } from "semantic-ui-react"
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
      <Link to="/my_food_trucks">
        <Icon name="arrow left" />
      </Link>
      {loading && Helpers.showLoader()}

      <FoodTruckForm
        {...{ formData, initialStates, errors, setErrors, loading, setLoading }}
        sendAPIRequest={addFoodTruck}
      />
    </>
  )
}

export default AdminFoodTruckAdd
