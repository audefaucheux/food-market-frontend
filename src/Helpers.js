import React from "react"

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

const handleCheckboxChange = (e, setter, array) => {
  let convertValue = JSON.stringify(parseInt(e.target.id))
  if (e.target.checked) {
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

export default {
  handleInputChange,
  dayName,
  handleCheckboxChange,
  convertStringIntoDate,
  sortByName,
  showCuisines,
  findAndReplace,
  handleErrorMessage
}
