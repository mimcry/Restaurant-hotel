import React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
const Signin = ({ updaterUser }) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant, send) => () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      enqueueSnackbar(res.data.message, { variant });
      updaterUser(res.data.user);
      navigate("/");
    });
    // variant could be success, error, warning, info, or default
  };
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const handeleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
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
                src="login.png"
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
                sx={{ mt: { lg: 10, md: 10, xs: 0 }, fontWeight: "bold" }}
                textAlign={"center"}
                fontSize={"1.5rem"}
              >
                LOGIN
              </Typography>

              <TextField
                value={user.email}
                name="email"
                onChange={handeleChange}
                sx={{
                  mt: 2,
                  ml: { lg: 6.5, md: 6.5, xs: 5 },
                  mb: 2,
                  width: { lg: "53.5ch", md: "47.5ch", xs: "35ch" },
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                value={user.username}
                name="username"
                onChange={handeleChange}
                sx={{
                  mt: 2,
                  ml: { lg: 6.5, md: 6.5, xs: 5 },
                  mb: 2,
                  width: { lg: "53.5ch", md: "47.5ch", xs: "35ch" },
                }}
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
              <FormControl
                sx={{
                  ml: { lg: 6.5, md: 6.5, xs: 5 },
                  mt: 2,
                  width: "25ch",
                  width: { lg: "53.5ch", md: "47.5ch", xs: "35ch" },
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

              <Button
                onClick={handleClickVariant("success")}
                sx={{
                  backgroundColor: "#a33307",
                  color: "white",
                  ml: { lg: 6.5, md: 6.5, xs: 5 },
                  mt: 2,
                  fontSize: "1.2rem",
                  textTransform: "none",
                  textAlign: "center",

                  ":hover": { bgcolor: "#a33307", transform: "scale(1.05)" },
                  width: { lg: "43.5ch", md: "38.4ch", xs: "28.2ch" },
                }}
              >
                LogIn
              </Button>
              <Link to="/forget-password">
                <Typography sx={{ textAlign: "center", mt: 1 }}>
                  Forget Password?
                </Typography>
              </Link>
              <Typography sx={{ textAlign: "center", mt: 1 }}>OR</Typography>
              <Button
                sx={{
                  ml: { lg: 6.5, md: 6.5, xs: 5 },
                  mt: 1,
                  fontSize: "1.2rem",
                  textTransform: "none",
                  padding: "5px 10px 5px 10px",
                  border: "2px solid black",
                  width: { lg: "43.5ch", md: "38.4ch", xs: "28.2ch" },
                }}
              >
                <GoogleIcon sx={{ mr: 1 }}></GoogleIcon> Sign in with google
              </Button>
              <Link to="/register">
                <Typography
                  sx={{
                    textAlign: "center",
                    mt: 2,
                    mb: 3,
                    textUnderlined: "none",
                  }}
                >
                  Don't have an account? Register
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Signin;
