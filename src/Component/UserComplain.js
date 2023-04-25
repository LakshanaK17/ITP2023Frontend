import react, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
  Grid,
} from "@mui/material";
import { addUser, getUsers } from "../Service/api";
import { useNavigate } from "react-router-dom";

import Controls from "../Component/controls/Controls";
import { useForm, Form } from "../Component/useForm";
import { useEffect } from "react";
const initialValue = {
  name: "",
  body: "",
  adminResponse: "REJECTED",
  driver: "",
  driverName: "",
};
const initialValueErr = {
  // date: false,
  // time: false,
  name: false,
  body: false,
  // phone: false,
  // seatsCount: false,
  username: false,
  all: false,
};
const initialValueErrMsg = {
  name: "",
  body: "",
  // date: "",
  // time: "",
  // name: "",
  // phone: "",
  // seatsCount: "",
  username: "",
  all: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const Addcomplain = () => {
  const [user, setUser] = useState(initialValue);
  const [DriverOpt, setDriverOpt] = useState(initialValue);
  // const [userErr, setUserErr] = useState(initialValueErr);
  // const [userErrMsg, setUserErrMsg] = useState(initialValueErrMsg);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    // if ("date" in fieldValues)
    //   temp.date = fieldValues.date ? "" : "This field is required.";

    if ("title" in fieldValues) {
      temp.title = fieldValues.title ? "" : "This field is required.";
    }
    if ("body" in fieldValues) {
      temp.body = fieldValues.body ? "" : "This field is required.";
    }

    // if ("time" in fieldValues)
    //   temp.time = fieldValues.time ? "" : "This field is required.";
    // if ("phone" in fieldValues)
    //   temp.phone = fieldValues.phone ? "" : "This field is required.";
    // if ("seatsCount" in fieldValues)
    //   temp.seatsCount = fieldValues.seatsCount ? "" : "This field is required.";

    // if ('all' in fieldValues)
    //     temp.time = fieldValues.time ? "" : "This field is required."

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialValue, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      addUserDetails();
    }
  };

  const { title, body } = user;

  let navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e.target.value, "e.target.value");
    // if(e.target.value ===""){
    //     setUserErr({...userErr,[e.target.name]:true})
    //     setUserErrMsg({...userErr,[e.target.name]:'wrong'})
    //     console.log("11",userErr);
    // }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    console.log(values);
    await addUser("api/complaints", values);
    navigate("/usercomplainequest");
  };
  useEffect(() => {
    loadUserDetails();
  }, []);
  const loadUserDetails = async () => {
    const response = await getUsers("api/users/all");
    if (response.data) {
      let emp = response.data.filter((item) => item.userrole === "EMPLOYEE");
      console.log(response, emp);
      setDriverOpt(emp);
    }
  };
  const dd = [
    {
      _id: "64465f22b119ab02d4ac4eb7",
      name: "abc",
      userrole: "EMPLOYEE",
      email: "abc@gnam.cid",
      password: "$2a$10$7cJbYMzRSeZzTJXiWlKtBOlnBsSUArHzDyyvbe12mfu3fBrdvAPya",
      accessType: "PENDING",
      createdAt: "2023-04-24T10:51:14.415Z",
      updatedAt: "2023-04-24T10:51:14.415Z",
      __v: 0,
    },
    {
      _id: "64465f35b119ab02d4ac4eba",
      name: "cdddde",
      userrole: "EMPLOYEE",
      email: "defe",
      password: "$2a$10$gAXjEf8Sl7mqg1hDBQ9BNu5Iq1JFIl0gwBl1bUVpQ/X5MS82.Mb0i",
      accessType: "PENDING",
      createdAt: "2023-04-24T10:51:33.942Z",
      updatedAt: "2023-04-24T10:51:33.942Z",
      __v: 0,
    },
    {
      _id: "644668836193c6518a3ced01",
      name: "rushanth",
      userrole: "EMPLOYEE",
      email: "B1@B.com",
      password: "$2a$10$wc0a8Jq9Qll9rk/PFzw4juGmKpUj9.i1SnKtW.70JVyDLgQL1czjK",
      accessType: "Pending",
      createdAt: "2023-04-24T11:31:15.394Z",
      updatedAt: "2023-04-24T11:31:15.394Z",
      __v: 0,
    },
    {
      _id: "6446abfd41f90ca1fe42f7f9",
      name: "asdfgh",
      userrole: "EMPLOYEE",
      email: "lakshana@gmail.com",
      password: "$2a$10$J4htpcsVecyJSPm8eqLsY.vvGCZHa2oVfHE8Xg4kHDHsmkYI8YEN6",
      accessType: "PENDING",
      createdAt: "2023-04-24T16:19:09.961Z",
      updatedAt: "2023-04-24T16:19:09.961Z",
      __v: 0,
    },
  ];
  const VType = [
    {
      _id: "CAR",
      email: "CAR",
    },
    {
      _id: "VAN",
      email: "VAN",
    },
    {
      _id: "BUS",
      email: "BUS",
    },
  ];
  return (
    <Container>
      <Typography variant="h4">COMPLAINT REQUEST</Typography>
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
            <Controls.Input
              name="adminResponse"
              label="Admin Response"
              value={values.adminResponse}
              onChange={handleInputChange}
              error={errors.adminResponse}
            />

            {/* <Controls.Input
                            name="driverName"
                            label="driverName"
                            value={values.driverName}
                            onChange={handleInputChange}
                            error={errors.driverName}
                        /> */}
            {/* <Controls.Select
                            name="type"
                            label="Type"
                            value={values.type}
                            onChange={handleInputChange}
                            options={VType}
                            error={errors.type}
                        /> */}
            {/* {DriverOpt && <Controls.Select
                            name="driverName"
                            label="Driver Name"
                            value={values.driverName}
                            onChange={handleInputChange}
                            options={dd}
                            error={errors.driverName}
                        />} */}
          </Grid>
        </Grid>

        <div>
          <Controls.Button type="submit" text="Submit" />
          <Controls.Button
            text="Reset"
            color=""
            variant="outlined"
            onClick={resetForm}
          />
        </div>
      </Form>
    </Container>
  );
};

export default Addcomplain;
