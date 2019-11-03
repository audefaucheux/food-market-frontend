import React from "react"
// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

const AdminShowFoodTruck = ({
  id,
  name
  // setFoodTruckSelected,
  // setScreenSelected
}) => {
  // const handleClick = screen => {
  //   setFoodTruckSelected(id)
  //   setScreenSelected(screen)
  // }

  return (
    <div>
      <h3>{name}</h3>
      {/* <button className="primary" onClick={() => console.log("edit")}>
          Edit
        </button> */}
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

/* <Route key="/" exact path="/">
<HomePublic {...{ formData }} />
</Route> */

// <Link key={item.title} to={item.path}>
// {item.title}
// </Link>
