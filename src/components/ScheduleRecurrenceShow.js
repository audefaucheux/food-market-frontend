import React from "react"
import Helpers from "../Helpers"

const ScheduleRecurrenceShow = ({
  id,
  day_num,
  from_time,
  to_time,
  market,
  deleteRecurrence
}) => {
  return (
    <li>
      {Helpers.dayName(day_num)} - from:{from_time} to:{to_time} - {market.name}
      <button className="primary" onClick={() => deleteRecurrence(id)}>
        Delete
      </button>
    </li>
  )
}

export default ScheduleRecurrenceShow
