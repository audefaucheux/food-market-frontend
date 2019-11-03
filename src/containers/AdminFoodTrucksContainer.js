import React from "react"
import AdminFoodTruckForm from "../components/AdminFoodTruckForm"
import AdminShowFoodTruck from "../components/AdminShowFoodTruck"
import API from "../adapters/API"

const AdminFoodTruckContainer = ({ history, user, setUserUpdate }) => {
  const addFoodTruck = newFoodTruck => {
    API.addFoodTruck(newFoodTruck).then(data => {
      if (data.errors) {
        alert(data.errors)
      } else if (data.food_truck) {
        setUserUpdate(data.food_truck)
      }
    })
  }

  const handleClickEdit = () => {
    console.log("redirect to edit page")
  }

  const handleClickUpdateSchedule = () => {
    console.log("redirect to schedule page")
  }

  return (
    <div>
      <p>MY FOOD TRUCKS PAGE</p>
      <AdminFoodTruckForm {...{ history, addFoodTruck }} />
      {user.food_trucks.map(foodTruck => {
        return (
          <AdminShowFoodTruck
            key={foodTruck.id}
            {...{
              ...foodTruck,
              handleClickEdit,
              handleClickUpdateSchedule
            }}
          />
        )
      })}
    </div>
  )
}

export default AdminFoodTruckContainer
