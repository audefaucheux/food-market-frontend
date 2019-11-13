import React from "react"
import { navigate } from "@reach/router"
import { Dimmer, Loader, Icon } from "semantic-ui-react"

const handleInputChange = (e, setter) => {
  setter(e.target.value)
}

const dayName = dayNum => {
  if (dayNum === 1) return "Monday"
  if (dayNum === 2) return "Tuesday"
  if (dayNum === 3) return "Wednesday"
  if (dayNum === 4) return "Thursday"
  if (dayNum === 5) return "Friday"
  if (dayNum === 6) return "Saturday"
  if (dayNum === 7) return "Sunday"
}

const handleCheckboxChange = (e, setter, array, limit = array.length + 1) => {
  let convertValue = JSON.stringify(parseInt(e.target.id))
  if (e.target.checked && array.length < limit) {
    setter([...array, convertValue])
  } else {
    let updatedArray = array.filter(el => el !== convertValue)
    setter(updatedArray)
  }
}

const convertStringIntoDate = date => new Date(date)

const sortByName = array => array.sort((a, b) => a.name.localeCompare(b.name))

const showCuisines = array => {
  if (array.length !== 0) {
    return sortByName(array).map((cuisine, index) => {
      if (index + 1 < array.length) {
        return cuisine.name + " | "
      } else {
        return cuisine.name
      }
    })
  } else {
    return null
  }
}

const findAndReplace = (array, data) => {
  return array.map(element => {
    if (element.id === data.id) {
      return data
    } else {
      return element
    }
  })
}

const handleErrorMessage = (array, checker1 = "") => {
  return array.map(
    (error, index) =>
      error.toLowerCase().includes(checker1) && (
        <div key={index} className="error-message">
          {error}
        </div>
      )
  )
}

const showLoader = () => (
  <Dimmer active inverted page>
    <Loader inverted>Loading</Loader>
  </Dimmer>
)

const backButton = () => (
  <Icon name="arrow left" onClick={() => navigate("/my_food_trucks")} />
)

const selectedTruck = (id, array) => {
  let truck = array.find(foodTruck => foodTruck.id === parseInt(id))
  if (array.length !== 0) {
    Object.keys(truck).forEach(key => {
      if (truck[key] === null) return (truck[key] = "")
    })
    return truck
  }
}

export default {
  handleInputChange,
  dayName,
  handleCheckboxChange,
  convertStringIntoDate,
  sortByName,
  showCuisines,
  findAndReplace,
  handleErrorMessage,
  showLoader,
  backButton,
  selectedTruck
}
