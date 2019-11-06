import React from "react"
import { Link } from "@reach/router"
import AdminShowFoodTruck from "../components/AdminShowFoodTruck"

const AdminFoodTruckContainer = ({ foodTrucks, editFoodTruck }) => {
  return (
    <>
      <Link to="/my_food_trucks/add">New Food Truck</Link>
      {foodTrucks.map(foodTruck => {
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
