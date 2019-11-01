import React from "react"

const PublicFoodTruckFilters = props => {
  return (
    <div>
      <p>FILTERS</p>
      <form>
        <label>
          Market:
          <input type="text" name="market" />
        </label>
        <label>
          Day:
          <input type="text" name="day" />
        </label>
        <label>
          Cuisine:
          <input type="text" name="cuisine" />
        </label>
      </form>
    </div>
  )
}

export default PublicFoodTruckFilters
