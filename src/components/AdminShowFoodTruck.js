import React from "react"
import { Link } from "@reach/router"

const AdminShowFoodTruck = ({
  id,
  name,
  description,
  profile_picture,
  twitter_account,
  archived,
  updateArchived
}) => {
  return (
    <div>
      <div>----------------------------------</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={profile_picture} alt={name} width="30%" />
      <p>{twitter_account}</p>
      <p>Archived: {archived ? "true" : "false"}</p>
      <Link to={`edit/${id}`}>Edit</Link>
      <Link to="schedule">Schedule</Link>{" "}
      <button onClick={updateArchived}>Archive</button>
    </div>
  )
}

export default AdminShowFoodTruck
