import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled, Grid } from '@mui/material'
import { getUsers, deleteUser, editUser } from '../../Service/api';
import { Link } from 'react-router-dom';
import Input from '../controls/Input';
import { useNavigate, useParams } from 'react-router-dom';

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
  let navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }

  const getAllUsers = async () => {
    let response = await getUsers('api/leave');
    setUsers(response.data);
    setSearchUsers(response.data);
    console.log(response.data);
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
  const approveApi = async(id) => {
    let user ={
      "adminResponse":"APPROVE",
      "_id":id
    }
    const response = await editUser('api/leave/'+id, user);
    getAllUsers();
  
}
const rejectApi = async(id) => {
  let user ={
    "adminResponse":"REJECT",
    "_id":id
  }
  const response = await editUser('api/leave/'+id, user);
  getAllUsers();

}
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
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
            <TableCell>Response</TableCell>

            
            <TableCell></TableCell>
          </THead>
        </TableHead>

        <TableBody>
        
          {searchUsers.map((user,i) => (
            <TRow key={user._id}>
              <TableCell>{i+1}</TableCell> 
              <TableCell>{user.leaveTitle}</TableCell>
              <TableCell>{user.leaveBody}</TableCell>
              <TableCell>{user.adminResponse}</TableCell>
              <TableCell>
              <Button sx={{ backgroundColor: "green",marginLeft:"2px" }} color="secondary" variant="contained" onClick={() => approveApi(user._id)}>APPROVE</Button>
              <Button sx={{ backgroundColor: "#B33A3A",marginLeft:"2px" }} color="secondary" variant="contained" onClick={() => rejectApi(user._id)}>REJECT</Button>
              <Button sx={{ backgroundColor: "#B33A3A" ,marginLeft:"2px"}} color="secondary" variant="contained" onClick={() => deleteUserData('api/leave/'+user._id)}>Delete</Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  )
}

export default AllUsers;