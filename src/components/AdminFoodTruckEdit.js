import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import { Link } from "@reach/router"
import { Icon } from "semantic-ui-react"
import Helpers from "../Helpers"

const AdminFoodTruckEdit = ({
  id,
  selectedTruck,
  editFoodTruck,
  formData,
  errors,
  setErrors,
  loading,
  setLoading
}) => {
  const foodTruckDetails = selectedTruck(id)

  const initialStates = (
    setName,
    setDescription,
    setProfilePicture,
    setTwitterAccount,
    setCuisines
  ) => {
    if (foodTruckDetails && !loading) {
      setName(foodTruckDetails.name)
      setDescription(foodTruckDetails.description)
      setProfilePicture(foodTruckDetails.profile_picture)
      setTwitterAccount(foodTruckDetails.twitter_account)
      let cuisineIdArray = foodTruckDetails.cuisines.map(cuisine =>
        JSON.stringify(cuisine.id)
      )
      setCuisines(cuisineIdArray)
    }
  }

  const sendAPIRequest = data => {
    editFoodTruck(id, data)
  }

  return (
    <div>
      <Link to="/my_food_trucks">
        <Icon name="arrow left" />
      </Link>
      {loading && Helpers.showLoader()}
      {/* <h3>Edit {foodTruckDetails.name}</h3> */}
      <FoodTruckForm
        {...{
          initialStates,
          formData,
          sendAPIRequest,
          errors,
          setErrors,
          setLoading
        }}
      />
    </div>
  )
}

export default AdminFoodTruckEdit
