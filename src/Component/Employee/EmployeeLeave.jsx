import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography, Grid } from '@mui/material';
import { addUser, getUsers } from '../../Service/api';
import { useNavigate } from 'react-router-dom';

import Controls from "../../Component/controls/Controls";
import { useForm, Form } from '../useForm';
import { useEffect } from 'react';
const initialValue = {
    name: "",
    body: '',
    adminResponse: 'REJECTED',
    // status: 'AVAILABLE',
    // driver: "",
    // driverName: ""
}
const initialValueErr = {
    name: false,
    body: false,
    // date: false,
    // time: false,
    // name: false,
    // phone: false,
    // seatsCount: false,
    username: false,
    all: false,

}
const initialValueErrMsg = {
    name: false,
    body: false,
    // date: "",
    // time: '',
    // name: '',
    // phone: '',
    // seatsCount: "",
    username: "",
    all: ""
}


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const EmployeeLeave = () => {
    const [user, setUser] = useState(initialValue);
    const [DriverOpt, setDriverOpt] = useState(initialValue);
    // const [userErr, setUserErr] = useState(initialValueErr);
    // const [userErrMsg, setUserErrMsg] = useState(initialValueErrMsg);

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ("title" in fieldValues) {
            temp.title = fieldValues.title ? "" : "This field is required.";
        }
        if ("body" in fieldValues) {
            temp.body = fieldValues.body ? "" : "This field is required.";
        }

        // if ('time' in fieldValues)
        //     temp.time = fieldValues.time ? "" : "This field is required."
        // if ('phone' in fieldValues)
        //     temp.phone = fieldValues.phone ? "" : "This field is required."
        // if ('seatsCount' in fieldValues)
        //     temp.seatsCount = fieldValues.seatsCount ? "" : "This field is required."

        // // if ('all' in fieldValues)
        //     temp.time = fieldValues.time ? "" : "This field is required."

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValue, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (true) {
            addEmpLeave()

        }
    }


    const {
        title,
        body,
    } = user;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.value, "e.target.value");
        // if(e.target.value ===""){
        //     setUserErr({...userErr,[e.target.name]:true})
        //     setUserErrMsg({...userErr,[e.target.name]:'wrong'})
        //     console.log("11",userErr);
        // }
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addEmpLeave = async () => {
        let userDetails = JSON.parse(localStorage.getItem("adminAuth"))
        let userId =userDetails ? userDetails._id:"not found"
        let data ={
            "leaveTitle":values.title,
            "leaveBody":values.body,
            "adminResponse":"",
            "userId":userId
        }
        console.log(userDetails,data);
        await addUser('api/leave', data);
        navigate('/allleave');
    }
    

    return (
        <Container>

            <Typography variant="h4">LEAVE REQUEST</Typography>
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <Controls.Input
                            name="title"
                            label="Title"
                            value={values.title}
                            onChange={handleInputChange}
                            error={errors.title}
                            type="name"
                        />


                        <Controls.Input
                            name="body"
                            label="Body"
                            value={values.body}
                            onChange={handleInputChange}
                            error={errors.body}
                        />

                    </Grid >
                </Grid >

                <div>
                    <Controls.Button
                        type="submit"
                        text="Submit" />
                    <Controls.Button
                        text="Reset"
                        color=""
                        variant="outlined"
                        onClick={resetForm} />
                </div>

            </Form>


        </Container>
    )
}

export default EmployeeLeave;