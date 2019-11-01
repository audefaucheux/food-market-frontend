import React from "react"
import PublicFoodTrucksContainer from "../containers/PublicFoodTrucksContainer"

const HomePublic = ({ foodTrucks }) => {
  return (
    <div>
      <p>HOME PAGE</p>
      <PublicFoodTrucksContainer {...{ foodTrucks }} />
    </div>
  )
}

export default HomePublic
