import React, { useState, useEffect } from "react"
import Helpers from "../Helpers"
import { Form, Checkbox, Button } from "semantic-ui-react"

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
    <Form onSubmit={handleSubmit}>
      <Form.Field required>
        <label>Food Truck Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => Helpers.handleInputChange(e, setName)}
        />
      </Form.Field>
      <Form.TextArea
        name="description"
        label="Description:"
        value={description}
        onChange={e => Helpers.handleInputChange(e, setDescription)}
      />
      <Form.Field>
        <label>Profile Picture URL:</label>
        <input
          type="text"
          name="profilePicture"
          value={profilePicture}
          onChange={e => Helpers.handleInputChange(e, setProfilePicture)}
        />
      </Form.Field>
      <Form.Field>
        <label>Twitter Account:</label>
        <input
          type="text"
          name="twitterAccount"
          value={twitterAccount}
          onChange={e => Helpers.handleInputChange(e, setTwitterAccount)}
        />
      </Form.Field>
      <Form.Field>
        <label>Cuisine:</label>
        {formData.cuisines.map(cuisine => (
          <div key={cuisine.id}>
            <Checkbox
              type="checkbox"
              id={cuisine.id}
              checked={cuisineCheck(cuisine)}
              name={cuisine.name}
              onChange={e =>
                Helpers.handleCheckboxChange(e, setCuisines, cuisines)
              }
              label={cuisine.name}
            />
          </div>
        ))}
      </Form.Field>

      <Button color="green" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FoodTruckForm
