import React from "react"
import ScheduleRecurrenceShow from "../components/ScheduleRecurrenceShow"
import ScheduleForm from "../components/ScheduleForm"

const ScheduleRecurrenceContainer = ({
  recurrences,
  formData,
  addRecurrence,
  deleteRecurrence,
  id
}) => {
  return (
    <div>
      <h3>Schedule Recurrence</h3>
      <ScheduleForm
        {...{
          formData,
          addRecurrence,
          id
        }}
        dayField="weekday"
      />
      <ul>
        {recurrences.map(recurrence => (
          <ScheduleRecurrenceShow
            key={recurrence.id}
            {...{ ...recurrence, deleteRecurrence }}
          />
        ))}
      </ul>
    </div>
  )
}

export default ScheduleRecurrenceContainer
