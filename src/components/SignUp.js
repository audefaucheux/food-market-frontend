import React from "react"
import API from "../adapters/API"

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: ""
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    API.signUp({
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation
    })
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
    const { username, password, passwordConfirmation } = this.state
    const { handleInputChange, handleSubmit } = this

    return (
      <div>
        <p>SIGN UP PAGE</p>
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
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="password confirmation"
            value={passwordConfirmation}
            onChange={handleInputChange}
          ></input>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default SignUp
