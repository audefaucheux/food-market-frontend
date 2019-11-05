import React, { useState, useEffect } from "react"
import Helpers from "../Helpers"

const FoodTruckForm = ({ formData, addFoodTruck, initialStates }) => {
  const [name, setName] = useState("test")
  const [description, setDescription] = useState("")
  const [profilePicture, setProfilePicture] = useState("")
  const [twitterAccount, setTwitterAccount] = useState("")
  const [cuisine, setCuisine] = useState("")

  useEffect(() => {
    initialStates(
      [setName, setDescription, setProfilePicture, setTwitterAccount],
      [setCuisine]
    )
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    let newFoodTruck = {
      name,
      description,
      profile_picture: profilePicture,
      twitter_account: twitterAccount
    }
    addFoodTruck(newFoodTruck)
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
        <select
          value={cuisine}
          // multiple
          onChange={e => Helpers.handleInputChange(e, setCuisine)}
        >
          <option value="">--Please choose an option--</option>
          {formData.cuisines.map(cuisine => (
            <option key={cuisine.id} value={cuisine.id}>
              {cuisine.name}
            </option>
          ))}
        </select>
      </label>

      <input type="submit" value="Submit" />
    </form>
  )
}

export default FoodTruckForm
