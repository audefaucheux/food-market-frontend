import React from "react"
import FoodTruckForm from "./FoodTruckForm"
import { Link } from "@reach/router"

const AdminFoodTruckAdd = ({ addFoodTruck, formData }) => {
  const initialStates = (values, arrays) => {
    values.map(setter => setter(""))
    arrays.map(setter => setter([]))
  }

  return (
    <>
      <Link to="/my_food_trucks">BACK</Link>
      <FoodTruckForm
        {...{
          formData,
          addFoodTruck,
          initialStates
        }}
      />
    </>
  )
}

export default AdminFoodTruckAdd
