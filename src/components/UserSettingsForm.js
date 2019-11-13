import React, { useState } from "react"
import { Form, Button, Message } from "semantic-ui-react"
import API from "../adapters/API"
import Helpers from "../Helpers"

const UserSettingsForm = ({ user }) => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [messages, setMessages] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    setMessages([])
    let userDetails = {
      current_password: currentPassword,
      password: newPassword,
      password_confirmation: confirmNewPassword
    }
    API.updateUser(user.id, userDetails).then(data => {
      setMessages(data)
      if (data.success) {
        setCurrentPassword("")
        setNewPassword("")
        setConfirmNewPassword("")
      }
    })
  }

  return (
    <div>
      {messages.success &&
        messages.success.map((message, index) => (
          <Message success content={message} key={index} />
        ))}
      <Form onSubmit={handleSubmit}>
        <Form.Field required>
          <label>Current Password:</label>
          <input
            type="password"
            name="current_password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
          <small>
            {messages.errors &&
              Helpers.handleErrorMessage(messages.errors, "current password")}
          </small>
        </Form.Field>
        <Form.Field required>
          <label>New Password:</label>
          <input
            type="password"
            name="new_password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
          <small>
            {messages.errors &&
              Helpers.handleErrorMessage(messages.errors, "new password can't")}
          </small>
        </Form.Field>
        <Form.Field required>
          <label>Confirm New Password:</label>
          <input
            type="password"
            name="confirm_new_password"
            value={confirmNewPassword}
            onChange={e => setConfirmNewPassword(e.target.value)}
          />
          <small>
            {messages.errors &&
              Helpers.handleErrorMessage(messages.errors, "confirmation")}
          </small>
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default UserSettingsForm
