import React from "react"
import Helpers from "../Helpers"
import { Form, Button } from "semantic-ui-react"

const ScheduleForm = ({
  formData,
  APIrequestSchedule,
  day,
  setDay,
  fromTime,
  setFromTime,
  toTime,
  setToTime,
  market,
  setMarket,
  id,
  selectedRecurrence,
  errors,
  setErrors
}) => {
  const handleSubmit = e => {
    e.preventDefault()

    let newRecurrence = {
      day_num: parseInt(day, 10),
      from_time: fromTime,
      to_time: toTime,
      market_id: market,
      food_truck_id: id
    }
    APIrequestSchedule(newRecurrence, selectedRecurrence)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Weekday</label>
        {/* <label>{dayField}:</label> */}
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
        <small>{Helpers.handleErrorMessage(errors, "day num")}</small>
      </Form.Field>
      <Form.Field>
        <label>From:</label>
        <input
          value={fromTime}
          type="time"
          name="time_from"
          onChange={e => Helpers.handleInputChange(e, setFromTime)}
        />
        <small>{Helpers.handleErrorMessage(errors, "from time")}</small>
      </Form.Field>
      <Form.Field>
        <label>To:</label>
        <input
          value={toTime}
          type="time"
          name="time_to"
          onChange={e => Helpers.handleInputChange(e, setToTime)}
        />
        <small>{Helpers.handleErrorMessage(errors, "to time")}</small>
      </Form.Field>
      <Form.Field>
        <label>Market:</label>
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
        <small>{Helpers.handleErrorMessage(errors, "market")}</small>
      </Form.Field>
      <Button>Submit</Button>
    </Form>
  )
}

export default ScheduleForm
