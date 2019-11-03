import React from "react"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AdminFoodTruckForm from "../components/AdminFoodTruckForm"
import AdminShowFoodTruck from "../components/AdminShowFoodTruck"
import API from "../adapters/API"

const AdminFoodTruckContainer = ({ user, setUserUpdate }) => {
  // const [foodTruckSelected, setFoodTruckSelected] = useState(null)
  // const [screenSelected, setScreenSelected] = useState(null)

  const addFoodTruck = newFoodTruck => {
    API.addFoodTruck(newFoodTruck).then(data => {
      if (data.errors) {
        alert(data.errors)
      } else if (data.food_truck) {
        setUserUpdate(data.food_truck)
      }
    })
  }

  return (
    <div>
      <p>MY FOOD TRUCKS PAGE</p>
      <AdminFoodTruckForm {...{ addFoodTruck }} />
      {user.food_trucks.map(foodTruck => {
        return (
          <AdminShowFoodTruck
            key={foodTruck.id}
            {...{
              ...foodTruck
              // setFoodTruckSelected,
              // setScreenSelected
            }}
          />
        )
      })}
    </div>
  )
}

export default AdminFoodTruckContainer
