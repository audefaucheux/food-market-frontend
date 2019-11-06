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
  if (e.target.checked) {
    setter([...array, e.target.id])
  } else {
    let updatedArray = array.filter(el => el !== e.target.id)
    setter(updatedArray)
  }
}

const convertStringIntoDate = date => new Date(date)

const sortByName = array => array.sort((a, b) => a.name.localeCompare(b.name))

export default {
  handleInputChange,
  dayName,
  handleCheckboxChange,
  convertStringIntoDate,
  sortByName
}
