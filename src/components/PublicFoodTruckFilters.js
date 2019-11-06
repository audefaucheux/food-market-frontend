import React, { useState } from "react"
import API from "../adapters/API"
import Helpers from "../Helpers"

const PublicFoodTruckFilters = ({ formData, setFoodTrucks }) => {
  const [dateFilter, setDateFilter] = useState(
    new Date().toISOString().slice(0, 10)
  ) // set date to today by default
  const [marketFilter, setMarketFilter] = useState([])
  const [cuisinesFilter, setCuisinesFilter] = useState([])

  const removeArchivedFoodTrucks = array => {
    return array.filter(foodTruck => foodTruck.archived === false)
  }

  const filterFoodTrucksByDayandMarket = array => {
    let convertedDate = new Date(dateFilter)
    let matchingDate = []
    array.forEach(foodTruck =>
      foodTruck.schedule_recurrences.forEach(recurrence => {
        if (
          marketFilter.includes(recurrence.market.id) &&
          recurrence.day_num === convertedDate.getDay()
        ) {
          matchingDate.push(foodTruck)
        } else if (
          recurrence.day_num === convertedDate.getDay() &&
          marketFilter.length === 0
        ) {
          matchingDate.push(foodTruck)
        }
      })
    )
    return matchingDate
  }

  const filterFoodTrucksByCuisine = array => {
    if (cuisinesFilter.length !== 0) {
      return array.filter(foodTruck =>
        foodTruck.cuisines.some(cuisine =>
          cuisinesFilter.includes(JSON.stringify(cuisine.id))
        )
      )
    } else {
      return array
    }
  }

  const foodTruckArray = data => {
    let removeArchived = removeArchivedFoodTrucks(data)
    let filteredByDate = filterFoodTrucksByDayandMarket(removeArchived)
    let filteredByCuisine = filterFoodTrucksByCuisine(filteredByDate)
    return filteredByCuisine
  }

  const handleSubmit = e => {
    e.preventDefault()
    API.getFoodTrucks().then(data => {
      setFoodTrucks(foodTruckArray(data))
    })
  }

  const cuisineCheck = cuisine => {
    return cuisinesFilter.includes(JSON.stringify(cuisine.id))
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
        {/* <label>
          Cuisine:
          <select
            // multiple
            onChange={e => setCuisinesFilter(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            {formData.cuisines.map(cuisine => (
              <option key={cuisine.id} value={cuisine.id}>
                {cuisine.name}
              </option>
            ))}
          </select>
        </label> */}
        <label>
          Cuisine:
          {formData.cuisines.map(cuisine => (
            <label key={cuisine.id}>
              <input
                type="checkbox"
                id={cuisine.id}
                checked={cuisineCheck(cuisine)}
                name={cuisine.name}
                onChange={e =>
                  Helpers.handleCheckboxChange(
                    e,
                    setCuisinesFilter,
                    cuisinesFilter
                  )
                }
              />
              {cuisine.name}
            </label>
          ))}
        </label>
        <input type="submit" value="Filter" />
      </form>
    </div>
  )
}

export default PublicFoodTruckFilters
