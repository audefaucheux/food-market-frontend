import React from "react"

const ScheduleDayShow = ({ date, from_time, to_time, market }) => {
  return (
    <li>
      {date} - from:{from_time} to:{to_time} - {market.name}
    </li>
  )
}

export default ScheduleDayShow
