import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import {
  Button,
  InputAdornment,
  TextField,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid Email"),
  password: Yup.string().required("Required").min(8, "Min 8 characters"),
});
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LoginForm = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => {
    history.push("/signup")
  }
  const togglePassword = () => {
    setShowPassword(prevState => !prevState)
  };  
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, { setSubmitting }) => {
        axios
          .post(
            "https://asia-east2-tweeter-d4a6d.cloudfunctions.net/api/login",
            values
          )
          .then((response) => {
            console.log(response);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("token", response.data.token);
            authContext.setIsLoggedIn(true);
            authContext.setToken(response.data.token);
            history.push("/profile");
          })
          .catch((error) => {
            console.error(error);
          });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, handleSubmit, handleBlur, handleChange, values }) => (
        <>
          <Box
            onSubmit={handleSubmit}
            className="login"
            component="form"
            sx={{
              "& > :not(style)": { m: 1.4, width: "95%" },
            }}
            noValidate
            autoComplete="off"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
            <h3>To get started, first enter your email, or password</h3>
            <TextField
              fullWidth
              type="email"
              label="E-mail"
              variant="filled"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            <TextField
              fullWidth
              type={showPassword ? "text" : "password" }
              name="password"
              variant="filled"
              label="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{pb:"20px" , cursor:"pointer"}} onClick={togglePassword} position="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </InputAdornment>
                ),
              }}
            />
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="contained"
          >
            Login
          </Button>
          </Box>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                Don’t have an account?
                <Link to="/" onClick={handleClick} variant="body2" sx={{ cursor: "pointer" }}>
                  {"Signup"}
                </Link>
              </Item>
            </Grid>
          </Grid>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;