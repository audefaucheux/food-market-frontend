import React, { useState } from "react"
import { Link } from "@reach/router"
import AdminShowFoodTruck from "../components/AdminShowFoodTruck"
import Helpers from "../Helpers"

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
      <Link to="/my_food_trucks/add">New Food Truck</Link>
      <button className="primary" onClick={handleClick}>
        Archived: {archivedFoodTrucks}
      </button>
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
    </>
  )
}

export default AdminFoodTruckContainer
