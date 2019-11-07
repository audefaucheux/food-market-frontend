import React from "react"
import Helpers from "../Helpers"

const PublicShowFoodTruck = ({ food_truck, from_time, to_time }) => {
  return (
    <div>
      <div>----------------------------------</div>
      <h3>{food_truck.name}</h3>
      <p>
        Time: {from_time} - {to_time}
      </p>
      <div>
        Cuisine:{" "}
        {food_truck.cuisines.length !== 0
          ? Helpers.sortByName(food_truck.cuisines).map(
              cuisine => cuisine.name + " | "
            )
          : null}
      </div>
      <p>Description: {food_truck.description}</p>
      <img src={food_truck.profile_picture} alt={food_truck.name} width="30%" />
      <p>Twitter Account: {food_truck.twitter_account}</p>
    </div>
  )
}

export default PublicShowFoodTruck
