import react, { useState, useEffect } from 'react';
import { Table, Card, CardContent, Typography, CardActions, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled, Grid } from '@mui/material'
import { getUsers, deleteUser } from '../../Service/api';
import { Link, useParams } from 'react-router-dom';
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
  const [id, setId] = useState(null);
  const [SearchingText, setSearchingText] = useState("");

  // const { id } = useParams÷();
  const [user, setUser] = useState({});


  useEffect(() => {
    let userDetails = JSON.parse(localStorage.getItem("adminAuth"))
    let userId = userDetails ? userDetails._id : "not found"
    setId(userId)
    if(userId !="not found"){
      getAllUsers(userId);
      console.log(userId);

    }
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

  const getAllUsers = async (ids) => {
    let response = await getUsers(`api/users/${ids}`);
    let emp = response.data

    // var sa÷mple = users.push(emp)
    setUsers(emp);
    // setSearchUsers(sample);
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
          {/* <input
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

          />  */}
          {/* <Typography>Profile</Typography> */}
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

      {/* {searchUsers.map((user, i) => ( */}
      {users &&  <Card key={users._id} sx={{ maxWidth: 1400, margin: '0 auto 20px' }}>
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div">
              ID: { users._id}
            </Typography> */}
            <Typography gutterBottom variant="h5" component="div">
              Name: {users.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gender: {users.gender}
            </Typography>
            <br/>
            <Typography variant="body2" color="text.secondary">
              Address: {users.address}
            </Typography>
            <br/>
            <Typography variant="body2" color="text.secondary">
              Email: {users.email}
            </Typography>
            <br/>
            <Typography variant="body2" color="text.secondary">
              Role: {users.userrole}
            </Typography>
          </CardContent>
          <CardActions>
            <Button  variant="contained"size="small" component={Link} to={`edit/${users._id}`}>Edit</Button>
            {/* <Button size="small" color="error" onClick={() => deleteUserData(user._id)}>Delete</Button> */}
          </CardActions>
        </Card>}
      {/* ))} */}
      {/* </StyledTable> */}
    </div>
  )
}

export default AllUsers;