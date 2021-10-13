import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { Avatar, Grid, ListItem, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Sidebar from "../sidebar/index";
import { AuthContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import { createScream, getScreams } from "../../utils/api";
import Screams from "../../Component/Scream";

const Home = () => {
  const classes = useStyles();
  const { userData } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [screams, setScreams] = useState([])

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {body: value, handle: userData.handle}
    // return console.log(data)
    createScream(data)
      .then((res) => {  
        console.log(res);
        setValue("")
        _init()
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  const _init = async () => {
      let data = await getScreams()
      setScreams(data)
      console.log(data)
  }
  useEffect(() => {
      _init() 
  }, [])
  return (
    <Box >
      <Grid container spacing={1}>
        <Grid item xs>
          <ListItem>
            <Sidebar />
          </ListItem>
        </Grid>
        <Grid item xs={4}>
          <ListItem>
            <Box
            >
              <h2>Home</h2>
              <Box 
              component="form"
              onSubmit={handleSubmit} 
              className={classes.tweetBox}>
                <Avatar alt="Profile" src={userData.imageUrl} />
                <TextField
                  onChange={handleChange}
                  className={classes.tweetField}
                  name="body"
                  placeholder="What's happening"
                  type="text"
                  value={value}
                />
                <Button type="submit" variant="contained"> Tweet </Button>
              </Box>
            
            <Box style={{  alignItems: "center" }}>
                <Screams data={screams}/>
            </Box>
            </Box>

          </ListItem>
        </Grid>
        <Grid item xs={4}>
          <ListItem>
            <h2> Widgets</h2>
          </ListItem>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
const useStyles = makeStyles({
  tweetBox: {
    width: '100%',
    paddingBottom: 10,
    borderBottom: "8px solid #e6ecf0",
    paddingRight: 10,
    borderRight: "1px solid #e6ecf0",
    display: "flex", 
    alignItems: "center",
    marginBottom: 3,
  },
  tweetField: {
    padding: 20,
    display: "flex",
    marginLeft: 20,
    fontSize: 20,
  },
  tweetButton: {
    backgroundColor: "#50b7f5",
    border: "none ",
    color: "white ",
    fontWeight: "900 ",
    textTransform: "inherit",
    borderRadius: "30px ",
    width: 80,
    height: "40px ",
    marginTop: "20px ",
    marginLeft: "auto ",
    "&:hover": {
      color: "black ",
    },
  },
});
