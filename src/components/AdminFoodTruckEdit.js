import React, { useState, useEffect } from "react"
import FoodTruckForm from "./FoodTruckForm"
import Helpers from "../Helpers"
import API from "../adapters/API"

const AdminFoodTruckEdit = ({
  id,
  selectedTruck,
  handleRedirect,
  formData,
  foodTrucks,
  setFoodTrucks
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

  const foodTruckDetails = selectedTruck(id)

  useEffect(() => {
    if (foodTruckDetails) {
      setName(foodTruckDetails.name)
      setDescription(foodTruckDetails.description)
      setProfilePicture(foodTruckDetails.profile_picture)
      setTwitterAccount(foodTruckDetails.twitter_account)
      let cuisineIdArray = foodTruckDetails.cuisines.map(cuisine =>
        JSON.stringify(cuisine.id)
      )
      setCuisines(cuisineIdArray)
    }
  }, [foodTruckDetails])

  const editFoodTruck = updatedFoodTruck => {
    API.updateFoodTruck(id, updatedFoodTruck).then(data => {
      if (data.errors) {
        setErrors(data.errors)
      } else if (data.food_truck) {
        setFoodTrucks(Helpers.findAndReplace(foodTrucks, data.food_truck))
        handleRedirect("/my_food_trucks")
      }
    })
    setLocalLoading(false)
  }

  return (
    <div>
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
        sendAPIRequest={editFoodTruck}
      />
    </div>
  )
}

export default AdminFoodTruckEdit
