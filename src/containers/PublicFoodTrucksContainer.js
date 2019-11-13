import React from "react"
import PublicShowFoodTruck from "../components/PublicShowFoodTruck"
import { Card, Message } from "semantic-ui-react"
import Helpers from "../Helpers"
import "../stylesheets/containers/PublicFoodTruckContainer.css"

const PublicFoodTruckContainer = ({ recurrences, message, globalLoading }) => {
  return (
    <div className="filter-results">
      <h2>Results ({recurrences.length})</h2>

      {message === "No match found" && <Message error content={message} />}
      {globalLoading && Helpers.showLoader()}
      <Card.Group>
        {recurrences.length !== 0 &&
          recurrences
            .sort((a, b) => a.food_truck.name.localeCompare(b.food_truck.name))
            .map(recurrence => (
              <PublicShowFoodTruck key={recurrence.id} {...{ ...recurrence }} />
            ))}
      </Card.Group>
    </div>
  )
}

export default PublicFoodTruckContainer
