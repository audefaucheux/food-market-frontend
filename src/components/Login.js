import React, { useState } from "react"
import API from "../adapters/API"

const Login = ({ login }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleInputChange = (e, setter) => {
    setter(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    API.login({ email: email, password: password })
      .then(data => {
        if (data.errors) {
          throw Error(data.errors)
        } else {
          login(data.user)
        }
      })
      .catch(alert)
  }

  return (
    <div>
      <p>LOGIN PAGE</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={e => handleInputChange(e, setEmail)}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={e => handleInputChange(e, setPassword)}
        ></input>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
