import React, { useState } from "react"
import PublicFoodTrucksContainer from "../containers/PublicFoodTrucksContainer"
import API from "../adapters/API"
import Helpers from "../Helpers"
import { Form, Button, Checkbox } from "semantic-ui-react"

const PublicFoodTruckFilters = ({ formData }) => {
  const [dateFilter, setDateFilter] = useState(
    new Date().toISOString().slice(0, 10)
  ) // set date to today by default
  const [marketsFilter, setMarketsFilter] = useState([])
  const [cuisinesFilter, setCuisinesFilter] = useState([])
  const [recurrences, setRecurrences] = useState([])

  const filterByDayNum = array => {
    let getFilterDateNum = Helpers.convertStringIntoDate(dateFilter).getDay()
    return array.filter(recurrence => recurrence.day_num === getFilterDateNum)
  }

  const removeArchivedFoodTrucks = array => {
    return array.filter(recurrence => recurrence.food_truck.archived === false)
  }

  const filterByMarket = array => {
    if (marketsFilter.length !== 0) {
      return array.filter(recurrence =>
        marketsFilter.includes(JSON.stringify(recurrence.market.id))
      )
    } else {
      return array
    }
  }

  const filterByCuisine = array => {
    if (cuisinesFilter.length !== 0) {
      return array.filter(recurrence =>
        recurrence.food_truck.cuisines.some(cuisine =>
          cuisinesFilter.includes(JSON.stringify(cuisine.id))
        )
      )
    } else {
      return array
    }
  }

  const applyFilters = array => {
    let arrayFilteredByDay = filterByDayNum(array)
    let showActiveTrucks = removeArchivedFoodTrucks(arrayFilteredByDay)
    let arrayFilteredByMarket = filterByMarket(showActiveTrucks)
    let arrayFilteredByCuisine = filterByCuisine(arrayFilteredByMarket)
    return arrayFilteredByCuisine
  }

  const handleSubmit = e => {
    e.preventDefault()
    API.getScheduleRecurrences().then(data => {
      setRecurrences(applyFilters(data))
    })
  }

  const marketsCheck = field => {
    return marketsFilter.includes(JSON.stringify(field.id))
  }

  const cuisinesCheck = field => {
    return cuisinesFilter.includes(JSON.stringify(field.id))
  }

  return (
    <div>
      <p>FILTERS</p>
      <Form onSubmit={handleSubmit}>
        <label>
          Day:
          <input
            type="date"
            name="date"
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value)}
          />
        </label>
        <Form.Field>
          <label>Markets:</label>
          {formData.markets.map(market => (
            <div key={`${market.id}-market`}>
              <Checkbox
                type="checkbox"
                id={`${market.id}-market`}
                defaultChecked={marketsCheck(market)}
                name={market.name}
                onChange={e =>
                  Helpers.handleCheckboxChange(
                    e,
                    setMarketsFilter,
                    marketsFilter
                  )
                }
                label={market.name}
              />
            </div>
          ))}
        </Form.Field>
        <Form.Field>
          <label>Cuisines:</label>
          {formData.cuisines.map(cuisine => (
            <div key={`${cuisine.id}-cuisine`}>
              <Checkbox
                type="checkbox"
                id={`${cuisine.id}-cuisine`}
                defaultChecked={cuisinesCheck(cuisine)}
                name={cuisine.name}
                onChange={e =>
                  Helpers.handleCheckboxChange(
                    e,
                    setCuisinesFilter,
                    cuisinesFilter
                  )
                }
                label={cuisine.name}
              />
            </div>
          ))}
        </Form.Field>
        <Button color="green" type="submit">
          Submit
        </Button>
      </Form>
      <PublicFoodTrucksContainer {...{ recurrences }} />
      {/* <PublicFoodTrucksContainer {...{ foodTrucks }} /> */}
    </div>
  )
}

export default PublicFoodTruckFilters
