import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography, Grid } from '@mui/material';
import { addUser } from '../../../Service/api';
import { useNavigate } from 'react-router-dom';

import Controls from "../../controls/Controls";
import { useForm, Form } from '../../useForm';
const initialValue = {
    date: "",
    time: '',
    name: '',
    phone: '',
    transportType: "",
    username: ""
}
const initialValueErr = {
    date: false,
    time: false,
    name: false,
    phone: false,
    transportType: false,
    username: false,
    all: false,

}
const initialValueErrMsg = {
    date: "",
    time: '',
    name: '',
    phone: '',
    transportType: "",
    username: "",
    all: ""
}


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    // const [userErr, setUserErr] = useState(initialValueErr);
    // const [userErrMsg, setUserErrMsg] = useState(initialValueErrMsg);

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('date' in fieldValues)
            temp.date = fieldValues.date ? "" : "This field is required."

        if ('name' in fieldValues) {
            temp.name = fieldValues.name ? "" : "This field is required."
        }

        if ('time' in fieldValues)
            temp.time = fieldValues.time ? "" : "This field is required."
        if ('phone' in fieldValues)
            temp.phone = fieldValues.phone ? "" : "This field is required."
        if ('transportType' in fieldValues)
            temp.transportType = fieldValues.transportType ? "" : "This field is required."

        // if ('all' in fieldValues)
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
        if (validate()) {
            addUserDetails()
            
        }
    }


    const {
        date,
        time,
        name,
        phone,
        transportType,
        username } = user;

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

    const addUserDetails = async () => {
        await addUser(values);
        navigate('/all');
    }
  
    return (
        <Container>

             <Typography variant="h4">Add Booking</Typography>
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <Controls.Input
                            name="date"
                            label="Date"
                            value={values.date}
                            onChange={handleInputChange}
                            error={errors.date}
                            type="date"
                            max={new Date().toISOString().split("T")[0]}
                        />
                        <Controls.Input
                            name="time"
                            label="Time"
                            value={values.time}
                            onChange={handleInputChange}
                            error={errors.time}
                            type="time"
                        />
                        <Controls.Input
                            name="name"
                            label="Name"
                            value={values.name}
                            onChange={handleInputChange}
                            error={errors.name}
                        />
                        <Controls.Input
                            name="phone"
                            label="Phone"
                            value={values.phone}
                            onChange={handleInputChange}
                            error={errors.phone}
                            type="number"
                        />
                        <Controls.Input
                            name="transportType"
                            label="Transport Type"
                            value={values.transportType}
                            onChange={handleInputChange}
                            error={errors.transportType}
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

export default AddUser;