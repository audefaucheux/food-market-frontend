import React from "react"
import { Link } from "@reach/router"
import AdminShowFoodTruck from "../components/AdminShowFoodTruck"

const AdminFoodTruckContainer = ({ user }) => {
  return (
    <>
      <Link to="/my_food_trucks/add">New Food Truck</Link>
      {user.food_trucks.map(foodTruck => {
        return (
          <AdminShowFoodTruck
            key={foodTruck.id}
            {...{
              ...foodTruck
            }}
          />
        )
      })}
    </>
  )
}

export default AdminFoodTruckContainer
