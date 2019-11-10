import React, { useState } from "react"
import API from "../adapters/API"
import { Form, Button } from "semantic-ui-react"
import Helpers from "../Helpers"

const SignUp = ({ login }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    setErrors([])
    API.signUp({
      email,
      password,
      password_confirmation: passwordConfirmation
    }).then(data => {
      if (data.errors) {
        setErrors(data.errors)
      } else {
        login(data.user)
      }
    })
  }

  return (
    <div>
      <p>SIGN UP PAGE</p>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <small>{Helpers.handleErrorMessage(errors, "email")}</small>
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <small>{Helpers.handleErrorMessage(errors, "password can't")}</small>
        </Form.Field>
        <Form.Field>
          <label>Password Confirmation:</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
          <small>
            {Helpers.handleErrorMessage(errors, "password confirmation")}
          </small>
        </Form.Field>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  )
}

export default SignUp
