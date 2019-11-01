import React from "react"

class AdminFoodTruckForm extends React.Component {
  state = {
    name: ""
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name } = e.target
    let newFoodTruck = {
      name: name.value
    }
    this.props.addFoodTruck(newFoodTruck)
    this.setState({
      name: ""
    })
  }

  render() {
    const { name } = this.state
    const { handleInputChange } = this

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleInputChange}
        ></input>
        <input type="submit" value="Create Food Truck" />
      </form>
    )
  }
}

export default AdminFoodTruckForm
