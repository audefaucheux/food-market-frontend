import React from "react"
import ScheduleRecurrenceShow from "../components/ScheduleRecurrenceShow"
import ScheduleForm from "../components/ScheduleForm"

const ScheduleRecurrenceContainer = ({
  formData,
  addRecurrence,
  deleteRecurrence,
  id,
  recurrences
}) => {
  const sortByDayNum = array => array.sort((a, b) => a.day_num - b.day_num)

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
        {sortByDayNum(recurrences).map(recurrence => (
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
