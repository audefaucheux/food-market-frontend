import React, { useState } from "react"
import FoodTruckForm from "./FoodTruckForm"

const AdminFoodTruckEdit = ({ id, selectedTruck }) => {
  // const [name, setName] = useState("")
  // const [description, setDescription] = useState("")
  // const [profilePicture, setProfilePicture] = useState("")
  // const [twitterAccount, setTwitterAccount] = useState("")

  const foodTruckDetails = selectedTruck(id)
  // const handleInputChange = (e, setter) => {
  //   setter(e.target.value)
  // }

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   let newFoodTruck = {
  //     name,
  //     description,
  //     profile_picture: profilePicture,
  //     twitter_account: twitterAccount
  //   }
  //   addFoodTruck(newFoodTruck)
  //   setName("")
  //   setDescription("")
  //   setProfilePicture("")
  //   setTwitterAccount("")
  // }

  return (
    <div>
      <p>Edit {id}</p>
      {console.log(foodTruckDetails)}
      {/* <FoodTruckForm {...{ name, setName, description, setDescription, profilePicture, setProfilePicture, twitterAccount, setTwitterAccount, handleSubmit, handleInputChange }}/> */}
    </div>
  )
}

export default AdminFoodTruckEdit
