import React, { useState, useEffect } from "react"
import Helpers from "../Helpers"

const FoodTruckForm = ({ formData, initialStates, sendAPIRequest }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [profilePicture, setProfilePicture] = useState("")
  const [twitterAccount, setTwitterAccount] = useState("")
  const [cuisines, setCuisines] = useState([])

  useEffect(() => {
    initialStates(
      setName,
      setDescription,
      setProfilePicture,
      setTwitterAccount,
      setCuisines
    )
  }, [initialStates])

  const handleSubmit = e => {
    e.preventDefault()
    let newFoodTruck = {
      name,
      description,
      profile_picture: profilePicture,
      twitter_account: twitterAccount,
      cuisines
    }
    sendAPIRequest(newFoodTruck)
  }

  const cuisineCheck = cuisine => {
    return cuisines.includes(JSON.stringify(cuisine.id))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => Helpers.handleInputChange(e, setName)}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={description}
        onChange={e => Helpers.handleInputChange(e, setDescription)}
      />
      <input
        type="text"
        name="profilePicture"
        placeholder="Profile Picture Url"
        value={profilePicture}
        onChange={e => Helpers.handleInputChange(e, setProfilePicture)}
      />
      <input
        type="text"
        name="twitterAccount"
        placeholder="Twitter Account"
        value={twitterAccount}
        onChange={e => Helpers.handleInputChange(e, setTwitterAccount)}
      />
      <label>
        Cuisine:
        {formData.cuisines.map(cuisine => (
          <label key={cuisine.id}>
            <input
              type="checkbox"
              id={cuisine.id}
              checked={cuisineCheck(cuisine)}
              name={cuisine.name}
              onChange={e =>
                Helpers.handleCheckboxChange(e, setCuisines, cuisines)
              }
            />
            {cuisine.name}
          </label>
        ))}
      </label>

      <input type="submit" value="Submit" />
    </form>
  )
}

export default FoodTruckForm
