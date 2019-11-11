import React from "react"
import { Menu } from "semantic-ui-react"
import UserSettingsForm from "../components/UserSettingsForm"
import "../stylesheets/containers/UserSettingsMenu.css"

const UserSettingsMenu = ({ user, logout }) => {
  return (
    <>
      <Menu tabular>
        <Menu.Item name="Update Password" active={true} />
        <Menu.Item onClick={logout}>Logout</Menu.Item>
      </Menu>
      <UserSettingsForm {...{ user }} />
    </>
  )
}

export default UserSettingsMenu
