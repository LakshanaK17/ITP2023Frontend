import AllUsers from "./Component/AllUsers";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
import NavBar from "./Component/NavBar";
import NotFound from "./Component/NotFound";
import CodeForInterview from "./Component/CodeForInterview";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NewUser from "./Component/newUser/NewUser";
import Login from "./Component/newUser/Login";
import EmployeeLeave from "./Component/Employee/EmployeeLeave";
import { createContext, useState } from "react";
import LoginRegister from "./Component/LoginRegister";
import Employee from "./Component/Employee";
import UserPage from "./Component/UserPage";
import AdminPage from "./Component/AdminPage";
import LoginPage from "./Component/LoginPage";
// import "../src/styles.css";

function App() {
  // const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  const handleLogin = (userType) => {
    setUserType(userType);
    // navigate(userType === "admin" ? "/admin" : "/user");
  };
  const AdminRoute = ({ element: Element, ...rest }) => (
    <Route
      {...rest}
      exact={true}
      path="/admin"
      render={(props) =>
        userType === "admin" ? <Login {...props} /> : <Login />
      }
      // element={userType === "admin" ? <Login /> : <Login />}
    />
  );

  const UserRoute = ({ element: Element, ...rest }) => (
    <Route
      {...rest}
      element={userType === "user" ? <Element /> : <Element />}
    />
  );
  const EmployeeRoute = ({ element: Element, ...rest }) => (
    <Route
      {...rest}
      element={userType === "employee" ? <Element /> : <Element />}
    />
  );

  return (
    // <UserContext.Provider value={{ user, setUser }}>
    <BrowserRouter>
      <NavBar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {userType === "admin" && (
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          )}
          {userType === "user" && (
            <li>
              <Link to="/user">User Page</Link>
            </li>
          )}
        </ul>
      </NavBar>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/signup" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/*" element={<NotFound />} />
        {/* <Route path="/employee" element={<Employee />} /> */}
        {/* <Route path="/user" element={<UserPage />} /> */}
        <Route
          path="/loginpage"
          element={<LoginPage handleLogin={handleLogin} />}
        />
        <AdminRoute path="/admin" element={<AdminPage />} />
        {/*<UserRoute path="/user" element={<UserPage />} />
        <EmployeeRoute path="/employee" element={<Employee />} /> */}

        {/* <Route  path="/admin" element={<AdminPage />} /> */}
        {/* <Route path="/loginpage" element={<LoginPage />} /> */}
        {/* <Route path="/newuser" element={<CodeForInterview />} /> */}
      </Routes>
    </BrowserRouter>
    // </UserContext.Provider>
  );
}

export default App;
