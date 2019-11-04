import React from "react"

const ScheduleRecurrenceShow = ({ weekday, from_time, to_time, market }) => {
  return (
    <li>
      {weekday} - from:{from_time} to:{to_time} - {market.name}
    </li>
  )
}

export default ScheduleRecurrenceShow
