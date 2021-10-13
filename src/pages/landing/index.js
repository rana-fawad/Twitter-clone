// function Landing() {
//   return (
//     <>
//       <Container>
//         <TableRow className="justify-content-md-center">
//           <TableCell xs lg="2" className="background">
//             <svg viewBox="0 0 24 24" aria-hidden="true">
//               <g>
//                 <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
//               </g>
//             </svg>
//           </TableCell>
//           <TableCell xs lg="2" className="body">
//             <TableRow>
//               <svg viewBox="0 0 24 24" aria-hidden="true">
//                 <g>
//                   <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
//                 </g>
//               </svg>
//             </TableRow>
//             <div className="content">
//               <TableRow>
//                 <h2>Happening now</h2>
//               </TableRow>
//               <TableRow>
//                 <h3>Join Twitter today.</h3>
//               </TableRow>
//               <TableRow>
//                 {/* <Form> */}
//                 <SignupModal />
//                 <LoginModal />
//                 {/* </Form> */}
//               </TableRow>
//               <TableRow className="about">
//                 <span>
//                   {" "}
//                   By signing up, you agree to the{" "}
//                   <Link to="">Terms of Service</Link> and{" "}
//                   <Link to="">Privacy Policy</Link>, including{" "}
//                   <Link to="">Cookie Use.</Link>{" "}
//                 </span>
//               </TableRow>
//             </div>
//           </TableCell>
//         </TableRow>
//       </Container>
//     </>
//   );
// }

import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles';
import { AuthContext } from "../../App";
import LoginModal from "../../Component/loginForm/LoginModal";
import SignupModal from "../../Component/signupForm/SignupModal";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListItem } from "@mui/material";


// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const Landing = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    if (auth.isLoggedIn) {
      history.push("/home");
    }
  }, [auth.isLoggedIn, history]);
  return (
    <Box sx={{ width: "auto" , overflow: "hidden" }}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <ListItem className={classes.background}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </ListItem>
        </Grid>
        <Grid item xs={6}>
          <ListItem className={classes.body}>
            <svg className={classes.svg} viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
            <span className={classes.heading}>
            <h1 className={classes.heading1}>Happening now</h1><br/>
            <h3>Join Twitter today.</h3>
            </span>
            <span className={classes.form}>
            {/* <Form> */}
            <SignupModal />
            <LoginModal />
            {/* </Form> */}
            </span>
            <span className={classes.footer}>
              By signing up, you agree to the
              <Link to="">Terms of Service</Link> and
              <Link to="">Privacy Policy</Link>, including
              <Link to="">Cookie Use.</Link>
            </span>
          </ListItem>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Landing;
const useStyles = makeStyles({
  background:{
    fill: '#94d7ff',
    height: '80vh',
    position: 'relative',
    width: 'auto',
  },
  svg :{
    height: 50,
    width: 'auto',
    position: 'absolute',
    top: 40,
    fill: '#1d9bf0',
  },
  body:{
    position: 'relative',
    left: 50,
    borderRight: '1px salmon',
  },
  heading:{
    position: 'relative',
  },
  heading1:{
    marginTop: '35%',
    width: 'max-content',
  },
  form:{
    marginTop: '69%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
  },
  footer:{
    position: 'absolute',
    marginTop: '110%',
    width: '80%',
  }
});
