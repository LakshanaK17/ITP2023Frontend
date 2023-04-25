import "./vehicle.css"
import Sidebar from "../../Component/sidebar/Sidebar"
import Navbar from "../../Component/navbar/Navbar"
import Vehicletable from "../../Component/vehicletable/Vehicletable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Vehicletable/>
      </div>
    </div>
  )
}

export default List