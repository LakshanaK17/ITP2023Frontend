import AllUsers from "./Component/AllUsers";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
import NavBar from "./Component/NavBar";
import NotFound from "./Component/NotFound";
import { productInputs, userInputs } from "./formSource";
import CodeForInterview from "./Component/CodeForInterview";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NewUser from "./Component/newUser/NewUser";
import Login from "./Component/newUser/Login";
import EmployeeLeave from "./Component/Employee/EmployeeLeave";
import { createContext, useEffect, useState } from "react";
import LoginRegister from "./Component/LoginRegister";
import Employee from "./Component/Employee";
import UserPage from "./Component/UserPage";
import AdminPage from "./Component/AdminPage";
import LoginPage from "./Component/LoginPage";
import AddUsers from "./Component/AddUsers";
import EmployeeDetails from "./Component/EmployeeDetails";
import UserComplain from "./Component/userComplains/UserComplain";
import List from "./Component/list/List";
import Home from "./Component/home/Home";
import Vehicle from "./Component/vehicle/Vehicle";
import Single from "./Component/employeesingle/Single";
import New from "./Component/new/New";
import Usercomplain from "./Component/usercomplain/Usercomplain";
import EmployeeLeaves from "./Component/employeeleave/EmployeeLeave";
import EditUserComplainData from "./Component/userComplainData/EditUserComplainData";
import EditEmployeeData from "./Component/datatable/EditDatatable";
import Addvehicle from "./Component/vehicletable/AddVehicle";
import EmployeeHome from "./Component/employeehome/EmployeeHome";
import UserHome from "./Component/userhome/UserHome";
import EmployeeProfile from "./Component/employeeprofile/EmployeeProfile";
import EditVehicle from "./Component/vehicletable/editVehicle";
import RequestingLeave from "./Component/Employee/main";
import OllLeave from "./Component/EmployeeLeaveMain/List";
import UserComplainMain from "./Component/usercomplainMain/Usercomplain";
import UserComplainMains from "./Component/userComplains/main";
import Reservation from "./Component/userSeatBooking/main";
import ReservationEdit from "./Component/userSeatBooking/editMain";
import ReservationAdd from "./Component/userSeatBooking/addMain";
import UserProfile from "./Component/userprofile/UserProfile";
// import "../src/styles.css";

