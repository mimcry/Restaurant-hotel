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
import GoogleIcon from "@mui/icons-material/Google";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useSnackbar } from "notistack";
const Signin = () => {
  const [mail, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.mail.endsWith('@gmail.com')) {
      // Send the message (you can use an API call or any backend service)
      if(user.name==""){enqueueSnackbar("Enter your name ", {variant:"error"});}
      else{
      if (user.message) {
        // Send the complete message
        enqueueSnackbar("Your Message was sent ", {variant:"success"});
        message1()
      } else {
        // Send a default message
        enqueueSnackbar(`Type some message to send to this restuarant`,{variant:"error"});
      }
    }}
    
    else {
      enqueueSnackbar("please fill the form", {variant:"error"});
    }
    
  }

  const { enqueueSnackbar } = useSnackbar();
  // const handleClickVariant = (variant) => () => {
   
  //  setEmail(target.value)
   
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [user,setuser]=useState({
    name:"",
    mail:"",
    message:""
  })
  const handeleChange=e=>{
    const {name,value}=e.target;
      
    setuser({
      ...user,
      [name]:value
    })
  }
  const message1= ()=>{
    axios.post("http://localhost:9002/contactus",user)
 
  }
  return (
    <React.Fragment>

      <Container>
        <Box mt={15}>
          {" "}
          <Grid container spacing={2} sx={{ marginTop: "auto" }}>
            <Grid item lg={4} md={6} xs={12}>
              <Typography
                sx={{ mt: { lg: 10, md: 5, xs: 0 }, fontWeight: "bold" }}
                fontSize={"2.5rem"}
               
              >
                CONTACT US
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, tenetur.
              </Typography>

              <TextField name="name"value={user.name} onChange={handeleChange}
                sx={{
                  mt: 2,

                  mb: 2,
                  width: "35ch",
                }}
                id="outlined-basic"
                label="Your
                Name"
                variant="outlined"
                required
              />
              <TextField name="mail"value={user.mail} onChange={handeleChange}
                sx={{
                  mb: 2,
                  width: "35ch",
                }}
                id="outlined-basic"
                label="Your Mail"
                variant="outlined"
                required
              />
              <TextField name="message"value={user.message} onChange={handeleChange}
                sx={{
                  mb: 2,
                  width: "35ch",
                }}
                multiline
                id="outlined-basic"
                label="Your Message"
                variant="outlined"
                rows={4}
                required
              />
              <Button
              onClick={handleSubmit}
                sx={{
                  backgroundColor: "#a33307",
                  color: "white",

                  mt: 2,
                  fontSize: "1.2rem",
                  textTransform: "none",
                  ml:{lg:0,md:10},

                  padding: "8px 30px 8px 30px",
                  ":hover": { bgcolor: "#a33307", transform: "scale(1.05)" },
                }}
              >
                Send
              </Button>
            </Grid>
            <Grid item xs={12} lg={8} md={6}>
              <Box
                component="img"
                src="contact.png"         
                  
                sx={{width: "90%",
                  height: { lg: "90%", md: "90%",  },
                   objectFit: "cover",
                    display: 'block', // Set the default display property for the image
                    '@media (max-width: 600px)': {
                      // Define styles for screens with a max-width of 600px (mobile screens)
                      display: 'none', // Hide the image on mobile screens
                    },
                  }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Signin;
