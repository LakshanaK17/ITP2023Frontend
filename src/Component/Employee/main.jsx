import Sidebar from "../../Component/employeesidebar/EmployeeSidebar"
import Navbar from "../../Component/navbar/Navbar"
import EmployeeLeave from "./EmployeeLeave";
import "./employeeHome.css";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" /> */}
        </div>
        <div className="charts">
          {/* <Featured /> */}
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        <div className="listContainer">
        <EmployeeLeave/>
          {/* <Table /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
