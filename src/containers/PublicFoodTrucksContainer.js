import React from "react"
import PublicShowFoodTruck from "../components/PublicShowFoodTruck"

const PublicFoodTruckContainer = ({ foodTrucks }) => {
  return (
    <div>
      <p>LIST OF FOOD TRUCKS</p>
      <PublicShowFoodTruck />
    </div>
  )
}

export default PublicFoodTruckContainer
