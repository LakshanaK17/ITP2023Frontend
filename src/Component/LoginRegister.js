import axios from "../axios";
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
import Controls from "../Component/controls/Controls";

function LoginRegister() {
  const [signIn, toggle] = React.useState(false);
  const stateValues1 = {
    sname: "",
    semail: "",
    spassword: "",
    userrole: "",
  };
  const stateValues2 = {
    remail: "",
    rpassword: "",
    userrole: "",
  };
  const [values1, setValues1] = React.useState(stateValues1);
  const [values2, setValues2] = React.useState(stateValues2);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues1({
      ...values1,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const [errors, setErrors] = useState({
    sname: "",
    semail: "",
    spassword: "",
    remail: "",
    rpassword: "",
  });
  const validateSignUpForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!values1.sname) {
      newErrors.sname = "Please enter your name";
      isValid = false;
    }

    if (!values1.semail) {
      newErrors.semail = "Please enter your email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values1.semail)) {
      newErrors.semail = "Please enter a valid email";
      isValid = false;
    }

    if (!values1.spassword) {
      newErrors.spassword = "Please enter a password";
      isValid = false;
    } else if (values1.spassword.length < 6) {
      newErrors.spassword = "Password should be at least 6 characters long";
      isValid = false;
    }

    setErrors({ ...errors, ...newErrors });
    return isValid;
  };

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setValues2({
      ...values2,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  console.log(values1);

  const signUpSubmit = (e) => {
    e.preventDefault();
    console.log(values1);
    if (validateSignUpForm()) {
      var data = {
        name: values1.sname,
        email: values1.semail,
        password: values1.spassword,
        userrole: values1.userrole,
        accessType: "PENDING",
        date: new Date(Date.now())
      };
      axios
        .post("/api/users/", data)
        .then((res) => {
          // window.location.reload(false);
          console.log(res);

          localStorage.setItem("adminAuth", JSON.stringify(res.data));
          if (res.data.userrole) {
            localStorage.setItem("role", res.data.userrole);
            if (res.data.userrole === "ADMIN") {
              window.location.href = "/admin";
            } else if (res.data.userrole === "EMPLOYEE") {
              window.location.href = "/employee";
            } else if (res.data.userrole === "USER") {
              window.location.href = "/user";
            }
          }
        })
        .catch((error) => { });
    }
  };

  const validateSignInForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!values2.remail) {
      newErrors.remail = "Please enter your email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values2.remail)) {
      newErrors.remail = "Please enter a valid email";
      isValid = false;
    }

    if (!values2.rpassword) {
      newErrors.rpassword = "Please enter a password";
      isValid = false;
    }

    setErrors({ ...errors, ...newErrors });
    return isValid;
  };

  const signInSubmit = (e) => {
    e.preventDefault();
    console.log(values2);
    if (validateSignInForm()) {
      var data = {
        email: values2.remail,
        password: values2.rpassword,
        userrole: values2.userrole,
        accessType: "PENDING",
        date: new Date(Date.now())
      };
      axios
        .post("/api/users/login", data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("adminAuth", JSON.stringify(res.data));
          if (res.data.userrole) {
            console.log(JSON.stringify(res.data.userrole));

            localStorage.setItem("role", res.data.userrole);
            if (res.data.userrole === "ADMIN") {
              window.location.href = "/admin";
            } else if (res.data.userrole === "EMPLOYEE") {
              window.location.href = "/employee";
            } else if (res.data.userrole === "USER") {
              window.location.href = "/user";
            }
          }
        })
        .catch((error) => { });
    }
  };
  const userItems = [
    { id: "USER", title: "USER" },
    { id: "EMPLOYEE", title: "EMPLOYEE" },
  ];
  const userItems2 = [
    { id: "EMPLOYEE", title: "EMPLOYEE" },
    { id: "USER", title: "USER" },
  ];
  return (
    <Components.Container style={{ width: "70%", height: "70vh" }}>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Name"
            name="sname"
            onChange={handleInputChange}
            value={values1.sname}
          />
          {errors.sname && <span style={{ color: "red" }}>{errors.sname}</span>}
          <Components.Input
            type="email"
            placeholder="Email"
            name="semail"
            onChange={handleInputChange}
            value={values1.semail}
          />
          {errors.semail && (
            <span style={{ color: "red" }}>{errors.semail}</span>
          )}
          <Components.Input
            type="password"
            placeholder="Password"
            name="spassword"
            onChange={handleInputChange}
            value={values1.spassword}
          />
          {errors.spassword && (
            <span style={{ color: "red" }}>{errors.spassword}</span>
          )}
          <Controls.RadioGroup
            name="userrole"
            label=""
            value={values1.userrole}
            onChange={handleInputChange}
            items={userItems}
          />
          <Components.Button type="submit" onClick={signUpSubmit}>
            Sign Up
          </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            name="remail"
            onChange={handleInputChange2}
            value={values2.remail}
          />
          {errors.remail && (
            <span style={{ color: "red" }}>{errors.remail}</span>
          )}
          <Components.Input
            type="password"
            placeholder="Password"
            name="rpassword"
            onChange={handleInputChange2}
            value={values2.rpassword}
          />
          {errors.rpassword && (
            <span style={{ color: "red" }}>{errors.rpassword}</span>
          )}

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
