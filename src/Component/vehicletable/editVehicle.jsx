import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../../Service/api';

const initialValue = {
    "name": "",
    "type": "",
    "number": "",
    "status": "",
    "driver": "",
    "driverName": "",
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditVehicle = () => {
    const [user, setUser] = useState(initialValue);
    const {
        name,
        type,
        number,
        status,
        driver,
        driverName} = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers('api/schedule/'+id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser('api/schedule/'+id, user);
        navigate('/vehicles');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='type' value={type} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='number' value={number} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='status' value={status} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Driver Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='driverName' value={driverName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Response</Button>
            </FormControl>
        </Container>
    )
}

export default EditVehicle;