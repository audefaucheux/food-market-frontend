import React from "react"
import { Link } from "@reach/router"

const AdminShowFoodTruck = ({
  id,
  name,
  description,
  profile_picture,
  twitter_account,
  cuisines,
  archived,
  editFoodTruck
}) => {
  return (
    <div>
      <div>----------------------------------</div>
      <h3>{name}</h3>
      <div>
        Cuisine:{" "}
        {cuisines.length !== 0
          ? cuisines.map(cuisine => cuisine.name + " | ")
          : null}
      </div>
      <p>{description}</p>
      <img src={profile_picture} alt={name} width="30%" />
      <p>{twitter_account}</p>
      <p>Archived: {archived ? "true" : "false"}</p>
      <Link to={`edit/${id}`} className="primary">
        Edit
      </Link>
      <Link to={`schedule/${id}`} className="primary">
        Schedule
      </Link>{" "}
      <button
        onClick={() => editFoodTruck(id, { archived: !archived })}
        className="primary"
      >
        {archived ? "Reactivate" : "Archive"}
      </button>
    </div>
  )
}

export default AdminShowFoodTruck
