import { React, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Grid } from "@mui/material";
import { friend } from "./Friend";
import { Container } from "@mui/material";
import Cardforpackage from "./Cardforpackage";
const Family = () => {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <Box
        sx={{
          mt: 8,
        }}
      >
        <Typography
          id="friend"
          sx={{ color: "white", fontSize: "1.8rem", textAlign: "center" }}
        >
          Hello! Welcome to our Package section for Friends
        </Typography>
      </Box>
      <Container>
        <Typography
          sx={{ mt: 2, fontSize: "1.3rem", cursor: "pointer" }}
          onClick={() => navigate("/bookatable")}
        >
          {" "}
          <ArrowBackIcon></ArrowBackIcon> Go Back
        </Typography>
        <Grid container spacing={1} sx={{ mt: 4, mb: 4 }}>
          {friend.map((item, index) => (
            <Grid item lg={4} md={4} sx={{ ml: { lg: 0, xs: 4, md: 0 } }}>
              {" "}
              <Cardforpackage
                img={item.img}
                text={item.text}
                price={item.price}
                key={index}
                item={item}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
       
      </Container>
    </div>
  );
};

export default Family;
