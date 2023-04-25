
import "./userComplain.css"
import Sidebar from "../usersidebar/UserSidebar"
import Navbar from "../navbar/Navbar"
import AddRer from "./userComplainData/AddUser"

const ReservationAdd = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <AddRer/>
      </div>
    </div>
  )
}

export default ReservationAdd