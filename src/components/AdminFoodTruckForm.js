import React, { useState } from "react"

const AdminFoodTruckForm = ({ addFoodTruck }) => {
  const [name, setName] = useState("")

  const handleInputChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { name } = e.target
    let newFoodTruck = {
      name: name.value
    }
    addFoodTruck(newFoodTruck)
    setName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={handleInputChange}
      ></input>
      <input type="submit" value="Create Food Truck" />
    </form>
  )
}

export default AdminFoodTruckForm
