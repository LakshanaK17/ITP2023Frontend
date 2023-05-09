import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled, Grid } from '@mui/material'
import { getUsers, deleteUser } from '../../../Service/api';
import { Link } from 'react-router-dom';
import Input from '../../controls/Input';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #6439ff;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const  AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);
  const [SearchingText, setSearchingText] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser('api/reservation/'+id);
    getAllUsers();
  }

  const getAllUsers = async () => {
    let response = await getUsers('api/reservation');
    let userDetails = JSON.parse(localStorage.getItem("adminAuth"))
    let userId = userDetails ? userDetails._id : "not found"
    let emp = response.data

    setUsers(emp);
    setSearchUsers(emp);
    console.log(userId, response.data, emp);
  }
  const onsearch = (e) => {
    setSearchingText(e.target.value);
    console.log(e.target.value);
    let filterData =
      users.filter(
        (item) =>
          String(item.name.toUpperCase()).startsWith(e.target.value.toUpperCase()) ||
          String(item.id).startsWith(e.target.value)
      ) || [];
    if (filterData.length > 0) {
      setSearchUsers(filterData);
    }
  };
  return (
    <div>
      <br />
      <br />
      <Grid container >
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={5}>
          <input
            type="text"
            class="form-control"
            placeHolder="Type here..."
            onChange={onsearch}
            value={SearchingText}
            style={{
              width: '100%',
              backgroundColor: '#fff',
              color: '#000 !important',
              padding: '14px 20px',
              margin: '8px 0',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              border: "1px soild red"
            }}
          />
        </Grid>
        <Grid item xs={1}>

        </Grid>

      </Grid>
      <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`add`}>ADD</Button> {/* change it to user.id to use JSON Server */}

      <StyledTable>

        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Transport Type</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {searchUsers.map((user,id) => (
            <TRow key={user.id}>
              <TableCell>{id+1}</TableCell> {/* change it to user.id to use JSON Server */}
              <TableCell>{user.date}</TableCell>
              <TableCell>{user.time}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.transportType}</TableCell>
              <TableCell>
                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                <Button sx={{ backgroundColor: "#B33A3A" }} color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  )
}

export default AllUsers;