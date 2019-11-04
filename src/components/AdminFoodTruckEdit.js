import React, { useState, useEffect } from "react"
import FoodTruckForm from "./FoodTruckForm"

const AdminFoodTruckEdit = ({ id, selectedTruck, editFoodTruck }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [profilePicture, setProfilePicture] = useState("")
  const [twitterAccount, setTwitterAccount] = useState("")

  const foodTruckDetails = selectedTruck(id)

  useEffect(() => {
    setName(foodTruckDetails.name)
    setDescription(foodTruckDetails.description)
    setProfilePicture(foodTruckDetails.profile_picture)
    setTwitterAccount(foodTruckDetails.twitter_account)
  }, [foodTruckDetails])

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
      editFoodTruck(id, newFoodTruck)
  }

  return (
    <div>
      <p>Edit food truck</p>
      <FoodTruckForm {...{ name, setName, description, setDescription, profilePicture, setProfilePicture, twitterAccount, setTwitterAccount, handleSubmit, handleInputChange }}/>
    </div>
  )
}

export default AdminFoodTruckEdit
