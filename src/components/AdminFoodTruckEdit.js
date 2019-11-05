import React, { useState, useEffect } from "react"
import FoodTruckForm from "./FoodTruckForm"
import { Link } from "@reach/router"

const AdminFoodTruckEdit = ({ id, selectedTruck, editFoodTruck, formData }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [profilePicture, setProfilePicture] = useState("")
  const [twitterAccount, setTwitterAccount] = useState("")
  const [cuisine, setCuisine] = useState("")

  const foodTruckDetails = selectedTruck(id)

  useEffect(() => {
    setName(foodTruckDetails.name)
    setDescription(foodTruckDetails.description)
    setProfilePicture(foodTruckDetails.profile_picture)
    setTwitterAccount(foodTruckDetails.twitter_account)
  }, [foodTruckDetails])

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
      <Link to="/my_food_trucks">BACK</Link>
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
          cuisine,
          setCuisine,
          handleSubmit,
          formData
        }}
      />
    </div>
  )
}

export default AdminFoodTruckEdit
