import React, { useState, useEffect } from "react"
import Helpers from "../Helpers"
import { Form, Checkbox, Button } from "semantic-ui-react"
import keys from "../private/keys"
import "../stylesheets/components/FoodTruckForm.css"

const FoodTruckForm = ({
  formData,
  initialStates,
  sendAPIRequest,
  nameDef
}) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [profilePicture, setProfilePicture] = useState("")
  const [twitterAccount, setTwitterAccount] = useState("")
  const [cuisines, setCuisines] = useState([])
  const [localLoading, setLocalLoading] = useState(false)
  // const [errors, setErrors] = useState([])

  useEffect(() => {
    initialStates(
      setName,
      setDescription,
      setProfilePicture,
      setTwitterAccount,
      setCuisines
    )
  }, [initialStates])

  const backgroundPic = {
    backgroundImage: `url(${profilePicture})`
  }

  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: keys.cloudName,
      uploadPreset: keys.uploadPreset
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setProfilePicture(result.info.secure_url)
      } else if (result.event === "abort") {
        setLocalLoading(false)
      }
    }
  )

  const handleUpload = e => {
    e.preventDefault()
    setLocalLoading(true)
    myWidget.open()
  }

  const handleSubmit = e => {
    e.preventDefault()
    // setGlobalLoading(true)
    let newFoodTruck = {
      name,
      description,
      profile_picture: profilePicture,
      twitter_account: twitterAccount,
      cuisines
    }
    console.log(sendAPIRequest(newFoodTruck))
  }

  const cuisineCheck = cuisine => {
    return cuisines.includes(JSON.stringify(cuisine.id))
  }

  return (
    <Form onSubmit={handleSubmit}>
      {localLoading && Helpers.showLoader()}
      <div className="container-name-pic">
        <div className="container-name">
          <Form.Field required>
            <label>Food Truck Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => Helpers.handleInputChange(e, setName)}
            />
            {/* <small>{Helpers.handleErrorMessage(errors)}</small> */}
          </Form.Field>
        </div>
        <div className="profile-pic-form">
          <div className="container-image-form" style={backgroundPic}></div>
          <div
            id="upload_widget"
            className="edit-profile-pic"
            onClick={handleUpload}
          >
            Edit Image
          </div>
        </div>
      </div>
      <Form.TextArea
        name="description"
        label="Description (max 100 chars):"
        maxLength={100}
        value={description}
        onChange={e => Helpers.handleInputChange(e, setDescription)}
      />
      <small className="extra-info-form">
        Characters left: {100 - description.length}
      </small>
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
        <label>Cuisines (3 max):</label>
        <div className="cuisine-container">
          {formData.cuisines.map(cuisine => (
            <div key={cuisine.id}>
              <Checkbox
                type="checkbox"
                id={cuisine.id}
                checked={cuisineCheck(cuisine)}
                name={cuisine.name}
                onChange={e =>
                  Helpers.handleCheckboxChange(e, setCuisines, cuisines, 3)
                }
                label={cuisine.name}
              />
            </div>
          ))}
        </div>
      </Form.Field>

      <Button color="green">Submit</Button>
    </Form>
  )
}

export default FoodTruckForm
