import "./userSidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const logout = ()=>{
    console.log("log");
    localStorage.clear();
    window.location.href ='/'
  }

  return (
    <div className="sidebar">
      {/* <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">TRANSPORT MANAGEMENT SYSTEM</span>
        </Link>
      </div>
      <hr /> */}
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/userprofile" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/usercomplainequest" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>All Complaints</span>
            </li>
          </Link>
          <Link to="/complainequest" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>New Complaints</span>
            </li>
          </Link>
          <Link to="/reservation" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Vehicle Booking</span>
            </li>
          </Link>
          {/* <Link to="/complains" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Complaints</span>
          </li>
          </Link>
          <Link to="/leaves" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Leaves</span>
          </li>
          </Link> */}
          {/* <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li> */}
          
          <li onClick={logout} >
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
