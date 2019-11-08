import React from "react"
import PublicShowFoodTruck from "../components/PublicShowFoodTruck"
import { Card } from "semantic-ui-react"

const PublicFoodTruckContainer = ({ recurrences }) => {
  return (
    <div>
      <p>LIST OF FOOD TRUCKS</p>
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
