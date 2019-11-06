import React from "react"
import Helpers from "../Helpers"

const PublicShowFoodTruck = ({
  name,
  description,
  profile_picture,
  twitter_account,
  cuisines,
  schedule_recurrences,
  dateFilter
}) => {
  const findTimeandMarket = () => {
    let convertedDate = Helpers.convertStringIntoDate(dateFilter)
    let filteredReccurence = schedule_recurrences.find(
      recurrence => recurrence.day_num === convertedDate.getDay()
    )
    return (
      <>
        <p>
          Time: {filteredReccurence.from_time} - {filteredReccurence.to_time}
        </p>
        <p>Market: {filteredReccurence.market.name}</p>
      </>
    )
  }

  return (
    <div>
      <div>----------------------------------</div>
      <h3>{name}</h3>
      {findTimeandMarket()}
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
