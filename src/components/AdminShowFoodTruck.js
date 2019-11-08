import React from "react"
import { Link } from "@reach/router"
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
  editFoodTruck
}) => {
  return (
    <Card className="food-truck-card">
      <Card.Content>
        <div className="container-header">
          <div className="container-image">
            <img src={profile_picture} alt={name} float="left" width="100%" />
          </div>
          <div>
            <h3>{name}</h3>
            <p>{Helpers.showCuisines(cuisines)}</p>

            {/* <p>Twitter: {twitter_account}</p> */}
          </div>
        </div>
        <p>{description}</p>
      </Card.Content>
      <Card.Content>
        <Button size="small">
          <Link to={`edit/${id}`} className="primary">
            Edit
          </Link>
        </Button>
        <Button size="small">
          <Link to={`schedule/${id}`} className="primary">
            Schedule
          </Link>{" "}
        </Button>
        <Button
          size="small"
          onClick={() => editFoodTruck(id, { archived: !archived })}
        >
          {archived ? "Reactivate" : "Archive"}
        </Button>
      </Card.Content>
    </Card>
  )
}

export default AdminShowFoodTruck
