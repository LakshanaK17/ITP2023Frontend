import "./userComplain.css"
import Sidebar from "../usersidebar/UserSidebar"
import Navbar from "../navbar/Navbar"
import UserComplain  from "./UserComplain"

const UserComplainMains = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UserComplain/>
      </div>
    </div>
  )
}

export default UserComplainMains