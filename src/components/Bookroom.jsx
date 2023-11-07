import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Grid,
  Container,
  Button,
  TextField,
  Checkbox,
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from "axios"
import { useSnackbar } from "notistack";

import { Link } from "react-router-dom";
const Bookroom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const bookroom = (e) => {
    e.preventDefault();
    if (formData.email) {
      // Send the message (you can use an API call or any backend service)
      if (formData.checkInDate) {
        if(formData.room<=(selectedRoom.room)){
        // Send the complete message
        enqueueSnackbar("Your Room was Booked. ",{variant: 'success'} );
        
        const orderData = {
          room:formData.room,
          name: formData.name,
          mail: formData.email,
          checkInDate: formData.checkInDate,
          checkOutDate: formData.checkOutDate,
          specialnote:formData.specialnote,
          number:formData.number,
          room:formData.room,
         
            img: selectedRoom.img,
            description: selectedRoom.description,
            quantity: selectedRoom.quantity,
           price:(selectedRoom.price)
       
        };
       
          axios.post("http://localhost:9002/bookroom", orderData)
          navigate("/home")   
    
    }
   

        else {
          // Send a default message
          enqueueSnackbar(`we don't have ${formData.room} rooms available`,{variant: 'error'});
        }
      } else {
        // Send a default message
        enqueueSnackbar("plz provide you checkin date",{variant: 'error'});
      }
    } else {
      enqueueSnackbar('Please fill the form completely.',{variant: 'error'});
      
    }
    
  }
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    
   
    // Pass the selectedRoom details from location state
    if (location.state && location.state.selectedRoom) {
      setSelectedRoom(location.state.selectedRoom);
    }
  }, [location.state]);
  const [formData, setFormData] = useState({
  
    // Add more form fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("MyUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const updaterUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user));
    setUser(user);
  };

  return (
   <React.Fragment> {user && user._id?(
    <Container updaterUser={updaterUser}>
      <Link to="/room"> <Typography><ArrowBackIosIcon sx={{mt:10,cursor:"pointer"}}/></Typography></Link>
      {selectedRoom ? (
        <div>
          


            <Grid container spacing={2}>
           
              <Grid item lg={6} md={6} xs={12}>
             
                <Box
                  sx={{
                    mt: 5,
                    border: "2px solid transparent",
                    maxWidth: 450,
                  }}
                >
                  <Box
                    component="img"
                    src={selectedRoom.img}
                    sx={{maxWidth:{lg:450,md:440,xs:350}}}
                    maxHeight={400}
                  />
                  <Typography
                    sx={{ textAlign: "center" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {selectedRoom.description}{" "}
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    {" "}
                    <Box
                      sx={{
                        mt: 1,
                        mb: 1,
                        border: "2px solid white",
                        bgcolor: "#c0f0cf",
                        color: "#034518",
                        width: "120px",
                        textAlign: "center",
                        padding: "8px 8px 8px 8px",
                      }}
                    >
                     {selectedRoom.breakfast}
                    </Box>
                    <Box
                      sx={{
                        mt: 1,
                        mb: 1,
                        border: "2px solid white",
                        bgcolor: "#c0f0cf",
                        color: "#034518",
                        width: "120px",
                        textAlign: "center",
                        padding: "8px 8px 8px 8px",
                      }}
                    >
                      {selectedRoom.snakes}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mt: 1,
                      mb: 1,
                      border: "2px solid white",
                      bgcolor: "#c0f0cf",
                      color: "#034518",
                      width: "120px",
                      textAlign: "center",
                      padding: "8px 8px 8px 8px",
                    }}
                  >
                    {selectedRoom.dinner}
                  </Box>
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {selectedRoom.text}
                  </Typography>
                  <Typography
                    gutterBottom
                    v
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                      {" "}
                      Rs {selectedRoom.price}
                    </span>
                    /night
                  </Typography>{" "}
                </Box>
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                <form >
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        sx={{ mt: 10 }}
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        sx={{ mt: 0 }}
                        fullWidth
                        label="Number"
                        variant="outlined"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        sx={{ mt: 0 }}
                        fullWidth
                        label="Room"
                        variant="outlined"
                        name="room"
                        value={formData.room}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                        Check-In Date
                        <TextField
                          fullWidth
                          variant="outlined"
                          name="checkInDate"
                          type="date"
                          value={formData.checkInDate}
                          onChange={handleChange}
                          required
                        />
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>
                        Check-Out Date{" "}
                        <TextField
                          fullWidth
                          variant="outlined"
                          name="checkOutDate"
                          type="date"
                          value={formData.checkOutDate}
                          onChange={handleChange}
                          required
                        />
                      </Typography>
                      <TextField
                        multiline
                        fullWidth
                        label="Special note"
                        variant="outlined"
                        name="specialnote"
                        rows={4}
                        type="date"
                        value={formData.specialnote}
                        onChange={handleChange}
                        sx={{ mt: 5 }}
                        required
                      />
                    </Grid>
                    {/* Add more form fields as needed */}
                  </Grid>
                  <Typography sx={{ mt: 2 }}>
                    <span style={{ fontWeight: "bold" }}>Tax</span> : Rs{" "}
                    {selectedRoom.price * 0.15}
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    <span style={{ fontWeight: "bold" }}>Total Price</span> : Rs{" "}
                    {selectedRoom.price + selectedRoom.price * 0.15}
                  </Typography>

                  <Typography
                    sx={{ mt: 5, fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {" "}
                    Payment Method:
                  </Typography>
                  <Box sx={{ display: "flex", mt: 4 }}>
                    <Checkbox></Checkbox>
                    <Box
                      component="img"
                      src="esewa.png"
                      maxWidth="150px"
                      sx={{ cursor: "pointer" }}
                    />
                    <Checkbox></Checkbox>
                    <Box
                      component="img"
                      src="khalti.png"
                      maxWidth="150px"
                      sx={{ cursor: "pointer", ml: 2 }}
                    />
                  </Box>
                  <Checkbox sx={{ mt: -20 }}></Checkbox>

                  <Box
                    component="img"
                    src="ips.png"
                    maxWidth="150px"
                    sx={{ cursor: "pointer", mt: 2 }}
                  />

                  <Button
                   onClick={bookroom}
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      mt: 3,
                      fontSize: "1.1rem",
                      cursor: "pointer",
                      width: { lg: "50ch", xs: "40ch" },
                      bgcolor: "green",
                      color: "white",
                      textTransform: "none",
                      padding: "10px 10px 5px 00px",
                      ":hover": {
                        cursor: "pointer",
                        transform: "scale(1.05)",
                        bgcolor: "green",
                        color: "white",
                        transition: "0.3s",
                        textTransform: "none",
                      },
                    }}
                  >
                    Book Room
                  </Button>
                </form>
              </Grid>
            </Grid>
         
        </div>
      ) : (
        navigate("/home")
      )}
     </Container>):(<Typography sx={{ mt: 20, textAlign: "center", fontSize: "1.3rem" }}>
          Please Login First <Link to="/login"> Click here</Link>{" "}
        </Typography>)}</React.Fragment>
  );
};

export default Bookroom;
