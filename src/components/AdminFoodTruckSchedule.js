import React, { useState, useEffect } from "react"
import API from "../adapters/API"
import { Link } from "@reach/router"
import ScheduleRecurrenceContainer from "../containers/ScheduleRecurrenceContainer"
// import ScheduleDayContainer from "../containers/ScheduleDayContainer"

const AdminFoodTruckSchedule = ({ id, formData }) => {
  const [recurrences, setRecurrences] = useState([])

  useEffect(() => {
    API.getFoodTruck(id).then(data => setRecurrences(data.schedule_recurrences))
  }, [id])

  const addRecurrence = newRecurrence => {
    API.addScheduleRecurrence(newRecurrence).then(data => {
      if (data.errors) {
        alert(data.errors)
      } else if (data.schedule_recurrence) {
        setRecurrences([...recurrences, data.schedule_recurrence])
      }
    })
  }

  const deleteRecurrence = id => {
    API.deleteScheduleRecurrence(id)
    let updatedRecurrences = recurrences.filter(
      recurrence => recurrence.id !== id
    )
    setRecurrences(updatedRecurrences)
  }

  return (
    <div>
      <Link to="/my_food_trucks">BACK</Link>
      {/* {foodTruck.name} schedule: */}
      <ScheduleRecurrenceContainer
        {...{ formData, addRecurrence, deleteRecurrence, id, recurrences }}
      />
      {/* <ScheduleDayContainer days={foodTruck.schedule_days} {...{ formData }} /> */}
    </div>
  )
}

export default AdminFoodTruckSchedule
