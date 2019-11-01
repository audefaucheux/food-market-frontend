import React from "react"

const PublicFoodTruckFilters = ({
  markets,
  marketFilter,
  setMarketFilter,
  dateFilter,
  setDateFilter,
  cuisineFilter,
  setCuisineFilter
}) => {
  const updateMarketFilter = e => {
    if (!marketFilter.includes(e.target.value)) {
      setMarketFilter([...marketFilter, e.target.value])
    }
  }

  return (
    <div>
      <p>FILTERS</p>
      <form>
        <label>
          Market:
          <input type="search" name="market"></input>
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
          <input type="text" name="cuisine" />
        </label>
        <input type="submit" value="Filter" />
      </form>
    </div>
  )
}

export default PublicFoodTruckFilters
