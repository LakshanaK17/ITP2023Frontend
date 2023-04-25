import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { complainColumns, complainRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "../../axios";

const Datatable = () => {
  const [data, setData] = useState(complainRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const [isApproved, setIsApproved] = useState(false);
  function handleClick() {
    // Add your code to handle the click event here
    setIsApproved(true);
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/user" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
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
        Approve Leaves
        {/* <Link to="/employee/add" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={complainColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
