import React, { useState, useEffect } from "react"
import API from "../adapters/API"
import ScheduleRecurrenceContainer from "../containers/ScheduleRecurrenceContainer"
import Helpers from "../Helpers"

const AdminFoodTruckSchedule = ({ id, formData }) => {
  const [recurrences, setRecurrences] = useState([])

  useEffect(() => {
    API.getFoodTruck(id).then(data => setRecurrences(data.schedule_recurrences))
  }, [id])

  return (
    <div>
      {Helpers.backButton()}
      <ScheduleRecurrenceContainer
        {...{ formData, recurrences, setRecurrences, id }}
      />
      {/* <ScheduleDayContainer days={foodTruck.schedule_days} {...{ formData }} /> */}
    </div>
  )
}

export default AdminFoodTruckSchedule
