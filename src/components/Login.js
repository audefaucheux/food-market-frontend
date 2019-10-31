import React from "react"
import API from "../adapters/API"

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    API.login({ email: this.state.email, password: this.state.password })
      .then(data => {
        if (data.errors) {
          throw Error(data.errors)
        } else {
          this.props.login(data.user)
        }
      })
      .catch(alert)
  }

  render() {
    const { username, password } = this.state
    const { handleInputChange, handleSubmit } = this

    return (
      <div>
        <p>LOGIN PAGE</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={username}
            onChange={handleInputChange}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleInputChange}
          ></input>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login
