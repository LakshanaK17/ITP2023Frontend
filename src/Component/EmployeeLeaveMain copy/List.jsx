import "./list.css"
import Sidebar from "../employeesidebar/EmployeeSidebar"
import Navbar from "../navbar/Navbar"
import Datatable from "./datatable/Datatable"

const OllLeave = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default OllLeave