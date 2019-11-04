import React, { useState } from "react"
import FoodTruckForm from "./FoodTruckForm"

const AdminFoodTruckAdd = ({ addFoodTruck }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [profilePicture, setProfilePicture] = useState("")
  const [twitterAccount, setTwitterAccount] = useState("")

  const handleInputChange = (e, setter) => {
    setter(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let newFoodTruck = {
      name,
      description,
      profile_picture: profilePicture,
      twitter_account: twitterAccount
    }
    addFoodTruck(newFoodTruck)
    setName("")
    setDescription("")
    setProfilePicture("")
    setTwitterAccount("")
  }

  return (
    <>
      <FoodTruckForm
        {...{
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
        }}
      />
    </>
  )
}

export default AdminFoodTruckAdd