import React, { useState } from "react"
import FoodTruckForm from "./FoodTruckForm"
import { Link } from "@reach/router"

const AdminFoodTruckAdd = ({ addFoodTruck, formData }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [profilePicture, setProfilePicture] = useState("")
  const [twitterAccount, setTwitterAccount] = useState("")
  const [cuisine, setCuisine] = useState("")

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
    setCuisine([])
  }

  return (
    <>
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
    </>
  )
}

export default AdminFoodTruckAdd
