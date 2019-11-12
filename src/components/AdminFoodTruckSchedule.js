import React, { useState, useEffect } from "react"
import API from "../adapters/API"
import ScheduleRecurrenceContainer from "../containers/ScheduleRecurrenceContainer"
import Helpers from "../Helpers"

const AdminFoodTruckSchedule = ({ id, formData, errors, setErrors }) => {
  const [recurrences, setRecurrences] = useState([])

  useEffect(() => {
    API.getFoodTruck(id).then(data => setRecurrences(data.schedule_recurrences))
  }, [id])

  const addRecurrence = newRecurrence => {
    API.addScheduleRecurrence(newRecurrence).then(data => {
      if (data.errors) {
        setErrors(data.errors)
      } else if (data.schedule_recurrence) {
        setRecurrences([...recurrences, data.schedule_recurrence])
      }
    })
  }

  const updateRecurrence = (data, id) => {
    API.updateScheduleRecurrence(id, data).then(data => {
      if (data.errors) {
        setErrors(data.errors)
      } else if (data.schedule_recurrence) {
        setRecurrences(
          Helpers.findAndReplace(recurrences, data.schedule_recurrence)
        )
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
      {Helpers.backButton()}
      {/* <h2>{truckDetails ? truckDetails.name : null}</h2> */}
      <ScheduleRecurrenceContainer
        {...{
          formData,
          addRecurrence,
          updateRecurrence,
          deleteRecurrence,
          id,
          recurrences,
          errors,
          setErrors
        }}
      />
      {/* <ScheduleDayContainer days={foodTruck.schedule_days} {...{ formData }} /> */}
    </div>
  )
}

export default AdminFoodTruckSchedule
