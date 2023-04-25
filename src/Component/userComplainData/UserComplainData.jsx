import "./userComplainData.css";
import { DataGrid } from "@mui/x-data-grid";
import { complainColumns, complainRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "../../axios";

const Datatable = () => {
    const stateValues1 = {
        title: "",
        body: "",
        adminResponse: "",
        userId:1
      };
    //   const [sss , setSSSS]=useState(complainRows);
  const [data, setData] = useState(complainRows);
//   const [values1, setValues1] = React.useState(stateValues1);
//   const [values2, setValues2] = React.useState(stateValues2);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues1({
//       ...values1,
//       [name]: value,
//     });
//   };

  const handleDelete = (id) => {
    setData(ssss.filter((item) => item.id !== id));
  };

  const [isApproved, setIsApproved] = useState(false);
  const [UserData, setUserData] = useState([]);
  function handleClick() {
    // Add your code to handle the click event here
    setIsApproved(true);
  }
  useEffect(() => {
    axios
    .get("/api/complaints")
    .then((res) => {
      console.log(res,"res1111");
      setUserData(res.data)
    })
    .catch((error) => {
        console.log(error,"error11111");
    });
  }, [])
  var ssss= [
    {
        "_id": "64443cc61b8da45b3377a925",
        "title": "title3",
        "body": "body3",
        "adminResponse": "adminResponse3",
        "createdAt": "2023-04-22T20:00:06.189Z",
        "updatedAt": "2023-04-22T20:00:06.189Z",
        "__v": 0
    },
    {
        "_id": "64443d88dbc2ac4275fd73fa",
        "title": "title3",
        "body": "body3",
        "adminResponse": "adminResponse3",
        "userId": "6444379a3c1911554cfd6959",
        "createdAt": "2023-04-22T20:03:20.289Z",
        "updatedAt": "2023-04-22T20:03:20.289Z",
        "__v": 0
    },
    {
        "_id": "64443ddadbc2ac4275fd73fe",
        "title": "title3",
        "body": "body3",
        "adminResponse": "adminResponse3",
        "userId": "6444379a3c1911554cfd6959",
        "createdAt": "2023-04-22T20:04:42.146Z",
        "updatedAt": "2023-04-22T20:04:42.146Z",
        "__v": 0
    },
    {
        "_id": "64443ddbdbc2ac4275fd7400",
        "title": "title3",
        "body": "body3",
        "adminResponse": "adminResponse3",
        "userId": "6444379a3c1911554cfd6959",
        "createdAt": "2023-04-22T20:04:43.417Z",
        "updatedAt": "2023-04-22T20:04:43.417Z",
        "__v": 0
    }
]
  const viewComplain = (e) => {
    e.preventDefault();
    // console.log(values1);
    var data = {
        title: data.title,
        body: data.body,
        adminResponse: data.adminResponse,
        userId: data.userId,
    };
    axios
      .post("/api/users/add", data)
      .then((res) => {
        // window.location.reload(false);
        console.log(res);

       
      })
      .catch((error) => {});
      axios
      .get("/api/complaints/", ssss)
      .then((res) => {
        // window.location.reload(false);
        console.log(res.data);

       
      })
      .catch((error) => {});
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/user" style={{ textDecoration: "none" }}>
              <div className="viewButton" onClick={viewComplain}>View</div>
            </Link>
            <div
              className="approveButton"
              onClick={() => handleClick(params.row.id)}
            >
              Approve
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Reject
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Approve Complaints
        {/* <Link to="/employee/add" className="link">
          Add New
        </Link> */}
      </div>
      {
        UserData && UserData.length >0 &&
       <DataGrid
       getRowId={(row) => row._id}
        className="datagrid"
        rows={UserData}
        columns={complainColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      }
    </div>
  );
};

export default Datatable;
