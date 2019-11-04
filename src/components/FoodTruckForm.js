import React from "react"

const FoodTruckForm = ({
  name,
  setName,
  description,
  setDescription,
  profilePicture,
  setProfilePicture,
  twitterAccount,
  setTwitterAccount,
  handleSubmit,
  handleInputChange
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => handleInputChange(e, setName)}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={description}
        onChange={e => handleInputChange(e, setDescription)}
      />
      <input
        type="text"
        name="profilePicture"
        placeholder="Profile Picture Url"
        value={profilePicture}
        onChange={e => handleInputChange(e, setProfilePicture)}
      />
      <input
        type="text"
        name="twitterAccount"
        placeholder="Twitter Account"
        value={twitterAccount}
        onChange={e => handleInputChange(e, setTwitterAccount)}
      />
      <input type="submit" value="Create Food Truck" />
    </form>
  )
}

export default FoodTruckForm
