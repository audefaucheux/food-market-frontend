import React, { useState } from "react"
import Helpers from "../Helpers"

const ScheduleForm = ({ dayField, formData, addRecurrence, id }) => {
  const [day, setDay] = useState("")
  const [fromTime, setFromTime] = useState("")
  const [toTime, setToTime] = useState("")
  const [market, setMarket] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    let newRecurrence = {
      weekday: day,
      from_time: fromTime,
      to_time: toTime,
      market_id: market,
      food_truck_id: id
    }
    addRecurrence(newRecurrence)
    setDay("")
    setFromTime("")
    setToTime("")
    setMarket("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {dayField}:
        <select
          onChange={e => Helpers.handleInputChange(e, setDay)}
          value={day}
        >
          <option value="">--Please choose an option--</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </label>
      <label>
        from:
        <input
          value={fromTime}
          type="time"
          name="time_from"
          onChange={e => Helpers.handleInputChange(e, setFromTime)}
        />
      </label>
      <label>
        to:
        <input
          value={toTime}
          type="time"
          name="time_to"
          onChange={e => Helpers.handleInputChange(e, setToTime)}
        />
      </label>
      <label>
        Market:
        <select
          onChange={e => Helpers.handleInputChange(e, setMarket)}
          value={market}
        >
          <option value="">--Please choose an option--</option>
          {formData.markets.map(market => (
            <option key={market.id} value={market.id}>
              {market.name}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default ScheduleForm
