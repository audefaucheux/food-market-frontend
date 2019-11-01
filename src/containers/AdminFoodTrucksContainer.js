import React, { useState, useEffect } from "react"
import AdminFoodTruckForm from "../components/AdminFoodTruckForm"
import AdminShowFoodTruck from "../components/AdminShowFoodTruck"
import API from "../adapters/API"

const AdminFoodTruckContainer = ({
  history,
  user,
  addFoodTruck,
  deleteFoodTruck
}) => {
  const [foodTrucks, setFoodTrucks] = useState([])

  useEffect(() => {
    if (user) {
      API.getUser(user.id).then(user => setFoodTrucks(user.food_trucks))
    }
  }, [user])

  // const handleClickDelete = id => {
  //   API.deleteFoodTruck(id)
  //   let deleteFoodTruck = foodTrucks.filter(foodTruck => foodTruck.id !== id)
  //   setFoodTrucks(deleteFoodTruck)
  // }

  return (
    <div>
      <p>MY FOOD TRUCKS PAGE</p>
      <AdminFoodTruckForm {...{ history, addFoodTruck }} />
      {foodTrucks.map(foodTruck => {
        return (
          <AdminShowFoodTruck
            key={foodTruck.id}
            {...{ ...foodTruck, deleteFoodTruck }}
          />
        )
      })}
    </div>
  )
}

export default AdminFoodTruckContainer
