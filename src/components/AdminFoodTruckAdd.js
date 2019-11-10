import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import { Link } from "@reach/router"
import { Button, Icon } from "semantic-ui-react"

const AdminFoodTruckAdd = ({ addFoodTruck, formData, errors, setErrors }) => {
  const initialStates = (
    setName,
    setDescription,
    setProfilePicture,
    setTwitterAccount,
    setCuisines
  ) => {
    setName("")
    setDescription("")
    setProfilePicture(
      "https://toppng.com/public/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png"
    )
    setTwitterAccount("")
    setCuisines([])
  }

  return (
    <>
      <Button>
        <Link to="/my_food_trucks">
          <Icon name="arrow left" />
          Back
        </Link>
      </Button>
      <FoodTruckForm
        {...{ formData, initialStates, errors, setErrors }}
        sendAPIRequest={addFoodTruck}
      />
    </>
  )
}

export default AdminFoodTruckAdd
