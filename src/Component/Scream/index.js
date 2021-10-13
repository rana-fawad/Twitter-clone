import * as React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import ScreamCard from "../screamCard";




const Screams = ({ data }) => {

  
  return (
    <Box >
      {data.map((scream) => (
        <Box as={Link} to={`/scream/${scream.screamId}`} key={scream.screamId}>
          <ScreamCard scream={scream} />
        </Box>
      ))}
    </Box>
  );
};
export default Screams;
