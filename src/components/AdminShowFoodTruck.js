import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  Switch
} from "react-router-dom"
import FoodTruckForm from "./FoodTruckForm"

const AdminShowFoodTruck = ({
  id,
  name,
  handleClickEdit,
  handleClickUpdateSchedule
}) => {
  return (
    <Router>
      <div>
        <h3>{name}</h3>
        {/* <button className="primary" onClick={handleClickEdit}>
            Edit
          </button> */}
        <Link
          key={`/my_food_trucks/${id}/edit`}
          to={`/my_food_trucks/${id}/edit`}
        >
          Edit
        </Link>
        {/* <button className="primary" onClick={handleClickUpdateSchedule}>
          Update Schedule
        </button>
        <button
          className="primary"
          onClick={() => console.log("archive food truck")}
        >
          Archive
        </button> */}
        <Switch>
          <Route key={id} exact path={`/my_food_trucks/:id/edit`}>
            <FoodTruckForm />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default AdminShowFoodTruck

/* <Route key="/" exact path="/">
<HomePublic {...{ formData }} />
</Route> */

// <Link key={item.title} to={item.path}>
// {item.title}
// </Link>
