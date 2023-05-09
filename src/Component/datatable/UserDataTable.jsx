import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled, Grid } from '@mui/material'
import { getUsers, deleteUser } from '../../Service/api';
import { Link } from 'react-router-dom';
import Input from '../controls/Input';

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

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);
  const [SearchingText, setSearchingText] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }

  const getAllUsers = async () => {
    let response = await getUsers('api/users/all');
    let emp = response.data.filter((item) => item.userrole === "USER");

    setUsers(emp);
    setSearchUsers(emp);
    console.log(emp);
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
      <StyledTable>

        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>   
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>

            
            <TableCell></TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>

        <TableBody>
        
          {searchUsers.map((user,i) => (
            <TRow key={user._id}>
              <TableCell>{i+1}</TableCell> 
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.userrole}</TableCell>
              <TableCell>
                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`edit/${user._id}`}>EDIT</Button> 
                <Button sx={{ backgroundColor: "#B33A3A" }} color="secondary" variant="contained" onClick={() => deleteUserData('api/users/'+user._id)}>Delete</Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  )
}

export default AllUsers;