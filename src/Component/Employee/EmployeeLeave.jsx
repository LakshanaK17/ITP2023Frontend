import styled from "styled-components";
// import { mobile } from "../responsive";
import { useNavigate } from 'react-router-dom';
import { FormGroup, FormControl, InputLabel,   Typography, Grid } from '@mui/material';
import react, { useState } from 'react';
import { useForm, Form } from '../useForm';
import Controls from "../controls/Controls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const initialValue = {
  firstName: "",
  lastName:'',

  email: '',

  username: ""
}

const Register = () => {
  const [user, setUser] = useState(initialValue);
  // const [userErr, setUserErr] = useState(initialValueErr);
  // const [userErrMsg, setUserErrMsg] = useState(initialValueErrMsg);

  const validate = (fieldValues = values) => {
      let temp = { ...errors }
      if ('firstName' in fieldValues)
          temp.firstName = fieldValues.firstName ? "" : "This field is required."

      if ('lastName' in fieldValues) {
          temp.lastName = fieldValues.lastName ? "" : "This field is required."
      }
      if ('userName' in fieldValues) {
        temp.userName = fieldValues.userName ? "" : "This field is required."
    }
    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required."
  }
  if ('password' in fieldValues) {
    temp.password = fieldValues.password ? "" : "This field is required."
}

      
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
      seatsCount,
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
      // await addUser(values);
      navigate('/login');
  }
  return (
    <Container>
      <Wrapper>
        <Title>LEAVE REQUEST</Title>
        <Form onSubmit={handleSubmit}>
        <Grid container>
          <Controls.Input placeholder="Subject" label='Subject'name="title"
                            
                            value={values.title}
                            onChange={handleInputChange}
                            error={errors.title} />
          <Controls.Input placeholder="Leave Type"label='Leave Type'name="leaveType"
                            
                            value={values.lastName}
                            onChange={handleInputChange}
                            error={errors.lastName}/>
          <Controls.Input placeholder="Message" label='Message' name="message"
                            
                            value={values.userName}
                            onChange={handleInputChange}
                            error={errors.userName}/>
          <Controls.Input placeholder="Number of Days" label='Number of Days' />
          <Controls.Input placeholder="Subject" label='Subject'value={values.password}
                            onChange={handleInputChange}
                            error={errors.password}/>
          <Controls.Input placeholder="confirm password" label="Confirm Password"/><br/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
          {/* <Button onClick={resetForm}>RESET</Button> */}
          </Grid>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