function App() {
  // const navigate = useNavigate();
  const [userType, setUserType] = useState("ALL");
  const Roles = localStorage.getItem("role");
  const handleLogin = (userType) => {
    setUserType(userType);
    // navigate(userType === "admin" ? "/admin" : "/user");
  };
  useEffect(async () => {
    console.log(localStorage.getItem("role") != null, "role");
    if (localStorage.getItem("role") == null) {
      setUserType("All");
    }

    if (localStorage.getItem("role") != null) {
      if (localStorage.getItem("role") === "ADMIN") {
        setUserType("ADMIN");
      } else if (localStorage.getItem("role") === "EMPLOYEE") {
        setUserType("EMPLOYEE");
      } else if (localStorage.getItem("role") === "USER") {
        setUserType("USER");
      }
    } else {
      setUserType("ALL");
    }
  }, [localStorage.getItem("role")]);
  const AdminRoute = ({ element: Element, ...rest }) => (
    <Route
      {...rest}
      exact={true}
      path="/admin"
      // element={userType === "admin" ? <Login /> : <Login />}
    />
  );

  const AdminRoutes = [
    {
      path: "/",
      component: <Home />,
      exact: true,
    },
    {
      path: "/dashboard",
      component: <Home />,
      exact: true,
    },
    {
      path: "/admin",
      component: <Home />,
      exact: true,
    },
    {
      path: ":employeeId",
      component: <Single />,
      exact: true,
    },

    {
      path: "/employees",
      component: <List />,
      exact: true,
    },
    {
      path: "/employees/edit/:id",
      component: <EditEmployeeData />,
      exact: true,
    },
    {
      path: "/vehicles",
      component: <Vehicle />,
      exact: true,
    },
    {
      path: "/vehicles/add",
      component: <Addvehicle />,
      exact: true,
    },
    {
      path: "/vehicles/edit/:id",
      component: <EditVehicle />,
      exact: true,
    },
    {
      path: ":vehicleId",
      component: <Single />,
      exact: true,
    },
    {
      path: "complains",
      component: <Usercomplain />,
      exact: true,
    },
    {
      path: "complains/edit/:id",
      component: <EditUserComplainData />,
      exact: true,
    },
    {
      path: "leaves",
      component: <EmployeeLeaves />,
      exact: true,
    },
    {
      path: "new",
      component: <New inputs={userInputs} title="Add New User" />,
      exact: true,
    },
  ];
  const UserRoutes = [
    {
      path: "/",
      component: <UserHome />,
      exact: true,
    },
    {
      path: "/userprofile",
      component: <UserProfile />,
      exact: true,
    },
    {
      path: "/userhome",
      component: <UserHome />,
      exact: true,
    },
    {
      path: "/usercomplainequest",
      component: <UserComplainMain />,
      exact: true,
    },
    {
      path: "/complainequest",
      component: <UserComplainMains />,
      exact: true,
    },
    {
      path: "/reservation",
      component: <Reservation />,
      exact: true,
    },
    {
      path: "/reservation/edit/:id",
      component: <ReservationEdit />,
      exact: true,
    },
    {
      path: "/reservation/add",
      component: <ReservationAdd />,
      exact: true,
    },
    {
      path: "*",
      component: <UserHome />,
      exact: true,
    },
  ];
  const EmployeeRoutes = [
    {
      path: "/employee",
      component: <EmployeeHome />,
      exact: true,
    },
    {
      path: "/employeehome",
      component: <EmployeeHome />,
      exact: true,
    },
    {
      path: "/employeeleaverequest",
      component: <RequestingLeave />,
      exact: true,
    },
    {
      path: "/allleave",
      component: <OllLeave />,
      exact: true,
    },
    {
      path: "/employeeprofile",
      component: <EmployeeProfile />,
      exact: true,
    },
    {
      path: "/",
      component: <EmployeeHome />,
      exact: true,
    },
    {
      path: "*",
      component: <EmployeeHome />,
      exact: true,
    },
  ];
  const All = [
    {
      path: "/",
      component: <LoginRegister />,
      exact: true,
    },
    {
      path: "*",
      component: <LoginRegister />,
      exact: true,
    },
  ];

  const AdminRouting = (route, index) => {
    console.log("jij");
    return (
      <Route
        key={index}
        path={route.path}
        element={route.component}
        exact={route.exact}
      />
    );
  };
  return (
    // <UserContext.Provider value={{ user, setUser }}>
    <BrowserRouter>
      {/* <NavBar> */}
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {userType === "ADMIN" && (
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
        )}
        {userType === "USER" && (
          <li>
            <Link to="/user">USER Page</Link>
          </li>
        )}
        {userType === "EMPLOYEE" && (
          <li>
            <Link to="/user">EMPLOYEE Page</Link>
          </li>
        )}
      </ul> */}
      {/* </NavBar> */}
      <Routes>
        {/* <Route
       path="/"
       element={<LoginPage />}
      /> */}
        {/* {  AdminRoutes.map((route, index) => AdminRouting(route, index))} */}

        {userType === "ADMIN" &&
          AdminRoutes.map((route, index) => AdminRouting(route, index))}
        {userType === "EMPLOYEE" &&
          EmployeeRoutes.map((route, index) => AdminRouting(route, index))}
        {userType === "USER" &&
          UserRoutes.map((route, index) => AdminRouting(route, index))}
        {userType === "ALL" &&
          All.map((route, index) => AdminRouting(route, index))}
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/*" element={<NotFound />} />
        {/* <Route path="/employee" element={<Employee />} /> */}
        {/* <Route path="/user" element={<UserPage />} /> */}
        {/* <Route
          path="/loginpage"
          element={<LoginPage handleLogin={handleLogin} />}
        />
        <Route path="/admin" element={userType === "admin" ? <AdminPage /> : <LoginPage />} />
        <Route path="/user" element={userType === "user" ? <CodeForInterview /> : <LoginPage />} />
        <Route path="/admin" element={userType === "admin" ? <AdminPage /> : <LoginPage />} /> */}
        {/*<UserRoute path="/user" element={<UserPage />} /> */}
        {/* <EmployeeRoute path="/employee" element={<Employee />} /> */}

        {/* <Route  path="/admin" element={<AdminPage />} /> */}
        {/* <Route path="/loginpage" element={<LoginPage />} /> */}
        {/* <Route path="/newuser" element={<CodeForInterview />} /> */}
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<List />} />
          {/* <Route
            path="new"
            element={<New inputs={userInputs} title="Add New User" />}
          /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    // </UserContext.Provider>
  );
}

export default App;
