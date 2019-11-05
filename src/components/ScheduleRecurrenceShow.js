import React from "react"

const ScheduleRecurrenceShow = ({
  id,
  weekday,
  from_time,
  to_time,
  market,
  deleteRecurrence
}) => {
  return (
    <li>
      {weekday} - from:{from_time} to:{to_time} - {market.name}
      <button className="primary" onClick={() => deleteRecurrence(id)}>
        Delete
      </button>
    </li>
  )
}

export default ScheduleRecurrenceShow
