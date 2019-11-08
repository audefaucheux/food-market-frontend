import React, { useState } from "react"
import ScheduleRecurrenceShow from "../components/ScheduleRecurrenceShow"
import ScheduleForm from "../components/ScheduleForm"
import "../stylesheets/containers/ScheduleRecurrenceContainer.css"
import { Button } from "semantic-ui-react"

const ScheduleRecurrenceContainer = ({
  formData,
  addRecurrence,
  deleteRecurrence,
  id,
  recurrences
}) => {
  const [showForm, setShowForm] = useState(false)
  const sortByDayNum = array => array.sort((a, b) => a.day_num - b.day_num)

  const handleNewScheduleClick = () => {
    setShowForm(!showForm)
  }

  return (
    <div>
      <h3>Schedule Recurrence</h3>
      <Button onClick={handleNewScheduleClick}>
        {showForm ? "Hide Form" : "Add Schedule"}
      </Button>
      {showForm && (
        <ScheduleForm
          {...{
            formData,
            addRecurrence,
            id
          }}
          dayField="weekday"
        />
      )}
      <table className="schedule-table">
        <thead>
          <tr>
            <th width="25%">Weekday</th>
            <th width="10%">From</th>
            <th width="10%">To</th>
            <th width="35%">Location</th>
            <th width="15%"></th>
          </tr>
        </thead>
        <tbody>
          {sortByDayNum(recurrences).map(recurrence => (
            <ScheduleRecurrenceShow
              key={recurrence.id}
              {...{ ...recurrence, deleteRecurrence }}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScheduleRecurrenceContainer
