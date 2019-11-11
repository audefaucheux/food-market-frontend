import React from "react"
import PublicShowFoodTruck from "../components/PublicShowFoodTruck"
import { Card, Header } from "semantic-ui-react"
import "../stylesheets/containers/PublicFoodTruckContainer.css"

const PublicFoodTruckContainer = ({ recurrences }) => {
  return (
    <div className="filter-results">
      <Header>LIST OF FOOD TRUCKS:</Header>
      <Card.Group>
        {recurrences.length !== 0
          ? recurrences.map(recurrence => (
              <PublicShowFoodTruck key={recurrence.id} {...{ ...recurrence }} />
            ))
          : null}
      </Card.Group>
    </div>
  )
}

export default PublicFoodTruckContainer
