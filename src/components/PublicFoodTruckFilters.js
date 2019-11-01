import React from "react"

const PublicFoodTruckFilters = ({
  marketFilter,
  setMarketFilter,
  dateFilter,
  setDateFilter,
  cuisineFilter,
  setCuisineFilter,
  submitFilters,
  formData
}) => {
  const updateArrayFilter = (e, array, setter) => {
    if (!array.includes(e.target.value)) {
      setter([...array, parseInt(e.target.value)])
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    submitFilters()
  }

  return (
    <div>
      <p>FILTERS</p>
      <form onSubmit={handleSubmit}>
        <label>
          Market:
          {/* <input type="search" name="market"></input> */}
          <select
            multiple
            onChange={e => updateArrayFilter(e, marketFilter, setMarketFilter)}
          >
            {formData.markets.map(market => (
              <option key={market.id} value={market.id}>
                {market.name}
              </option>
            ))}
          </select>
        </label>
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
          Cuisine:
          {/* <input type="search" name="cuisine" /> */}
          <select
            multiple
            onChange={e =>
              updateArrayFilter(e, cuisineFilter, setCuisineFilter)
            }
          >
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
