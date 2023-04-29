import react, { useState, useEffect } from 'react';
import { Table, Card, CardContent, Typography, CardActions, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled, Grid } from '@mui/material'
import { getUsers, deleteUser } from '../../Service/api';
import { Link, useParams  } from 'react-router-dom';
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
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [SearchingText, setSearchingText] = useState("");

  const { id } = useParams();
  const [user, setUser] = useState({});


  useEffect(() => {
    getAllUsers(user._id);
  }, []);
  // useEffect(() => {
  //   getEmployee();
  // }, []);
  // useEffect(() => {
  //   if (selectedUserId) {
  //     getUserData(selectedUserId);
  //   }
  // }, [selectedUserId]);
  // const deleteUserData = async (id) => {
  //   await deleteUser(id);
  //   getAllUsers();
  // }

  const getAllUsers = async () => {
    let response = await getUsers('api/users/all');
    let emp = response.data.filter((item) => item.userrole === "USER");

    setUsers(emp);
    setSearchUsers(emp);
    console.log(emp);
  }
  const getEmployee = async () => {
    const response = await getUsers('api/users/' + id);
    setUser(response.data);
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
      {/* <StyledTable> */}

        {/* <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>   
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>

            
            <TableCell></TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead> */}

        {searchUsers.map((user, i) => (
        <Card key={user._id} sx={{ maxWidth: 345, margin: '0 auto 20px' }}>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             ID: {i+1}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
             Name: {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Role: {user.userrole}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={Link} to={`edit/${user._id}`}>Edit</Button>
            {/* <Button size="small" color="error" onClick={() => deleteUserData(user._id)}>Delete</Button> */}
          </CardActions>
        </Card>
      ))}
      {/* </StyledTable> */}
    </div>
  )
}

export default AllUsers;