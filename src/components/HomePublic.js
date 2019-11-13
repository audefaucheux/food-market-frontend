import React from "react"
import PublicFoodTruckFilters from "../components/PublicFoodTruckFilters"
import "../stylesheets/components/HomePublic.css"

const HomePublic = ({ formData, globalLoading, setGlobalLoading }) => {
  return (
    <div>
      <img
        className="header-home-page"
        src="https://cdn.nogarlicnoonions.com/images/thumbs/image.php/image_dd8d4202d984046eb07aaae3e8e9147f.jpg?width=2000&height=2000&image=/images/articles/truck-stop-2013-the-bowler-truck2014-10-27-09-58-25.jpg"
        alt="test"
      />
      <p>
        Find out if your fav food truck will be on the market near you today! If
        you're not sure what you want to eat, check out which food trucks are
        planning to come.
      </p>
      <PublicFoodTruckFilters
        {...{ formData, globalLoading, setGlobalLoading }}
      />
    </div>
  )
}

export default HomePublic
