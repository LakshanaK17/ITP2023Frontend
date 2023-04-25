import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../../Service/api';

const initialValue = {
   
  adminResponse:""
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUserComplainData = () => {
    const [user, setUser] = useState(initialValue);
    const {
      adminResponse} = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers('api/complaints/'+id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser('api/complaints/'+id, user);
        navigate('/complains');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Responce</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='adminResponse' value={adminResponse} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Response</Button>
            </FormControl>
        </Container>
    )
}

export default EditUserComplainData;