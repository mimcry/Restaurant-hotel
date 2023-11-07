import { React, useState } from "react";

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
import { Container } from "@mui/material";
import Cardforpackage from "./Cardforpackage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { birthdayarray } from "./Birthdayarray";
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
          sx={{
            background: `linear-gradient(#212245b2,#212245b2),url("https://images.squarespace-cdn.com/content/v1/59caefa8d55b4156e183b8fb/7f263971-1af5-4992-8b4b-38acf343e02a/zb-teens-banner-parties.jpg")`,
            backgroundRepeat: "no-repeat",
            padding: "80px 0",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100px",
            color: "white",
            fontSize: "1.8rem",
            textAlign: "center",
          }}
        >
          Hello! Welcome to our Package section for Birthday
        </Typography>
      </Box>
      <Container>
        <Typography
          sx={{ mt: 2, fontSize: "1.3rem",cursor:"pointer" }}
          onClick={() => navigate("/bookatable")}
        >
          {" "}
          <ArrowBackIcon></ArrowBackIcon> Go Back
        </Typography>
        <Grid container spacing={1} sx={{ mt: 2, mb: 4 }}>
          {birthdayarray.map((item,index) => (
            <Grid item lg={4} md={4} sx={{ ml: { lg: 0, xs: 4, md: 0 } }}>
              {" "}
              <Cardforpackage
              img={item.img}
                text={item.text}
                description={item.description}
                key={index}
                item={item}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Family;
