import React, { useState } from "react"
import { navigate } from "@reach/router"
import AdminShowFoodTruck from "../components/AdminShowFoodTruck"
import Helpers from "../Helpers"
import { Button, Icon, Card, Menu } from "semantic-ui-react"
import API from "../adapters/API"

const AdminFoodTruckContainer = ({
  foodTrucks,
  setFoodTrucks,
  handleRedirect
}) => {
  const [archiveToggle, setArchiveToggle] = useState(false)

  const archiveFoodTruck = (id, updatedFoodTruck) => {
    API.updateFoodTruck(id, updatedFoodTruck).then(data => {
      if (data.errors) {
        alert(data.errors)
      } else if (data.food_truck) {
        setFoodTrucks(Helpers.findAndReplace(foodTrucks, data.food_truck))
        handleRedirect("/my_food_trucks")
      }
    })
  }

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
      <Button onClick={() => navigate("/my_food_trucks/add")}>
        <Icon name="add" /> Add
      </Button>
      <h2> My Food Trucks: </h2>
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
                archiveFoodTruck
              }}
            />
          )
        })}
      </Card.Group>
    </>
  )
}

export default AdminFoodTruckContainer
