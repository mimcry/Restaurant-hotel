import React from "react";
import styled from "@emotion/styled";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  IconButton,
 
} from "@mui/material";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Special from "./Special";
export default function Home1() {
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ display: "flex", marginTop: "100px" }}>
          <Grid container spacing={2} sx={{ marginTop: "auto" }}>
            <Grid item xs={12} lg={6} md={6}>
              <Typography
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  mt: { lg: "60px", xs: "-50px" },
                }}
              >
                We Provide The Best
                <br /> Food 🍽️ For You
              </Typography>
              <Typography sx={{ mt: 2, color: "gray" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                soluta nemo neque. Eaque consequatur voluptatibus voluptates
                inventore perspiciatis, exercitationem vel iure asperiores,
                necessitatibus doloremque soluta fugiat tempore, dolores libero
                rerum.
              </Typography>
           <Link to="/menu">   <Button
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
                    backgroundColor: "black",
                    color: "white",
                     opacity: [0.9, 0.8, 1.7],
                    transform: "scale(1.05)",
                    transition: "0.3s",
                  },
                }}
              >
                Menu
              </Button></Link>
              <Link to ="/bookatable"><Button
                variant="contained"
                sx={{
                  mt: "30px",
                  backgroundColor: "#a33307",
                  fontSize: "1.2rem",
                  borderRadius: "20px 5px 20px",
                  border: "2px solid gray",
                  color: "white",
                  cursor: "pointer",
                  marginLeft: "20px",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    opacity: [0.9, 0.8, 1.7],
                    transform: "scale(1.05)",
                    transition: "0.3s",
                  },
                }}
              >
                Book a table
              </Button></Link>
              <br />
              <Link href="https://www.youtube.com/">
                <IconButton>
                  <Paper
                    elevation={24}
                    sx={{
                      borderRadius: "200px",
                      width: "40px",
                      height: "40px",
                      mt: 4,
                      color: "black",
                      ml: "10px",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "200px",
                        opacity: [0.9, 0.8, 1.7],
                        transform: "scale(1.05)",
                        transition: "0.3s",
                      },
                    }}
                  >
                    <FacebookOutlinedIcon
                      sx={{
                        width: "40px",
                        height: "40px",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "200px",
                          opacity: [0.9, 0.8, 1.7],
                          transform: "scale(1.05)",
                          transition: "0.3s",
                        },
                      }}
                    ></FacebookOutlinedIcon>
                  </Paper>
                </IconButton>
              </Link>
              <Link href="https://twitter.com/">
                <IconButton>
                  <Paper
                    elevation={24}
                    sx={{
                      borderRadius: "200px",
                      width: "40px",
                      height: "40px",
                      mt: 4,
                      color: "black",
                      ml: "10px",
                    }}
                  >
                    <TwitterIcon
                      sx={{
                        width: "40px",
                        height: "40px",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "200px",
                          opacity: [0.9, 0.8, 1.7],
                          transform: "scale(1.05)",
                          transition: "0.3s",
                        },
                      }}
                    ></TwitterIcon>
                  </Paper>
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com/direct/t/17842186463502173/">
                <IconButton>
                  <Paper
                    elevation={24}
                    sx={{
                      borderRadius: "10px",
                      width: "40px",
                      height: "40px",
                      mt: 4,
                      color: "black",
                      ml: "10px",
                    }}
                  >
                    <InstagramIcon
                      sx={{
                        width: "40px",
                        height: "40px",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "15px",
                          opacity: [0.9, 0.8, 1.7],
                          transform: "scale(1.05)",
                          transition: "0.3s",
                        },
                      }}
                    ></InstagramIcon>
                  </Paper>
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <Paper
                elevation={24}
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "gray",
                  width: { lg: "75%", md: "100%" },
                  marginLeft: { lg: "auto" },
                }}
              >
                <Box
                  component="img"
                  src="hotel.jpg"
                  sx={{
                    borderRadius: "25px",
                    width: "100%",
                    height: "550px",
                    objectFit: "cover",
                    padding: 0,
                    margin: 0,
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Special></Special>
    </React.Fragment>
  );
}
