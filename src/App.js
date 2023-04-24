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
import { createContext, useEffect, useState } from "react";
import LoginRegister from "./Component/LoginRegister";
import Employee from "./Component/Employee";
import UserPage from "./Component/UserPage";
import AdminPage from "./Component/AdminPage";
import LoginPage from "./Component/LoginPage";
// import "../src/styles.css";

function App() {
  // const navigate = useNavigate();
  const [userType, setUserType] = useState("ALL");
const Roles =localStorage.getItem("role")
  const handleLogin = (userType) => {
    setUserType(userType);
    // navigate(userType === "admin" ? "/admin" : "/user");
  };
  useEffect(async () => {
    console.log(localStorage.getItem("role") !=null,"role");
    if (localStorage.getItem("role")==null ) {
      setUserType("All");
    }

    if (localStorage.getItem("role")!=null ) {
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
      component: <AdminPage />,
      exact: true,
    },
    {
      path: "/admin",
      component: <AdminPage />,
      exact: true,
    }
  ];
  const UserRoutes = [
    {
      path: "/",
      component: <CodeForInterview />,
      exact: true,
    },
    {
      path: "/admin",
      component: <CodeForInterview />,
      exact: true,
    }
  ];
  const EmployeeRoutes = [
    {
      path: "/",
      component: <Employee />,
      exact: true,
    },
    {
      path: "/employee",
      component: <Employee />,
      exact: true,
    }
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
      <NavBar>
        <ul>
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
        </ul>
      </NavBar>
      <Routes>
        {/* <Route
       path="/"
       element={<LoginPage />}
      /> */}
        {/* {  AdminRoutes.map((route, index) => AdminRouting(route, index))} */}

        {userType === "ADMIN" &&
          AdminRoutes.map((route, index) => AdminRouting(route, index))
        }
        {userType === "EMPLOYEE" &&
          EmployeeRoutes.map((route, index) => AdminRouting(route, index))
        }
        {userType === "USER" &&
          UserRoutes.map((route, index) => AdminRouting(route, index))
        }
        {userType === "ALL" &&
          All.map((route, index) => AdminRouting(route, index))
        }
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
      </Routes>
    </BrowserRouter>
    // </UserContext.Provider>
  );
}

export default App;
