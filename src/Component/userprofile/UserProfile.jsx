import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardHeader, CardMedia, CardActions, IconButton, TextField, Button, Avatar, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

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
