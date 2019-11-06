import React from "react"
import PublicFoodTruckFilters from "../components/PublicFoodTruckFilters"

const HomePublic = ({ formData }) => {
  return (
    <div>
      <p>HOME PAGE</p>
      <p>
        Find out if your fav food truck will be on the market near you today! If
        you not sure what you want to eat, checkout which food trucks are
        planning to come.
      </p>
      <PublicFoodTruckFilters {...{ formData }} />
    </div>
  )
}

export default HomePublic
