import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import Services from "../../Home/services/Services";

const drawerWidth = 240;

const Deshboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "Black", height: "800px" }}>
      <Toolbar style={{ backgroundColor: "Black" }} />
      <Divider />

      <List>
        <br />
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/deshboard/payment`}
        >
          <Button color="inherit">Payment</Button>
        </Link>
        <br />
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/deshboard/myorder`}
        >
          <Button color="inherit">My-Order</Button>
        </Link>
        <br />
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/deshboard/review`}
        >
          <Button color="inherit">Review</Button>
        </Link>
        <br />
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/deshboard/addaproducts`}
        >
          <Button color="inherit">Add-Products</Button>
        </Link>
        <br />
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/deshboard/manageproducts`}
        >
          <Button color="inherit">Manage-Products</Button>
        </Link>
        <br />
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/deshboard/makeadmin`}
        >
          <Button color="inherit">Make-Admin</Button>
        </Link>
        <br />
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/deshboard/manageAllOrder`}
        >
          <Button color="inherit">Manage-All-Order</Button>
        </Link>
        <br />
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar style={{ backgroundColor: "black" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              DASHBOARD
            </Typography>
          </Toolbar>
        </AppBar>
        <Box>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Outlet></Outlet>
        </Box>
      </Box>
    </div>
  );
};

export default Deshboard;
// ResponsiveDrawer.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
//   };

//   export default ResponsiveDrawer;
