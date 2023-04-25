import "./employeeLeave.css"
import Sidebar from "../../Component/sidebar/Sidebar"
import Navbar from "../../Component/navbar/Navbar"
import Datatable from "../../Component/employeeLeaveDataTable/Datatable"

const List = () => {
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

export default List