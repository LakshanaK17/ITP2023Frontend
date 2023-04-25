import "./userComplain.css"
import Sidebar from "../../Component/sidebar/Sidebar"
import Navbar from "../../Component/navbar/Navbar"
import UserComplainData  from "../../Component/userComplainData/UserComplainData"

const List = () => {
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

export default List