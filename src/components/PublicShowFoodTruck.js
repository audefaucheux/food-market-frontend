import React from "react"
import Helpers from "../Helpers"

const PublicShowFoodTruck = ({
  // name,
  // description,
  // profile_picture,
  // twitter_account,
  // cuisines,
  // schedule_recurrences,
  // selectedDate
  food_truck,
  from_time,
  to_time
}) => {
  return (
    <div>
      <div>----------------------------------</div>
      <h3>{food_truck.name}</h3>
      <p>
        Time: {from_time} - {to_time}
      </p>
      <div>
        Cuisine:{" "}
        {food_truck.cuisines.length !== 0
          ? Helpers.sortByName(food_truck.cuisines).map(
              cuisine => cuisine.name + " | "
            )
          : null}
      </div>
      <p>Description: {food_truck.description}</p>
      <img src={food_truck.profile_picture} alt={food_truck.name} width="30%" />
      <p>Twitter Account: {food_truck.twitter_account}</p>
    </div>
  )
}

// const findTimeandMarket = () => {
//   let convertedDate = Helpers.convertStringIntoDate(selectedDate)
//   let filteredReccurence = schedule_recurrences.find(
//     recurrence => recurrence.day_num === convertedDate.getDay()
//   )
//   return (
//     <>
//       <p>
//         {filteredReccurence
//           ? `Time: ${filteredReccurence.from_time} - ${filteredReccurence.to_time}`
//           : null}
//       </p>
//       <p>
//         {filteredReccurence
//           ? `Market: ${filteredReccurence.market.name}`
//           : null}
//       </p>
//     </>
//   )
// }

//   return (
//     <div>
//       <div>----------------------------------</div>
//       <h3>{name}</h3>
//       {/* {findTimeandMarket()} */}
//       <div>
//         Cuisine:{" "}
//         {cuisines.length !== 0
//           ? Helpers.sortByName(cuisines).map(cuisine => cuisine.name + " | ")
//           : null}
//       </div>
//       <p>Description: {description}</p>
//       <img src={profile_picture} alt={name} width="30%" />
//       <p>Twitter Account: {twitter_account}</p>
//     </div>
//   )
// }

export default PublicShowFoodTruck
