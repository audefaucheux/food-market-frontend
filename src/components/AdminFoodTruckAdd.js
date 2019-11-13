import React, { useState } from "react"
import FoodTruckForm from "./FoodTruckForm"
import API from "../adapters/API"
import Helpers from "../Helpers"

const AdminFoodTruckAdd = ({
  formData,
  foodTrucks,
  setFoodTrucks,
  handleRedirect
}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [profilePicture, setProfilePicture] = useState(
    "https://toppng.com/public/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
  )
  const [twitterAccount, setTwitterAccount] = useState("")
  const [cuisines, setCuisines] = useState([])
  const [errors, setErrors] = useState([])
  const [localLoading, setLocalLoading] = useState(false)

  const addFoodTruck = newFoodTruck => {
    API.addFoodTruck(newFoodTruck).then(data => {
      if (data.errors) {
        setErrors(data.errors)
      } else if (data.food_truck) {
        setFoodTrucks([...foodTrucks, data.food_truck])
        handleRedirect("/my_food_trucks")
      }
    })
    setLocalLoading(false)
  }

  return (
    <>
      {Helpers.backButton()}
      <FoodTruckForm
        {...{
          formData,
          name,
          setName,
          description,
          setDescription,
          profilePicture,
          setProfilePicture,
          twitterAccount,
          setTwitterAccount,
          cuisines,
          setCuisines,
          localLoading,
          setLocalLoading,
          errors
        }}
        sendAPIRequest={addFoodTruck}
      />
    </>
  )
}

export default AdminFoodTruckAdd
