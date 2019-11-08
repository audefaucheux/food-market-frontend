import React, { useState } from "react"
import { Link } from "@reach/router"
import AdminShowFoodTruck from "../components/AdminShowFoodTruck"
import Helpers from "../Helpers"
import { Header, Button, Icon, Checkbox, Card } from "semantic-ui-react"

const AdminFoodTruckContainer = ({ foodTrucks, editFoodTruck }) => {
  const [archivedFoodTrucks, setArchivedFoodTrucks] = useState(false)

  const foodTrucksArray = array => {
    if (archivedFoodTrucks) {
      return array.filter(foodTruck => foodTruck.archived === true)
    } else {
      return array.filter(foodTruck => foodTruck.archived === false)
    }
  }

  return (
    <>
      <Button>
        <Link to="/my_food_trucks/add">
          <Icon name="add" />
          Add Food Truck
        </Link>
      </Button>
      Archived:
      <Checkbox
        toggle
        onClick={() => setArchivedFoodTrucks(!archivedFoodTrucks)}
      >
        Archived: {archivedFoodTrucks}
      </Checkbox>
      <Header as="h2">
        My {archivedFoodTrucks ? "Archived" : "Active"} Food Trucks:{" "}
      </Header>
      <Card.Group>
        {Helpers.sortByName(foodTrucksArray(foodTrucks)).map(foodTruck => {
          return (
            <AdminShowFoodTruck
              key={foodTruck.id}
              {...{
                ...foodTruck,
                editFoodTruck
              }}
            />
          )
        })}
      </Card.Group>
    </>
  )
}

export default AdminFoodTruckContainer
