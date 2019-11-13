import React, { useState } from "react"
import API from "../adapters/API"
import { Form, Button, Header, Input } from "semantic-ui-react"
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
    <div className="center-content">
      <Header textAlign="center">SIGN UP</Header>{" "}
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            type="email"
            name="email"
            icon="mail"
            iconPosition="left"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <small>{Helpers.handleErrorMessage(errors, "email")}</small>
        </Form.Field>
        <Form.Field>
          <Input
            type="password"
            name="password"
            icon="lock"
            iconPosition="left"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <small>{Helpers.handleErrorMessage(errors, "password can't")}</small>
        </Form.Field>
        <Form.Field>
          <Input
            type="password"
            name="passwordConfirmation"
            icon="lock"
            iconPosition="left"
            placeholder="password confirmation"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
          <small>
            {Helpers.handleErrorMessage(errors, "password confirmation")}
          </small>
        </Form.Field>
        <Button color="green">Sign Up</Button>
      </Form>
    </div>
  )
}

export default SignUp
