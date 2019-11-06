import React from "react"
import PublicShowFoodTruck from "../components/PublicShowFoodTruck"

const PublicFoodTruckContainer = ({ foodTrucks, dateFilter }) => {
  return (
    <div>
      <p>LIST OF FOOD TRUCKS</p>
      {foodTrucks.lenght !== 0
        ? foodTrucks.map(foodTruck => (
            <PublicShowFoodTruck
              key={foodTruck.id}
              {...{ ...foodTruck, dateFilter }}
            />
          ))
        : null}
    </div>
  )
}

export default PublicFoodTruckContainer
