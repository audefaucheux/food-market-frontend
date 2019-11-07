import React from "react"
import PublicShowFoodTruck from "../components/PublicShowFoodTruck"

const PublicFoodTruckContainer = ({ recurrences }) => {
  return (
    <div>
      <p>LIST OF FOOD TRUCKS</p>
      {/* {foodTrucks.lenght !== 0
        ? foodTrucks.map(foodTruck => (
            <PublicShowFoodTruck
              key={foodTruck.id}
              {...{ ...foodTruck, selectedDate }}
            />
          ))
        : null} */}
      {recurrences.length !== 0
        ? recurrences.map(recurrence => (
            <PublicShowFoodTruck key={recurrence.id} {...{ ...recurrence }} />
          ))
        : null}
    </div>
  )
}

export default PublicFoodTruckContainer
