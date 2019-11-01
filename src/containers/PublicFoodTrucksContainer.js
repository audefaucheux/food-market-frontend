import React from "react"
import PublicShowFoodTruck from "../components/PublicShowFoodTruck"

const PublicFoodTruckContainer = ({ foodTrucks }) => {
  return (
    <div>
      <p>LIST OF FOOD TRUCKS</p>
      {foodTrucks.map(foodTruck => (
        <PublicShowFoodTruck key={foodTruck.id} {...foodTruck} />
      ))}
    </div>
  )
}

export default PublicFoodTruckContainer
