import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Box } from "@mui/system";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import { useContext } from "react";
const Sidebar=() =>{
    const classes = useStyles();
    const auth = useContext(AuthContext);
  const history = useHistory()

  const handleLogout = () => {
    auth.setIsLoggedIn(false)
    auth.setToken("")
    localStorage.clear()
    history.push("/")
  }
  const Tiles = [
    {
      name: "Home",
      icon: HomeIcon,
      path: "/home",
    },
    {
      path: "/profile",
      name: "Profile",
      icon: PermIdentityIcon,
    },
  ];
    return(
        <div className={classes.sidebar}>
              <TwitterIcon style={{ color: " #50b7f5", fontSize: "30px",marginRight: "20px" }} />

              {Tiles.map(({ name, icon: Icon, path }) => (
                <Box
                  component={NavLink}
                  to={path}
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  key={name}
                  className={classes.sidebarTile}
                >
                  <Icon />
                  {name}
                </Box>
              ))}
              <Button onClick={handleLogout} variant="contained" sx={{marginLeft: "25%", marginTop: "95%"}} >
                Logout
              </Button>

            </div>
    )
}
export default Sidebar;
const useStyles = makeStyles({
    sidebar: {
      height: '90vh',
      borderRight: "1px solid #50b7f5",
      marginTop: "35px",
      alignItems: "center",
    },
    sidebarTile: {
      cursor: "pointer",
      backgroundColor: "#e8f5fe",
      color:"#50b7f5",
      margin: "12px 40px",
      padding: "12px 85px",
      textDecorationLine:"none",
      fontSize: 20,
      borderRadius: 45, 
      "& > svg": {
        fontSize: 30,
        marginRight: 12,
      },
      "&:hover": {
        backgroundColor: "#50b7f5 ",
        color: "white ",
      }
    },
})
