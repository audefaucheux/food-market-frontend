import React from "react"
import ScheduleDayShow from "../components/ScheduleDayShow"

const ScheduleDayContainer = ({ days }) => {
  return (
    <div>
      <h3>Schedule Day</h3>
      <ul>
        {days.map(day => (
          <ScheduleDayShow key={day.id} {...{ ...day }} />
        ))}
      </ul>
    </div>
  )
}

export default ScheduleDayContainer
