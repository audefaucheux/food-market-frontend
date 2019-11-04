import React, { useState, useEffect } from "react"
// import { Router, navigate } from "@reach/router"
import API from "../adapters/API"
import ScheduleRecurrenceContainer from "../containers/ScheduleRecurrenceContainer"
import ScheduleDayContainer from "../containers/ScheduleDayContainer"

const AdminFoodTruckSchedule = ({ id }) => {
  const [foodTruck, setFoodTruck] = useState({
    schedule_recurrences: [],
    schedule_days: []
  })

  useEffect(() => {
    API.getFoodTruck(id).then(setFoodTruck)
  }, [id])

  return (
    <div>
      {foodTruck.name} schedule:
      <ScheduleRecurrenceContainer
        recurrences={foodTruck.schedule_recurrences}
      />
      <ScheduleDayContainer days={foodTruck.schedule_days} />
    </div>
  )
}

export default AdminFoodTruckSchedule
