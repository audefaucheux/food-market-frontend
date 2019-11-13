import React, { useState } from "react"
import API from "../adapters/API"
import { Form, Button, Input } from "semantic-ui-react"
import Helpers from "../Helpers"

const Login = ({ login, handleRedirect }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  const handleInputChange = (e, setter) => {
    setter(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors([])
    API.login({ email: email, password: password }).then(data => {
      if (data.errors) {
        setErrors(data.errors)
      } else {
        login(data.user)
      }
    })
  }

  return (
    <div className="center-content">
      <img src={require("../images/logo-salmon.png")} alt="yum-break-logo" />
      <Form onSubmit={handleSubmit} error>
        <Form.Field>
          <Input
            type="email"
            name="email"
            icon="mail"
            iconPosition="left"
            placeholder="email"
            value={email}
            onChange={e => handleInputChange(e, setEmail)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="password"
            name="password"
            icon="lock"
            iconPosition="left"
            placeholder="password"
            value={password}
            onChange={e => handleInputChange(e, setPassword)}
          />
          <small>{Helpers.handleErrorMessage(errors)}</small>
        </Form.Field>
        <Button>Login</Button>
      </Form>
      <p>
        Don't have an account yet?{" "}
        <span
          className="signup-link"
          onClick={() => handleRedirect("/sign_up")}
        >
          Sign Up
        </span>
      </p>
    </div>
  )
}

export default Login
