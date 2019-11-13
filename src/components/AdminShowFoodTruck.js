import React from "react"
import { navigate } from "@reach/router"
import Helpers from "../Helpers"
import { Card, Button } from "semantic-ui-react"
import "../stylesheets/components/AdminShowFoodTruck.css"

const AdminShowFoodTruck = ({
  id,
  name,
  description,
  profile_picture,
  // twitter_account,
  cuisines,
  archived,
  archiveFoodTruck
}) => {
  const backgroundPic = {
    backgroundImage: `url(${profile_picture})`
  }

  return (
    <Card className="food-truck-card">
      <Card.Content>
        <div className="container-header">
          <div className="container-image" style={backgroundPic}></div>
          <div>
            <h3>{name}</h3>
            <p>Cuisines: {Helpers.showCuisines(cuisines)}</p>

            {/* <p>Twitter: {twitter_account}</p> */}
          </div>
        </div>
        <p>{description}</p>
      </Card.Content>
      <Card.Content>
        <Button
          id="edit"
          onClick={() => navigate(`/my_food_trucks/edit/${id}`)}
        >
          Edit
        </Button>
        <Button
          id="schedule"
          onClick={() => navigate(`/my_food_trucks/schedule/${id}`)}
        >
          Schedule
        </Button>
        <Button
          id="archive"
          onClick={() => archiveFoodTruck(id, { archived: !archived })}
        >
          {archived ? "Reactivate" : "Archive"}
        </Button>
      </Card.Content>
    </Card>
  )
}

export default AdminShowFoodTruck
