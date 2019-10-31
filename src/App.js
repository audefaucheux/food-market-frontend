import React from "react"
import "./stylesheets/App.css"
import { Route, Redirect } from "react-router-dom"
import API from "./adapters/API"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import HomePublic from "./components/HomePublic"
import SignUp from "./components/SignUp"
import FoodTruckContainer from "./containers/FoodTrucksContainer"

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    API.validateUser()
      .then(data => {
        if (data.errors) {
          this.props.history.push("/login")
          throw Error(data.errors)
        } else if (data.user) {
          this.login(data.user)
          this.props.history.push("/my_food_trucks")
        }
      })
      .catch(alert)
  }

  login = user => {
    this.setState({ user }, () => this.props.history.push("/my_food_trucks"))
  }

  logout = () => {
    API.logout()
    this.setState({ user: null })
    this.props.history.push("/login")
  }

  render() {
    const { user } = this.state
    const { login, logout } = this
    const { history } = this.props

    return (
      <div className="App">
        <Navbar user={user} logout={logout} />
        <Route key="/" exact path="/">
          <HomePublic />
        </Route>
        <Route key="/sign_up" exact path="/sign_up">
          <SignUp login={login} />
        </Route>
        <Route key="/login" exact path="/login">
          <Login login={login} />
        </Route>
        <Route key="/my_food_trucks" exact path="/my_food_trucks">
          {user ? (
            <FoodTruckContainer user={user} history={history} login={login} />
          ) : (
            <Redirect to={"/login"} />
          )}
        </Route>
      </div>
    )
  }
}

export default App
