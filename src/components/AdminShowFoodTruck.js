import React from "react"
import { Link } from "@reach/router"

const AdminShowFoodTruck = ({
  id,
  name,
  description,
  profile_picture,
  twitter_account
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={profile_picture} alt={name} width="30%" />
      <p>{twitter_account}</p>
      <Link to={`edit/${id}`}>Edit</Link>
      <Link to="schedule">Schedule</Link> <Link to="archive">Archive</Link>
    </div>
  )
}

export default AdminShowFoodTruck
