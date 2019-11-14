import React, { useState, useEffect } from "react"
import ScheduleRecurrenceShow from "../components/ScheduleRecurrenceShow"
import ScheduleForm from "../components/ScheduleForm"
import "../stylesheets/containers/ScheduleRecurrenceContainer.css"
import { Button } from "semantic-ui-react"
import API from "../adapters/API"
import Helpers from "../Helpers"

const ScheduleRecurrenceContainer = ({
  formData,
  recurrences,
  setRecurrences,
  id
}) => {
  const [day, setDay] = useState("")
  const [fromTime, setFromTime] = useState("")
  const [toTime, setToTime] = useState("")
  const [market, setMarket] = useState("")
  const [selectedRecurrence, setSelectedRecurrence] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if (selectedRecurrence) {
      setDay(selectedRecurrence.day_num)
      setFromTime(selectedRecurrence.from_time)
      setToTime(selectedRecurrence.to_time)
      setMarket(selectedRecurrence.market.id)
    }
  }, [selectedRecurrence])

  const sortByDayNum = array => array.sort((a, b) => a.day_num - b.day_num)

  const handleNewScheduleClick = () => {
    setShowForm(!showForm)
  }

  const addRecurrence = newRecurrence => {
    API.addScheduleRecurrence(newRecurrence).then(data => {
      if (data.errors) {
        setErrors(data.errors)
      } else if (data.schedule_recurrence) {
        setRecurrences([...recurrences, data.schedule_recurrence])
        resetForm()
        setErrors([])
      }
    })
  }

  const handleEditButtonRecurrence = recurrence => {
    setErrors([])
    setSelectedRecurrence(recurrence)
    setShowForm(true)
  }

  const deleteRecurrence = id => {
    API.deleteScheduleRecurrence(id)
    let updatedRecurrences = recurrences.filter(
      recurrence => recurrence.id !== id
    )
    setRecurrences(updatedRecurrences)
  }

  const updateRecurrence = (data, id) => {
    API.updateScheduleRecurrence(id, data).then(data => {
      if (data.errors) {
        setErrors(data.errors)
      } else if (data.schedule_recurrence) {
        setRecurrences(
          Helpers.findAndReplace(recurrences, data.schedule_recurrence)
        )
        resetForm()
      }
    })
  }

  const APIrequestSchedule = (data, recurrenceDetails) => {
    recurrenceDetails
      ? updateRecurrence(data, recurrenceDetails.id)
      : addRecurrence(data)
    setSelectedRecurrence(null)
  }

  const resetForm = () => {
    setDay("")
    setFromTime("")
    setToTime("")
    setMarket("")
  }

  return (
    <div className="recurrence-page">
      <h2>Schedule Recurrence(s):</h2>
      <Button color="grey" onClick={handleNewScheduleClick}>
        {showForm ? "Hide Form" : "Add Schedule"}
      </Button>
      {showForm && (
        <ScheduleForm
          {...{
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
            errors,
            setErrors,
            selectedRecurrence
          }}
          dayField="Weekday"
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
              handleEditButtonRecurrence={() =>
                handleEditButtonRecurrence(recurrence)
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScheduleRecurrenceContainer
