import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, Grid, CardHeader, CardMedia, CardActions, IconButton, TextField, Button, Avatar, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: "#ccc"
  },
}));

const UserProfile = ({ name, pictureUrl, onDelete, onEdit }) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(newName);
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewName(name);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    handleDelete();
    handleMenuClose();
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="Profile picture" className={classes.avatar}>
            <img src={pictureUrl} alt="Profile" />
          </Avatar>
        }
        title={isEditing ? (
          <TextField value={newName} onChange={handleNameChange} />
        ) : name}
        action={
          <>
            <IconButton aria-label="settings" onClick={handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleEditClick}>
                <EditIcon />
                Edit profile
              </MenuItem>
              <MenuItem onClick={handleDeleteClick}>
                <DeleteIcon />
                Delete profile
              </MenuItem>
            </Menu>
          </>
        }
      />
              <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Profile
        </Typography>
        <div style={{ display: "flex" }}>
        <Grid   container
                  xs={12}
                  sm={12}
                  md={12}
                  justifyContent="flex-end"
                  paddingBottom={2}>
  <Grid item direction="row" md={6} sm={6} xs={6} spacing={2}>
        <Typography variant="body2" color="text.secondary">
        First Name
        </Typography>
        </Grid>
        <Grid item direction="row" md={6} sm={6} xs={6} spacing={2}>
        <TextField
   direction="row"
   alignItems="flex-end"
   justifyContent="flex-end"
   sx={{ minWidth: "140px" }}
  id="fisrtname"
  // defaultValue="fisrtname"
  variant="filled"
  size="small"
/>
</Grid>
</Grid>

        </div>
        <br/>
        <div style={{ display: "flex" }}>
        <Grid   container
                  xs={12}
                  sm={12}
                  md={12}
                  justifyContent="flex-end"
                  paddingBottom={2}>
  <Grid item direction="row" md={6} sm={6} xs={6} spacing={2}>
        <Typography variant="body2" color="text.secondary">
        Last Name
        </Typography>
        </Grid>
        <Grid item direction="row" md={6} sm={6} xs={6} spacing={2}>
        <TextField
   direction="row"
   alignItems="flex-end"
   justifyContent="flex-end"
   sx={{ minWidth: "140px" }}
  id="fisrtname"
  // defaultValue="fisrtname"
  variant="filled"
  size="small"
/>
</Grid>
</Grid></div>
<br/>
<div style={{ display: "flex" }}>
  <Grid   container
                  xs={12}
                  sm={12}
                  md={12}
                  justifyContent="flex-end"
                  paddingBottom={2}>
  <Grid item direction="row" md={6} sm={6} xs={6} spacing={2}>
        <Typography variant="body2" color="text.secondary">
       Email Address
        </Typography>
        </Grid>
        <Grid item direction="row" md={6} sm={6} xs={6} spacing={2}>
        <TextField
   direction="row"
   alignItems="flex-end"
   justifyContent="flex-end"
   sx={{ minWidth: "140px" }}
  id="fisrtname"
  // defaultValue="fisrtname"
  variant="filled"
  size="small"
/>
</Grid>
</Grid>
        </div>
        <br/>
        <div style={{ display: "flex" }}>
        <Grid   container
                  xs={12}
                  sm={12}
                  md={12}
                  justifyContent="flex-end"
                  paddingBottom={2}>
  <Grid item direction="row" md={6} sm={6} xs={6} spacing={2}>
        <Typography variant="body2" color="text.secondary">
        Contact Number
        </Typography>
        </Grid>
        <Grid item direction="row" md={6} sm={6} xs={6} spacing={2}>
        <TextField
   direction="row"
   alignItems="flex-end"
   justifyContent="flex-end"
   sx={{ minWidth: "140px" }}
  id="fisrtname"
  // defaultValue="fisrtname"
  variant="filled"
  size="small"
/>
</Grid>
</Grid>
</div>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={pictureUrl}
        title="Profile picture"
      />
      <CardActions disableSpacing>
        {isEditing ? (
          <>
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancelEdit}>
              Cancel
            </Button>
          </>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default UserProfile;
