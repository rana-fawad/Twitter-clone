import { Box } from "@mui/system";
import { Grid, ListItem,  } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import Sidebar from "../sidebar/index";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getScream } from "../../utils/api";
import ScreamCard from "../../Component/screamCard";

const ScreamID = () => {
    const {screamId} = useParams();
    const [scream , setScream] =useState({});

    const _init = async () => {
        let data = await getScream(screamId);
        setScream(data)
        console.log(data)
    }
    useEffect(() => {
        _init() 
    },[screamId])
  return (
    <>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs>
            <ListItem>
              <Sidebar />
            </ListItem>
          </Grid>
          <Grid item xs={4}>
            <ListItem>
              <Box style={{ alignItems: "center" }}>
                    <ScreamCard scream={scream} />
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
    </>
  );
};
export default ScreamID;
