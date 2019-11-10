import React from "react"
import Helpers from "../Helpers"
import { Icon } from "semantic-ui-react"

const ScheduleRecurrenceShow = ({
  id,
  day_num,
  from_time,
  to_time,
  market,
  handleEditRecurrence,
  deleteRecurrence
}) => {
  return (
    <tr>
      <td>{Helpers.dayName(day_num)}</td>
      <td>{from_time}</td>
      <td>{to_time}</td>
      <td>{market.name}</td>
      <td>
        <Icon onClick={handleEditRecurrence} name="edit" />
        <Icon onClick={() => deleteRecurrence(id)} name="delete" />
      </td>
    </tr>
  )
}

export default ScheduleRecurrenceShow
