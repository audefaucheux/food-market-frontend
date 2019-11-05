import React, { useState } from "react"
import PublicFoodTrucksContainer from "../containers/PublicFoodTrucksContainer"
import PublicFoodTruckFilters from "../components/PublicFoodTruckFilters"
// import API from "../adapters/API"

const HomePublic = ({ formData }) => {
  const [foodTrucks, setFoodTrucks] = useState([])

  return (
    <div>
      <p>HOME PAGE</p>
      <p>
        Find out if your fav food truck will be on the market near you today! If
        you not sure what you want to eat, checkout which food trucks are
        planning to come.
      </p>
      <PublicFoodTruckFilters
        {...{
          setFoodTrucks,
          formData
        }}
      />
      <PublicFoodTrucksContainer {...{ foodTrucks }} />
    </div>
  )
}

export default HomePublic
