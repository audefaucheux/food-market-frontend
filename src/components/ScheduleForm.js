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
      day_num: parseInt(day, 10),
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
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="7">Sunday</option>
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
