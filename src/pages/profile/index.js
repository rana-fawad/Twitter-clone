import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { AuthContext } from "../../App";
import { useContext } from "react";

const Profile = () => {
  const { userData } = useContext(AuthContext);
  const classes = useStyles();

  return (
    <Box component="form" sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={3.25}>
          <ListItem>
            <Sidebar sx={{ height: "100vh" }} />
          </ListItem>
        </Grid>
        <Grid item xs={8.74}>
          <ListItem
            sx={{
              align: "center",
              display: "block",
              backgroundColor: "#50b7f5",
              height: "40vh",
              color: "#e8f5fe",
            }}
          >
            <div style={{ marginTop: 15 }}>
              <Avatar
                alt="Profile"
                src={userData.imageUrl}
                sx={{ width: 128, height: 128 }}
              />
              {userData.name && <h3>{userData.name}</h3>}
              {userData.about && <h5 sx={{ top: 0 }}>{userData.about}</h5>}
            </div>
          </ListItem>

          <ListItem sx={{ align: "center", display: "flow-root" , marginTop:5 }}>
            {/* {error && <h3>Something went wrong!</h3>} */}
            {userData.gender && <h3>Gender: {userData.gender}</h3>}
            {userData.contact && <h3>Contact: {userData.contact}</h3>}
            {userData.area && <h3>Area: {userData.area}</h3>}
            {userData.location && <h3>Location: {userData.location}</h3>}
            <Link to="/edit" className={classes.editBtn}>
              Edit Profile
            </Link>
          </ListItem>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Profile;
const useStyles = makeStyles({
  editBtn: {
    backgroundColor: "#50b7f5 ",
    fontWeight: "900 ",
    color: "white ",
    border: "none ",
    textTransform: "inherit ",
    borderRadius: "30px ",
    height: "50px",
    padding: "12px 50px",
    Top: 10,
    "&:hover": {
      color: "black",
    },
  },
});
