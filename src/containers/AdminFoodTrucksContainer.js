import React, { useState } from "react"
import { Link } from "@reach/router"
import AdminShowFoodTruck from "../components/AdminShowFoodTruck"
import Helpers from "../Helpers"
import { Header, Button, Icon, Checkbox, Card } from "semantic-ui-react"

const AdminFoodTruckContainer = ({ foodTrucks, editFoodTruck }) => {
  const [archivedFoodTrucks, setArchivedFoodTrucks] = useState("OFF")

  const foodTrucksArray = array => {
    if (archivedFoodTrucks === "ON") {
      return array.filter(foodTruck => foodTruck.archived === true)
    } else {
      return array.filter(foodTruck => foodTruck.archived === false)
    }
  }

  const handleClick = () => {
    if (archivedFoodTrucks === "ON") {
      setArchivedFoodTrucks("OFF")
    }
    if (archivedFoodTrucks === "OFF") {
      setArchivedFoodTrucks("ON")
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
      <Checkbox toggle onClick={handleClick}>
        Archived: {archivedFoodTrucks}
      </Checkbox>
      <Header as="h2">My Food Trucks: </Header>
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
