import React, { useState, useEffect } from "react"
import API from "../adapters/API"
import { Link } from "@reach/router"
import ScheduleRecurrenceContainer from "../containers/ScheduleRecurrenceContainer"
import { Button, Icon } from "semantic-ui-react"

const AdminFoodTruckSchedule = ({ id, formData, selectedTruck }) => {
  const [recurrences, setRecurrences] = useState([])

  // const truckDetails = selectedTruck(id)

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
      <Button>
        <Link to="/my_food_trucks">
          <Icon name="arrow left" />
          Back
        </Link>
      </Button>
      {/* <h2>{truckDetails ? truckDetails.name : null}</h2> */}
      <ScheduleRecurrenceContainer
        {...{ formData, addRecurrence, deleteRecurrence, id, recurrences }}
      />
      {/* <ScheduleDayContainer days={foodTruck.schedule_days} {...{ formData }} /> */}
    </div>
  )
}

export default AdminFoodTruckSchedule
