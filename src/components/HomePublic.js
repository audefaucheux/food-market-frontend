import React, { useState } from "react"
import PublicFoodTrucksContainer from "../containers/PublicFoodTrucksContainer"
import PublicFoodTruckFilters from "../components/PublicFoodTruckFilters"
import API from "../adapters/API"

const HomePublic = ({ formData }) => {
  const [marketFilter, setMarketFilter] = useState([])
  const [dateFilter, setDateFilter] = useState(
    new Date().toISOString().slice(0, 10) // set date to today by default
  )
  const [cuisineFilter, setCuisineFilter] = useState([])
  const [foodTrucks, setFoodTrucks] = useState([])

  const submitFilters = () => {
    API.getFoodTrucks().then(setFoodTrucks)
  }

  const filterFoodTrucksByCuisine = array => {
    return array.filter(foodTruck =>
      foodTruck.cuisines.some(cuisine => cuisineFilter.includes(cuisine.id))
    )
  }

  const foodTruckArray = () => {
    if (cuisineFilter.length !== 0) {
      return filterFoodTrucksByCuisine(foodTrucks)
    } else {
      return []
    }
  }

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
          marketFilter,
          setMarketFilter,
          dateFilter,
          setDateFilter,
          cuisineFilter,
          setCuisineFilter,
          submitFilters,
          formData
        }}
      />
      <PublicFoodTrucksContainer foodTrucks={foodTruckArray()} />
    </div>
  )
}

export default HomePublic
