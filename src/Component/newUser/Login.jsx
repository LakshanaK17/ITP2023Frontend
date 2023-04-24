import styled from "styled-components";
import react, { useState, useEffect } from 'react';
// import {mobile} from "../responsive";
import { useContext } from "react";
// import { UserContext } from "../../App";
import { useLocation } from "react-router";

import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    useNavigate,
  } from "react-router-dom";
import Checkbox from "../controls/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
    // const { user, setUser } = useContext(UserContext);

    const location = useLocation();
    const navigate = useNavigate();
const navigateToSummary = () => {
    navigate("/signup");
  };
  const [checked, setChecked] = useState(true);

  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
const users = [{ username: "Jane", password: "testpassword" }];
// const handleSubmit = (e) => {
// e.preventDefault()
// const account = users.find((user) => user.username === username);
// if (account && account.password === password) {
// setauthenticated(true)
// localStorage.setItem("authenticated", true);}};
// // if (type=='Employee') {
//     // user is not authenticated
//     return <Navigate to="/employee" />;
//   } else if (type=='User') {
//     return <Navigate to="/user" />;
//   }
  return (

    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" value={username}
onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          <FormControlLabel control={<Checkbox checked={checked}
      onChange={handleChange}/>} label="Employee" /><FormControlLabel control={<Checkbox checked={checked}
      onChange={handleChange}/>} label="User" />
          <Button onClick={() => {
            // if (user.loggedIn) return;
            // setUser({ loggedIn: true });

            if (location.state?.from) {
              navigate(location.state.from);
            }
          }} >LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link onClick={navigateToSummary}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
