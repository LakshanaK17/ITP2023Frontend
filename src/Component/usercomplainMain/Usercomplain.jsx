import "./userComplain.css"
import Sidebar from "../usersidebar/UserSidebar"
import Navbar from "../navbar/Navbar"
import UserComplainData  from "./userComplainData/UserComplainData"

const UserComplainMain = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UserComplainData/>
      </div>
    </div>
  )
}

export default UserComplainMain