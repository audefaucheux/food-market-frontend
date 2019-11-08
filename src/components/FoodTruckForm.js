import React, { useState, useEffect } from "react"
import Helpers from "../Helpers"
import { Form, Checkbox, Button, Image } from "semantic-ui-react"
import keys from "../private/keys"

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

  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: keys.cloudName,
      uploadPreset: keys.uploadPreset
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setProfilePicture(result.info.secure_url)
      }
    }
  )

  const handleUpload = e => {
    e.preventDefault()
    myWidget.open()
  }

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
        <label>Twitter Account:</label>
        <input
          type="text"
          name="twitterAccount"
          value={twitterAccount}
          onChange={e => Helpers.handleInputChange(e, setTwitterAccount)}
        />
      </Form.Field>
      <Button id="upload_widget" onClick={handleUpload}>
        Upload New Picture
      </Button>
      <div className="container-image">
        <Image src={profilePicture} alt={name} />
      </div>
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
