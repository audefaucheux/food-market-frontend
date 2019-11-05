import React, { useState } from "react"
import API from "../adapters/API"

const PublicFoodTruckFilters = ({ formData, setFoodTrucks }) => {
  const [marketFilter, setMarketFilter] = useState([])
  const [dateFilter, setDateFilter] = useState(
    new Date().toISOString().slice(0, 10)
  ) // set date to today by default
  const [cuisineFilter, setCuisineFilter] = useState([])

  const filterFoodTrucksByDay = array => {
    let convertedDate = new Date(dateFilter)
    let matchingDate = []
    array.forEach(foodTruck =>
      foodTruck.schedule_recurrences.forEach(recurrence => {
        if (recurrence.day_num === convertedDate.getDay()) {
          matchingDate.push(foodTruck)
        }
      })
    )
    return matchingDate
  }

  const filterFoodTrucksByMarket = array => {
    let matchingMarket = []
    console.log(array)
    array.forEach(foodTruck => {
      console.log(foodTruck.recurrence)
      // foodTruck.recurrence.forEach(recurrence => {
      //   if (marketFilter.includes(recurrence.market.id)) {
      //     matchingMarket.push(foodTruck)
      //   }
      // })
    })
    return array
  }

  const filterFoodTrucksByCuisine = array => {
    return array.filter(foodTruck =>
      foodTruck.cuisines.some(cuisine => cuisineFilter.includes(cuisine.id))
    )
  }

  // const foodTruckArray = data => {
  //   filterFoodTrucksByMarket(data)
  // }

  const foodTruckArray = data => {
    let filteredByDate = filterFoodTrucksByDay(data)
    if (marketFilter.length !== 0) {
      // let filteredByMarket = filterFoodTrucksByMarket(filteredByDate)
      // if (cuisineFilter.length !== 0) {
      //   return filterFoodTrucksByCuisine(filteredByDate)
      //   } else {
      return filterFoodTrucksByMarket(filteredByDate)
      // }
    } else {
      return filteredByDate
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    API.getFoodTrucks().then(data => {
      setFoodTrucks(foodTruckArray(data))
    })
  }

  return (
    <div>
      <p>FILTERS</p>
      <form onSubmit={handleSubmit}>
        <label>
          Day:
          <input
            type="date"
            name="date"
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value)}
          />
        </label>
        <label>
          Market:
          {/* <input type="search" name="market"></input> */}
          <select
            // multiple
            onChange={e => setMarketFilter(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            {formData.markets.map(market => (
              <option key={market.id} value={market.id}>
                {market.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Cuisine:
          <select
            // multiple
            onChange={e => setCuisineFilter(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            {formData.cuisines.map(cuisine => (
              <option key={cuisine.id} value={cuisine.id}>
                {cuisine.name}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Filter" />
      </form>
    </div>
  )
}

export default PublicFoodTruckFilters
