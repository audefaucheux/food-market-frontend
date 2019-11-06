import React from "react"

const PublicShowFoodTruck = ({
  name,
  description,
  profile_picture,
  twitter_account
}) => {
  return (
    <div>
      <div>----------------------------------</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={profile_picture} alt={name} width="30%" />
      <p>{twitter_account}</p>
    </div>
  )
}

export default PublicShowFoodTruck
