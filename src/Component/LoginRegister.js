import axios  from "../axios";
import * as Components from "./Components";
// import "../../src/styles.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";

function LoginRegister() {
  const [signIn, toggle] = React.useState(false);
  const stateValues1 = {
    sname: "",
    semail: "",
    spassword: ""
  };
  const stateValues2 = {
    remail: "",
    rpassword: ""
  };
  const [values1, setValues1] = React.useState(stateValues1);
  const [values2, setValues2] = React.useState(stateValues2);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues1({
      ...values1,
      [name]: value,
    });
  };
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setValues1({
      ...values1,
      [name]: value,
    });
  };
  console.log(values1);
  
  const signUpSubmit = (e) => {
    e.preventDefault()
    console.log(values1)
    var data ={
      "name": values1.sname,
      "email": values1.semail,
      "password": values1.spassword,
      "userrole": "EMPLOYEE",
      "accessType": "PENDING"
  }
  axios
  .post("/api/users/", data)
  .then((res) => {
    // window.location.reload(false);
    console.log(res);
   
  localStorage.setItem("adminAuth", JSON.stringify(res.data));
  if (res.data.userrole) {
  localStorage.setItem("role", JSON.stringify(res.data.userrole));
  if (res.data.userrole==='ADMIN') {
    window.location.href = "/admin";
  }else if (res.data.userrole==='EMPLOYEE'){
    window.location.href = "/employee";
  }else if (res.data.userrole==='USER'){
    window.location.href = "/user";
  }
}
  })
  .catch((error) => {
    
  });
  }
  const signInSubmit = (e) => {
    e.preventDefault()
    console.log(values2)
    var data ={
      "email": values2.sname,
      "password": values2.spassword,
      "userrole": "ADMIN",
      "accessType": "PENDING"
  }
  axios
  .post("/api/users/login", data)
  .then((res) => {
    console.log(res);
  localStorage.setItem("adminAuth", JSON.stringify(res.data));
  if (res.data.userrole) {
  localStorage.setItem("role", JSON.stringify(res.data.userrole));
  if (res.data.userrole==='ADMIN') {
    window.location.href = "/admin";
  }else if (res.data.userrole==='EMPLOYEE'){
    window.location.href = "/employee";
  }else if (res.data.userrole==='USER'){
    window.location.href = "/user";
  }
}
  })
  .catch((error) => {
    
  });
  }
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" name="sname" onChange={handleInputChange}
            value={values1.sname} />
          <Components.Input type="email" placeholder="Email" name="semail" onChange={handleInputChange}
            value={values1.semail} />
          <Components.Input type="password" placeholder="Password" name="spassword" onChange={handleInputChange}
            value={values1.spassword} />
          <Components.Button type="submit" onClick={signUpSubmit}  >Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" name="remail" onChange={handleInputChange2}
            value={values1.remail} />
          <Components.Input type="password" placeholder="Password" name="rpassword" onChange={handleInputChange2}
            value={values1.rpassword} />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={signInSubmit}>Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default LoginRegister;
