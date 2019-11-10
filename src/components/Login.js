import React, { useState } from "react"
import API from "../adapters/API"
import { Form, Button } from "semantic-ui-react"
import Helpers from "../Helpers"

const Login = ({ login }) => {
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
    <div>
      <p>LOGIN PAGE</p>
      <Form onSubmit={handleSubmit} error>
        <Form.Input
          type="email"
          label="Email:"
          name="email"
          value={email}
          onChange={e => handleInputChange(e, setEmail)}
        />
        <Form.Field>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => handleInputChange(e, setPassword)}
          />
          {Helpers.handleErrorMessage(errors)}
        </Form.Field>
        <Button>Login</Button>
      </Form>
    </div>
  )
}

export default Login
