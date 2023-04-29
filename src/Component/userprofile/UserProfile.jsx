import "./userprofile.css"
import Sidebar from "../usersidebar/UserSidebar"
import Navbar from  "../navbar/Navbar"
import UserProfileData from "../userprofile/UserProfileData"


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