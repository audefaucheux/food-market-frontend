import React from "react"
import { Link } from "@reach/router"

// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

const AdminShowFoodTruck = ({ id, name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <Link to="edit">Edit</Link>
      {/* <button className="primary" onClick={() => console.log("schedule")}>
          Update Schedule
        </button>
        <button
          className="primary"
          onClick={() => console.log("archive food truck")}
        >
          Archive
        </button> */}
      {/* <Switch>
          <Route key="/test/:id" exact path="/test/:id">
            Hello test
          </Route>
        </Switch> */}
    </div>
  )
}

export default AdminShowFoodTruck
