import React, { useState } from "react"
import PublicFoodTrucksContainer from "../containers/PublicFoodTrucksContainer"
import PublicFoodTruckFilters from "../components/PublicFoodTruckFilters"

const HomePublic = ({ foodTrucks, markets }) => {
  const [marketFilter, setMarketFilter] = useState([])
  const [dateFilter, setDateFilter] = useState(
    new Date().toISOString().slice(0, 10) // set date to today by default
  )
  const [cuisineFilter, setCuisineFilter] = useState([])

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
          markets,
          marketFilter,
          setMarketFilter,
          dateFilter,
          setDateFilter,
          cuisineFilter,
          setCuisineFilter
        }}
      />
      <PublicFoodTrucksContainer {...{ foodTrucks }} />
    </div>
  )
}

export default HomePublic
