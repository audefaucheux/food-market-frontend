import React, { useState } from "react"
import { Form, Button, Message } from "semantic-ui-react"
import API from "../adapters/API"

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
    API.updateUser(user.id, userDetails).then(setMessages)
    setCurrentPassword("")
    setNewPassword("")
    setConfirmNewPassword("")
  }

  return (
    <div>
      {messages.success &&
        messages.success.map((message, index) => (
          <Message success content={message} key={index} />
        ))}
      {messages.errors &&
        messages.errors.map((message, index) => (
          <Message error content={message} key={index} />
        ))}
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Current Password:</label>
          <input
            type="password"
            name="current_password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>New Password:</label>
          <input
            type="password"
            name="new_password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm New Password:</label>
          <input
            type="password"
            name="confirm_new_password"
            value={confirmNewPassword}
            onChange={e => setConfirmNewPassword(e.target.value)}
          />
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}

export default UserSettingsForm
