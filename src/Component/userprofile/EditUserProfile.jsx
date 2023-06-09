import { useState, useEffect } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, editUser } from "../../Service/api";


const initialValue = {
  name: "",
  userrole: "",
  email: "",
  nic:"",
  gender:"",
  address:"",
  registrationdate:"",
  adminResponse: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditEmployeeData = () => {
  const [user, setUser] = useState(initialValue);
  // const { adminResponse, name, email } = user;
  const [errors, setErrors] = useState({});
  const { adminResponse, name, email, nic, gender, address } = user;

  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const validateForm = () => {
    let validationErrors = {};

    if (!name) {
      validationErrors.name = "Name is required";
    }

    if (!gender) {
      validationErrors.gender = "Gender is required";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    }
    if (!nic) {
      validationErrors.nic = "NIC is required";
    }

    if (!address) {
      validationErrors.address = "Address is required";
    }

    return validationErrors;
  };

  const loadUserDetails = async () => {
    const response = await getUsers("api/users/" + id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const validationErrors = validateForm();
   
    if (Object.keys(validationErrors).length === 0) {
      const response = await editUser("api/users/" + id, user);
      navigate("/userprofile");
    } else {
      setErrors(validationErrors);
    }
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // "name": "rush",
  // "userrole": "ADMIN",
  // "email": "bala@gmail.com",
  return (
    <Container injectFirst>
      <Typography variant="h4">Edit Information</Typography>
      <FormControl error={!!errors.name}>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      {errors.name && (
        <Typography color="error">{errors.name}</Typography>
      )}
      <FormControl error={!!errors.gender}>
        <InputLabel htmlFor="my-input">Gender</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="gender"
          value={gender}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      {errors.gender && (
        <Typography color="error">{errors.gender}</Typography>
      )}
      <FormControl error={!!errors.nic}>
        <InputLabel htmlFor="my-input">NIC</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="nic"
          value={nic}
          id="my-input"
          aria-describedby="my-helper-text"
        />
        
      </FormControl>
      {errors.nic && <Typography color="error">{errors.nic}</Typography>}
      <FormControl error={!!errors.email}>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      {errors.email && <Typography color="error">{errors.email}</Typography>}
      <FormControl error={!!errors.address}>
        <InputLabel htmlFor="my-input">Address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="address"
          value={address}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      {errors.address && <Typography color="error">{errors.address}</Typography>}
      {/* <FormControl>
        <InputLabel htmlFor="my-input">Registration Date</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="registrationdate"
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl> */}
      {/* <FormControl>
                <InputLabel htmlFor="my-input">Responce</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='adminResponse' value={adminResponse} id="my-input" aria-describedby="my-helper-text" />
            </FormControl> */}
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editUserDetails()}
        >
          Response
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditEmployeeData;
