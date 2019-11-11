import React, { useState } from "react"
import { navigate } from "@reach/router"
import AdminShowFoodTruck from "../components/AdminShowFoodTruck"
import Helpers from "../Helpers"
import { Button, Icon, Card, Menu, Header } from "semantic-ui-react"

const AdminFoodTruckContainer = ({ foodTrucks, editFoodTruck }) => {
  const [archiveToggle, setArchiveToggle] = useState(false)

  const archivedFoodTrucks = array =>
    array.filter(foodTruck => foodTruck.archived === true)

  const activeFoodTrucks = array =>
    array.filter(foodTruck => foodTruck.archived === false)

  const foodTrucksArray = array => {
    if (archiveToggle) {
      return archivedFoodTrucks(array)
    } else {
      return activeFoodTrucks(array)
    }
  }

  return (
    <>
      <Button color="green" onClick={() => navigate("/my_food_trucks/add")}>
        <Icon name="add" /> Add
      </Button>
      <Header> My Food Trucks: </Header>
      <Menu pointing secondary>
        <Menu.Item
          active={archiveToggle === false}
          onClick={() => setArchiveToggle(false)}
        >
          Active ({activeFoodTrucks(foodTrucks).length})
        </Menu.Item>
        <Menu.Item
          active={archiveToggle === true}
          onClick={() => setArchiveToggle(true)}
        >
          Archived ({archivedFoodTrucks(foodTrucks).length})
        </Menu.Item>
      </Menu>
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
