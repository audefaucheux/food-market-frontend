import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import { Link } from "@reach/router"
import { Button, Icon } from "semantic-ui-react"

const AdminFoodTruckEdit = ({
  id,
  selectedTruck,
  editFoodTruck,
  formData,
  errors,
  setErrors
}) => {
  const foodTruckDetails = selectedTruck(id)

  const initialStates = (
    setName,
    setDescription,
    setProfilePicture,
    setTwitterAccount,
    setCuisines
  ) => {
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
  }

  const sendAPIRequest = data => {
    editFoodTruck(id, data)
  }

  return (
    <div>
      <Button>
        <Link to="/my_food_trucks">
          <Icon name="arrow left" />
          Back
        </Link>
      </Button>
      {/* <h3>Edit {foodTruckDetails.name}</h3> */}
      <FoodTruckForm
        {...{ initialStates, formData, sendAPIRequest, errors, setErrors }}
      />
    </div>
  )
}

export default AdminFoodTruckEdit
