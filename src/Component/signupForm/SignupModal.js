import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SignupForm from "./index";
import Button from '@mui/material/Button';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "90vh",
  transform: "translate(-50%, -50%)",
  width: 650,
  borderRadius:"20px",
  bgcolor: "white",
  border: "1px solid #b9c2c9",
  boxShadow: 24,
  p: 1,
};

export default function SignupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="primary" style={{ padding: "13px 130px", borderRadius:"15px" , fontSize:"1.5rem" ,  margin:"15px 0px", background: "#94d7ff", }} onClick={handleOpen}>
        SignUp
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <SignupForm />
        </Box>
      </Modal>
    </div>
  );
}
