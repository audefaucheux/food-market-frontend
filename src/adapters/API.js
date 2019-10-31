const API_ENDPOINT = "http://localhost:3000"
const LOGIN_URL = `${API_ENDPOINT}/login`
const VALIDATE_URL = `${API_ENDPOINT}/validate`
const SIGN_UP_URL = `${API_ENDPOINT}/sign_up`
const FOOD_TRUCKS_URL = `${API_ENDPOINT}/food_trucks`
const USERS_URL = `${API_ENDPOINT}/users`

// HEADERS HELPERS

const jsonHeaders = (more = {}) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  ...more
})

const authHeader = (more = {}) => ({
  Authorisation: localStorage.getItem("token"),
  ...more
})

const storeToken = data => {
  if (data.token) {
    localStorage.setItem("token", data.token)
  }
  return data
}

// API HELPERS

const get = (url, headers) =>
  fetch(url, {
    headers: headers
  }).then(resp => resp.json())

const post = (url, data, headers = {}) =>
  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(resp => resp.json())

const destroy = (url, id, headers = {}) => {
  fetch(url, {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify(id)
  })
}

// DATA APIs

const getUser = user_id => get(USERS_URL + "/" + user_id)

const getFoodTrucks = () => get(FOOD_TRUCKS_URL)
const addFoodTruck = foodTruckDetails =>
  post(
    FOOD_TRUCKS_URL,
    { food_truck: foodTruckDetails },
    jsonHeaders(authHeader())
  )
const deleteFoodTruck = id => destroy(FOOD_TRUCKS_URL + "/" + id)

// AUTH APIs

const login = userDetails =>
  post(LOGIN_URL, { user: userDetails }, jsonHeaders()).then(storeToken)

const signUp = userDetails =>
  post(SIGN_UP_URL, { user: userDetails }, jsonHeaders()).then(storeToken)

const validateUser = () =>
  fetch(VALIDATE_URL, {
    method: "POST",
    headers: authHeader()
  })
    .then(resp => resp.json())
    .then(storeToken)

const logout = () => {
  localStorage.removeItem("token")
}

// EXPORTS

export default {
  getUser,
  getFoodTrucks,
  addFoodTruck,
  deleteFoodTruck,
  login,
  signUp,
  validateUser,
  logout
}
