import React from "react"
import PublicFoodTruckFilters from "../components/PublicFoodTruckFilters"
import PublicShowFoodTruck from "../components/PublicShowFoodTruck"

const PublicFoodTruckContainer = ({ foodTrucks }) => {
  return (
    <div>
      <p>
        Find out if your fav food truck will be on the market near you today! If
        you not sure what you want to eat, checkout which food trucks are
        planning to come.
      </p>
      <PublicFoodTruckFilters />
      <p>LIST OF FOOD TRUCKS</p>
      <PublicShowFoodTruck />
    </div>
  )
}

export default PublicFoodTruckContainer
