
import "./userComplain.css"
import Sidebar from "../usersidebar/UserSidebar"
import Navbar from "../navbar/Navbar"
import EditRer from "./userComplainData/EditUser"

const ReservationEdit = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <EditRer/>
      </div>
    </div>
  )
}

export default ReservationEdit