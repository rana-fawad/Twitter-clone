import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { PhotoCamera } from "@mui/icons-material";
import { TextField, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useHistory } from "react-router";
import { updateProfileImage, updateUserProfile } from "../../utils/api";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function EditProfile() {
  const [editUserData, setEditUserData] = useState({
    name: "",
    gender: "",
    contact: "",
    telephone: "",
    location: "",
    area: "",
    about: "",
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(editUserData)
      .then((res) => {
        console.log(res);
        history.goBack("/Profile");
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  const handleChange = (e) => {
    setEditUserData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);

    updateProfileImage(formData)
      .then((res) => {
        console.log(res);
        history.goBack("/Profile");
      })
      .catch((err) => {
        console.error(err.response);
      });
  };
  return (
    <Box onSubmit={handleSubmit} component="form" sx={{ width: "100%" }}>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 3 }}
      >
        <Item>
          <TextField
            variant="outlined"
            type="text"
            name="name"
            label="Name"
            onChange={handleChange}
            value={editUserData.name}
          />
        </Item>
        <Item>
          <TextField
            variant="outlined"
            type="text"
            name="gender"
            label="Gender"
            onChange={handleChange}
            value={editUserData.gender}
          />
        </Item>
        <Item>
          <TextField
            variant="outlined"
            type="contact"
            name="contact"
            label="Contact"
            onChange={handleChange}
            value={editUserData.contact}
          />
        </Item>
      </Grid>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 3 }}
      >
        <Item>
          <TextField
            variant="outlined"
            type="text"
            name="telephone"
            label="Telephone"
            onChange={handleChange}
            value={editUserData.telephone}
          />
        </Item>
        <Item>
          <TextField
            variant="outlined"
            type="text"
            name="location"
            label="location"
            onChange={handleChange}
            value={editUserData.location}
          />
        </Item>
        <Item>
          <TextField
            variant="outlined"
            type="text"
            name="area"
            label="Area"
            onChange={handleChange}
            value={editUserData.area}
          />
        </Item>
      </Grid>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Item>
          <TextField
            variant="filled"
            type="text"
            name="about"
            label="About"
            onChange={handleChange}
            value={editUserData.about}
          />
        </Item>
        <Item>
          <label htmlFor="contained-button-file">
            <TextField
              style={{ display: "none" }}
              accept="image/*"
              id="contained-button-file"
              variant="outlined"
              type="file"
              onChange={handleImageUpload}
              multiple
            />
            <Button
              variant="contained"
              component="span"
              startIcon={<PhotoCamera />}
            >
              Upload
            </Button>
          </label>
        </Item>
      </Grid>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={4}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
export default EditProfile;