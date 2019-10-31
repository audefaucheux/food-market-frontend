import React, { useState, useEffect } from "react"
import FoodTruckForm from "../components/FoodTruckForm"
import ShowFoodTruck from "../components/ShowFoodTruck"
import API from "../adapters/API"

const FoodTruckContainer = ({ history, user, login }) => {
  const [foodTrucks, setFoodTrucks] = useState([])

  useEffect(() => {
    if (user) {
      API.getUser(user.id).then(user => setFoodTrucks(user.food_trucks))
    }
  }, [user])

  const addFoodTruck = newFoodTruck => {
    API.addFoodTruck(newFoodTruck).then(data =>
      setFoodTrucks([...foodTrucks, data])
    )
  }

  const handleClickDelete = id => {
    API.deleteFoodTruck(id)
    let deleteFoodTruck = foodTrucks.filter(foodTruck => foodTruck.id !== id)
    setFoodTrucks(deleteFoodTruck)
  }

  return (
    <div>
      <p>MY FOOD TRUCKS PAGE</p>
      <FoodTruckForm {...{ history, addFoodTruck }} />
      {foodTrucks.map(foodTruck => {
        return (
          <ShowFoodTruck
            key={foodTruck.id}
            {...{ ...foodTruck, handleClickDelete }}
          />
        )
      })}
    </div>
  )
}

export default FoodTruckContainer
