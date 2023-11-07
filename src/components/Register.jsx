import React, { useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import axios from "axios";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useSnackbar } from "notistack";
const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    const { firstname, lastname, email, password, repassword, address } = user;
    if (
      firstname &&
      lastname &&
      email &&
      password &&
      address &&
      password == repassword
    ) {
      axios
        .post("http://localhost:9002/register", user)
        .then((res) =>{ enqueueSnackbar(res.data.message,{variant})
        navigate("/")}
        );
        
    } 
    else{
enqueueSnackbar("please fill the form",{variant})
    }
    // variant could be success, error, warning, info, or default
   
  };
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
    address: "",
  });
  const handeleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
   
  };
  return (
    <React.Fragment>
      <Container>
        <Box boxShadow={24} mt={15}>
          {" "}
          <Grid container spacing={2} sx={{ marginTop: "auto" }}>
            <Grid item xs={12} lg={6} md={6}>
              <Box
                component="img"
                src="register.png"
                sx={{
                  width: "100%",
                  height: { lg: "100%", md: "100%", xs: "none" },
                  objectFit: "cover",
                  mt: 0,
                }}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Typography
                sx={{ mt: { lg: 10, md: 30, xs: 0 }, fontWeight: "bold" }}
                textAlign={"center"}
                fontSize={"1.5rem"}
              >
                REGISTER
              </Typography>

              <Typography sx={{ display: "flex" }}>
                {" "}
                <TextField
                  name="firstname"
                  value={user.firstname}
                  sx={{
                    mt: 4,
                    ml: { lg: 6.5, md: 6.5, xs: 2 },
                    mb: 2,
                    width: { xs: "19ch", md: "22ch", lg: "25ch" },
                  }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  onChange={handeleChange}
                />
                <TextField
                  name="lastname"
                  value={user.lastnme}
                  sx={{
                    mt: 4,
                    ml: { lg: 2, md: 2, xs: 1 },
                    mb: 2,
                    width: { xs: "19ch", md: "22ch", lg: "25ch" },
                  }}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  onChange={handeleChange}
                />
              </Typography>

              <Typography sx={{ display: "flex" }}>
                {" "}
                <FormControl
                  sx={{
                    ml: { lg: 6.5, md: 6.5, xs: 2 },
                    mt: 2,
                    width: { xs: "19ch", md: "22ch", lg: "25ch" },
                  }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    value={user.password}
                    name="password"
                    onChange={handeleChange}
                    label="Password"
                  />{" "}
                </FormControl>
                <FormControl
                  sx={{
                    ml: { lg: 2, md: 2, xs: 1 },
                    mt: 2,
                    width: "25ch",
                    width: { xs: "19ch", md: "22ch", lg: "25ch" },
                  }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Re-Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    value={user.repassword}
                    name="repassword"
                    onChange={handeleChange}
                    label="Password"
                  />{" "}
                </FormControl>
              </Typography>

              <TextField
                name="email"
                value={user.email}
                sx={{
                  mt: 2,
                  ml: { lg: 6.5, md: 6.5, xs: 5 },
                  mb: 2,
                  width: { lg: "53.5ch", md: "47.5ch", xs: "35ch" },
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={handeleChange}
              />
              <TextField
                name="address"
                value={user.address}
                sx={{
                  mt: 2,
                  ml: { lg: 6.5, md: 6.5, xs: 5 },
                  mb: 2,
                  width: { lg: "53.5ch", md: "47.5ch", xs: "35ch" },
                }}
                id="outlined-basic"
                label="Address"
                variant="outlined"
                onChange={handeleChange}
              />

              <Button
                onClick={handleClickVariant("success")}
                sx={{
                  backgroundColor: "#a33307",
                  color: "white",
                  ml: { lg: 29.5, md: 23, xs: 17 },
                  mt: 1,
                  fontSize: "1.2rem",
                  textTransform: "none",
                  padding: "5px 10px 5px 10px",
                  ":hover": { bgcolor: "#a33307", transform: "scale(1.1)" },
                }}
              >
                Register
              </Button>
              <Link to="/login">
                <Typography sx={{ textAlign: "center", mt: 2, mb: 3 }}>
                  Already have an account? SIGN IN
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Register;
