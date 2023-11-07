import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";
import { productspecial } from "./Projuctspecial";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Container from "@mui/material/Container";
import SpecialItem from "./SpecialItem";
import { useSnackbar } from "notistack";
function Special() {

  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    

    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Thanks for Subscribing us! ", { variant });
  };

  return (
    <React.Fragment>
      <Container>
        <Paper elevation={24} sx={{ borderRadius: "20px", mt: "100px" }}>
          <Box
            sx={{
              mt: "50px",
              borderRadius: "20px",
              bgcolor: "#e8e6e6",
              mt: "50px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "2rem",
                paddingTop: "50px",
                textAlign: "center",
              }}
            >
              Our Special Dish
            </Typography>
            <Typography sx={{ mt: "20px", textAlign: "center" ,mb:4}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              fugit.
            </Typography>
            
        <Grid container spacing={2}>
        {productspecial.map((item, index) => (
          <Grid item lg={3}>
              <SpecialItem
              img={item.img}
              description={item.description}
              price={item.price}
              key={index}
              item={item}
              deduction={item.deduction}
              text={item.text}
            /></Grid>
        ))}</Grid>
      

            <Grid container spacing={2}>
              <Grid item lg={6} xs={12} md={6}>
                <Box
                  component="img"
                  src="sus.png"
                  sx={{
                    borderRadius: "25px",
                    width: { lg: "100%", xs: "100%", md: "90%" },
                    height: { lg: "550px", xs: "420px", md: "520px" },
                    objectFit: "cover",
                    padding: 0,
                    margin: 0,
                  }}
                />
              </Grid>
              <Grid item lg={6} xs={12} md={6}>
                {" "}
                <Typography
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    paddingTop: { lg: "150px", md: "150px", xs: "30px" },
                    mr: { lg: "90px", md: "90px" },
                    textAlign:{xs:"center"}
                  }}
                >
                  Welcome to our restuarant
                </Typography>
                <Typography sx={{ mt: 2, mr: { lg: "90px", md: "90px" }, textAlign:{xs:"center"} }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                  voluptatem nemo voluptates laborum ratione consectetur? Nulla
                  sed facilis ipsam repellendus culpa autem, molestiae error eum
                  qui inventore ab. Perspiciatis, sit?
                </Typography>
                <Link to="/menu" style={{ textDecoration: 'none' }}><Button
                  variant="contained"
                  sx={{
                    mt: "30px",
                    backgroundColor: "gray",
                    fontSize: "1.2rem",
                    borderRadius: "20px 5px 20px",
                    border: "2px solid gray",
                    color: "white",
                    cursor: "pointer",
                    marginLeft: "15px",
                    "&:hover": {
                      backgroundColor: "#a33307",
                      color: "white",
                      opacity: [0.9, 0.8, 1.7],
                      transform: "scale(1.05)",
                      transition: "0.3s",
                    },
                    mr: "20px",
                    mb: 4,
                  }}
                >
                 Menu
                </Button></Link>
               <Link to="/bookatable" style={{ textDecoration: 'none' }}> <Button
                  variant="contained"
                  sx={{
                    mt: "30px",
                    backgroundColor: "#a33307",
                    fontSize: "1.2rem",
                    borderRadius: "20px 5px 20px",
                    border: "2px solid gray",
                    color: "white",
                    cursor: "pointer",
                    marginLeft: "2px",
                    "&:hover": {
                      backgroundColor: "#a33307",
                      color: "white",
                      opacity: [0.9, 0.8, 1.7],
                      transform: "scale(1.05)",
                      transition: "0.3s",
                    },
                    mr: { lg: "220px", md: "150px" },
                    mb: 4,
                  }}
                >
                  Book a table
                </Button></Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>{" "}
        <Box sx={{ mb: 10 }}>
          {" "}
          <Grid
            container
            spacing={2}
            elevation={24}
            sx={{ borderRadius: "20px", mt: "100px" }}
          >
            <Grid item lg={6} md={6} xs={12}>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  paddingTop: { lg: "100px", xs: "50px" },
                  textAlign:{xs:"center"}
                }}
              >
                Our Expert Chef
              </Typography>
              <Typography sx={{ mt: 4 , textAlign:{xs:"center"}}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium assumenda explicabo ad quo excepturi tempora quaerat
                ducimus! Fuga aspernatur deserunt molestiae dolorem. Sit aliquam
                tempore libero necessitatibus molestias exercitationem
                voluptate.
              </Typography>
              <Typography sx={{ display: "flex", mt: 3, pl: "20px" }}>
                <TaskAltIcon sx={{ color: "#a33307" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
              </Typography>

              <Typography sx={{ display: "flex", mt: 3, pl: "20px" }}>
                <TaskAltIcon sx={{ color: "#a33307" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
              </Typography>

              <Typography sx={{ display: "flex", mt: 3, pl: "20px" }}>
                <TaskAltIcon sx={{ color: "#a33307" }}></TaskAltIcon>{" "}
                <Typography sx={{ ml: 2 }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, fuga?
                </Typography>
              </Typography>
           <Link to="/menu" style={{ textDecoration: 'none' }}>   <Button
                variant="contained"
                sx={{
                  mt: "30px",
                  backgroundColor: "gray",
                  fontSize: "1.2rem",
                  borderRadius: "20px 5px 20px",
                  border: "2px solid gray",
                  color: "white",
                  cursor: "pointer",
                  marginLeft: "10px",
                  "&:hover": {
                    backgroundColor: "#a33307",
                    color: "white",
                    opacity: [0.9, 0.8, 1.7],
                    transform: "scale(1.05)",
                    transition: "0.3s",
                  },
                  mr: "20px",
                  mb: 4,
                }}
              >
                Menu
              </Button></Link>
             <Link to="/room" style={{ textDecoration: 'none' }}> <Button
                variant="contained"
                sx={{
                  mt: "30px",
                  backgroundColor: "#a33307",
                  fontSize: "1.2rem",
                  borderRadius: "20px 5px 20px",
                  border: "2px solid gray",
                  color: "white",
                  cursor: "pointer",
                  marginLeft: "2px",
                  "&:hover": {
                    backgroundColor: "#a33307",
                    color: "white",
                    opacity: [0.9, 0.8, 1.7],
                    transform: "scale(1.05)",
                    transition: "0.3s",
                  },
                  mb: 4,
                }}
              >
                Book Room
              </Button></Link>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              {" "}
              <Box
                component="img"
                src="safe.png"
                sx={{
                  borderRadius: "25px",
                  width: { lg: "60%", xs: "80%", md: "90%" },
                  height: { lg: "100%", xs: "100%", md: "100%" },
                  objectFit: "cover",
                  padding: 0,
                  margin: 0,
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ borderRadius: "35px" }}>
          <Box>
            <Typography
              sx={{
                paddingTop: "50px",
                fontSize: "2rem",
                fontWeight: "bold",
                mb: 3,
                textAlign: "center",
              }}
            >
              Our Happy Customers
            </Typography>
            <Typography sx={{ color: "gray", mb: 5, textAlign: "center" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
              perspiciatis.
            </Typography>
            <Box sx={{ ml: { lg: 2, xs: 1 } }}>
              {" "}
              <Testimonial></Testimonial>
            </Box>
          </Box>
        </Box>
        <Paper
          elevation={24}
          sx={{ borderRadius: "35px", pb: 1, bgcolor: "#e8e6e6" }}
        >
          {" "}
          <Box
            sx={{
              backgroundSize: "cover",
              backgroundImage: 'url("mix.avif")',
              position: "relative",
              borderRadius: "35px",
            }}
          >
            <Box>
              {" "}
              <Typography
                sx={{
                  paddingTop: 10,
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Get Our Promo Code by <br /> Subscribing To Our NewsLetter
              </Typography>
            </Box>
            <TextField
            required
              placeholder="Email"
              variant="outlined"
              sx={{
                width: { lg: "500px", xs: "300px" },
                mt: 5,
                mr: { lg: 4, xs: 4 },
                mb: 8,
                "& .MuiOutlinedInput-root": {
                  bgcolor: "white",
                },
                ml: {lg:40,md:40,xs:5},
              }}
            />

            <Button
            onClick={handleClickVariant('info')}
              variant="contained"
              sx={{
                mt: { lg: 5, md: 5, xs:-5 },
                backgroundColor: "#a33307",
                fontSize: "1.5rem",
                textDecoration:"none",
                borderRadius: "20px 5px 20px",
                border: "2px solid gray",
                color: "white",
                cursor: "pointer",
                textTransform:"none",
                "&:hover": {
                  backgroundColor: "#a33307",
                  color: "white",
                  opacity: [0.9, 0.8, 1.7],
                  transform: "scale(1.05)",
                  transition: "0.3s",
                
                },
                mb: 8,
                textAlign: "center",
                ml:{xs:14,md:0,lg:0}
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Paper>
    
      </Container>
    </React.Fragment>
  );
}

export default Special;
