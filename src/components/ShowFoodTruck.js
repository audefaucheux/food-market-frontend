import React from "react"

const ShowFoodTruck = ({ id, name, handleClickDelete }) => {
  const handleClickEdit = () => {
    console.log("redirect to edit page")
  }

  return (
    <div>
      <h3>{name}</h3>
      <button className="primary" onClick={handleClickEdit}>
        Edit
      </button>
      <button className="primary" onClick={() => handleClickDelete(id)}>
        Delete
      </button>
    </div>
  )
}

export default ShowFoodTruck
