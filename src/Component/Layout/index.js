import Container from "@material-ui/core/Container";
import { CssBaseline } from "@mui/material";
const Layout = ({ children }) => {
  return (
    <>
      <CssBaselineline />
      <Container>{children}</Container>
    </>
  );
};
export default Layout;