import "./list.css"
import Sidebar from "../../Component/sidebar/Sidebar"
import Navbar from "../../Component/navbar/Navbar"
import UserDataTable from "../../Component/datatable/UserDataTable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UserDataTable/>
      </div>
    </div>
  )
}

export default List