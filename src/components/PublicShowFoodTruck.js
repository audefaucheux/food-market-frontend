import React from "react"

const PublicShowFoodTruck = ({
  name,
  description,
  profile_picture,
  twitter_account,
  cuisines
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
      <p>Description: {description}</p>
      <img src={profile_picture} alt={name} width="30%" />
      <p>Twitter Account: {twitter_account}</p>
    </div>
  )
}

export default PublicShowFoodTruck
