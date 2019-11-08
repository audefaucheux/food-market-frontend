import React from "react"
import Helpers from "../Helpers"
import { Card } from "semantic-ui-react"

const PublicShowFoodTruck = ({ food_truck, from_time, to_time, market }) => {
  return (
    <Card className="food-truck-card">
      <Card.Content>
        <div className="container-header">
          <div className="container-image">
            <img
              src={food_truck.profile_picture}
              alt={food_truck.name}
              float="left"
              width="100%"
            />
          </div>
          <div className="container-header-details">
            <h3>{food_truck.name}</h3>
            <p>
              {from_time} - {to_time}
            </p>
            <p>{market.name}</p>
          </div>
        </div>
      </Card.Content>
      <Card.Content>
        <p>Cuisine: {Helpers.showCuisines(food_truck.cuisines)}</p>
        <p>{food_truck.description}</p>
      </Card.Content>
      {/* <p>Twitter Account: {food_truck.twitter_account}</p> */}
    </Card>
  )
}

export default PublicShowFoodTruck
