import React from "react"

const AdminShowFoodTruck = ({ id, name, deleteFoodTruck }) => {
  const handleClickEdit = () => {
    console.log("redirect to edit page")
  }

  return (
    <div>
      <h3>{name}</h3>
      <button className="primary" onClick={handleClickEdit}>
        Edit
      </button>
      <button className="primary" onClick={() => deleteFoodTruck(id)}>
        Delete
      </button>
    </div>
  )
}

export default AdminShowFoodTruck
