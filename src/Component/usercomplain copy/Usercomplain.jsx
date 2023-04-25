import "./userComplain.css"
import Sidebar from "../sidebar/Sidebar"
import Navbar from "../navbar/Navbar"
import UserComplainData  from "../userComplainData/UserComplainData"

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