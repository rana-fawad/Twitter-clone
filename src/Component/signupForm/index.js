import { useState } from "react";
import { validate } from "./helper";
import { signup } from "../../utils/api";
import { Box } from "@mui/system";
import React from "react";
import { Button , InputAdornment, TextField } from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";


const SignupForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    handle: "",
  });
  const [errors, setErrors] = useState({});
  const togglePassword = () => {
    setShowPassword(prevState => !prevState)
  };  
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    const errors = validate(state) 
   
    event.preventDefault();
    
    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    } else {
      setErrors({})
    }


    console.log(state);

    signup(state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error.response)
      setErrors(error.response.data)
    })

  };

  return <>
   {/* <span className="head">Create your account</span>
    <form className="sign-form" onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <span>{errors.name}</span><br/>
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        />
      <span>{errors.email}</span><br/>
      <input
        name="password"
        value={state.password}
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <span>{errors.password}</span><br/>
      <input
        name="confirmPassword"
        value={state.confirmPassword}
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      <span>{errors.confirmPassword}</span><br/>
      <input
        name="handle"
        value={state.handle}
        type="text"
        placeholder="Username"
        onChange={handleChange}
      />
      <span>{errors.handle}</span><br/>

      <input type="Submit" value="Submit" readOnly />
    </form> */}

        <Box
            onSubmit={handleSubmit}
            className="login"
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "95%" },
            }}
            noValidate
            autoComplete="off">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
            <h3>Create your account</h3>
            <TextField fullWidth name="name" value={state.name} onChange={handleChange} label="Name" type="text" variant="filled" />
            <TextField fullWidth name="email" value={state.email} onChange={handleChange} label="E-mail" type="email" variant="filled" />
              <TextField fullWidth name="handle" value={state.handle} onChange={handleChange} label="Username" type="text" variant="filled" />
                <TextField
              fullWidth
              type={showPassword ? "text" : "password" }
              value={state.password}
              label="Password"
              name="password"
              variant="filled"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{pb:"20px" ,cursor: "pointer"}} onClick={togglePassword} position="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                ),
              }}
            />
              <TextField
              fullWidth
              name="confirmPassword"
                value={state.confirmPassword}
              type={showPassword ? "text" : "password" }
              variant="filled"
              label="Confirm Password"
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{pb:"20px" ,cursor: "pointer"}} onClick={togglePassword} position="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                ),
              }}
            />
            <Button
            type="submit"
            variant="contained"
            value="submit"
            >
            SignUp
          </Button>
              </Box>


    </>
};

export default SignupForm;