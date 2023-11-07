import React, { useState } from "react";
import Hamburger from "./Hamburger";
import {
  AppBar,
  Typography,
  Toolbar,
  Tab,
  Tabs,
  Button,
  useTheme,
  useMediaQuery,
  Badge,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import { useCart } from "react-use-cart";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSnackbar } from "notistack";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button as MUIButton } from '@mui/material';

const Navbar = ({ user, onLogout }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const list = ["Home", "About us", "Contact us", "Menu", "Room"];
  const { totalUniqueItems } = useCart();
  const navigate = useNavigate();
  const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);

  const handleOpenLogoutConfirmation = () => {
    setLogoutConfirmationOpen(true);
  };

  const handleCloseLogoutConfirmation = () => {
    setLogoutConfirmationOpen(false);
  };

  const handleConfirmLogout = () => {
    onLogout();
    setLogoutConfirmationOpen(false);
    enqueueSnackbar("You are logged out. Please log in to continue", { variant: "warning" });
    navigate("/login");
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Link to="/Home" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "black",
                cursor: "pointer",
                fontSize: "1.5rem",
                color: "#a33307",
                fontWeight: "bold",
              }}
            >
              <DinnerDiningIcon sx={{ marginTop: "auto" }} />
              Restaurant/<span style={{fontSize:"1rem"}}>Hotel</span>
            </Typography>
          </Link>
          {isMatch ? (
            <Hamburger />
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto", color: "black" }}
                textColor="primary"
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                indicatorColor="#fff"
              >
                {list.map((page, index) => (
                  <Link to={page} key={index} style={{ textDecoration: "none" }}>
                    <Tab
                      sx={{ fontSize: "1.3rem", color: "#a33307", textTransform: "none" }}
                      label={page}
                    />
                  </Link>
                ))}
              </Tabs>
             
            </>
          )}
          {user ? (
            <>
              <Typography sx={{ color: "black",  marginLeft: "auto", xs: { display: "block" } }}>
                Hello <br /><span style={{fontSize: "1.2rem", color: "#a33307", fontWeight: "bold"}}>{user.username}</span>
              </Typography>
           
                <Button onClick={handleOpenLogoutConfirmation}
                 
                  sx={{
                   
                    marginLeft: "left",
                    color: "#a33307",
                    fontSize: "1.5rem",
                    backgroundColor: "white",
                    "&:hover": {
                      color: "#a33307",
                      backgroundColor: "white",
                      opacity: [0.9, 0.8, 1.7],
                      transform: "scale(1.05)",
                      transition: "0.3s",
                    },
                  }} >
                  <LogoutIcon />
                </Button>
              
            </>
          ) : null}
          <Link to="/Cart">
            <Badge
              color="error"
              badgeContent={totalUniqueItems}
              sx={{
                marginLeft: "auto",
                color: "#a33307",
                fontSize: "1.8rem",
                paddingLeft: { lg: 3, md: 3 },
                paddingRight: { lg: 2 },
                cursor: "pointer",
                "&:hover": {
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.1)",
                  transition: "0.3s",
                },
              }}
            >
              <AddShoppingCartIcon />
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>
      <Dialog
        open={logoutConfirmationOpen}
        onClose={handleCloseLogoutConfirmation}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogoutConfirmation} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmLogout} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Navbar;

