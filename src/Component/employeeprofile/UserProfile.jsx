import "./userprofile.css"
import Sidebar from "../../Component/employeesidebar/EmployeeSidebar"
import Navbar from "../../Component/navbar/Navbar"
import UserProfileData from "./EmployeeProfileData"


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UserProfileData/>
      </div>
    </div>
  )
}

export default List