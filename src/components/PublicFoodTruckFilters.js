import React, { useState } from "react"
import PublicFoodTrucksContainer from "../containers/PublicFoodTrucksContainer"
import API from "../adapters/API"
import Helpers from "../Helpers"

const PublicFoodTruckFilters = ({ formData }) => {
  const [dateFilter, setDateFilter] = useState(
    new Date().toISOString().slice(0, 10)
  ) // set date to today by default
  const [marketsFilter, setMarketsFilter] = useState([])
  const [cuisinesFilter, setCuisinesFilter] = useState([])
  const [foodTrucks, setFoodTrucks] = useState([])

  const removeArchivedFoodTrucks = array => {
    return array.filter(foodTruck => foodTruck.archived === false)
  }

  const filterFoodTrucksByDayandMarket = array => {
    let convertedDate = Helpers.convertStringIntoDate(dateFilter)
    let matchingDate = []
    array.forEach(foodTruck =>
      foodTruck.schedule_recurrences.forEach(recurrence => {
        if (
          marketsFilter.includes(JSON.stringify(recurrence.market.id)) &&
          recurrence.day_num === convertedDate.getDay()
        ) {
          matchingDate.push(foodTruck)
        } else if (
          recurrence.day_num === convertedDate.getDay() &&
          marketsFilter.length === 0
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

  const fieldCheck = (field, array) => {
    return array.includes(JSON.stringify(field.id))
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
          {formData.markets.map(market => (
            <label key={market.id}>
              <input
                type="checkbox"
                id={market.id}
                checked={fieldCheck(market, marketsFilter)}
                name={market.name}
                onChange={e =>
                  Helpers.handleCheckboxChange(
                    e,
                    setMarketsFilter,
                    marketsFilter
                  )
                }
              />
              {market.name}
            </label>
          ))}
        </label>
        <label>
          Cuisine:
          {formData.cuisines.map(cuisine => (
            <label key={cuisine.id}>
              <input
                type="checkbox"
                id={cuisine.id}
                checked={fieldCheck(cuisine, cuisinesFilter)}
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
      <PublicFoodTrucksContainer {...{ foodTrucks, dateFilter }} />
    </div>
  )
}

export default PublicFoodTruckFilters
