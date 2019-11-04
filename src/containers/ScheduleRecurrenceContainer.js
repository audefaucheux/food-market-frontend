import React from "react"
import ScheduleRecurrenceShow from "../components/ScheduleRecurrenceShow"
import ScheduleForm from "../components/ScheduleForm"

const ScheduleRecurrenceContainer = ({ recurrences }) => {
  return (
    <div>
      <h3>Schedule Recurrence</h3>
      <ScheduleForm />
      <ul>
        {recurrences.map(recurrence => (
          <ScheduleRecurrenceShow key={recurrence.id} {...{ ...recurrence }} />
        ))}
      </ul>
    </div>
  )
}

export default ScheduleRecurrenceContainer
