import React, { useState } from "react";

import {
  Box,

  Typography,
  Grid,
 
} from "@mui/material";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Container from "@mui/material/Container";

function Book_A_Table() {


  const [data] = useState([
    {
      image: "family.jpg",
      text: "Family Package",
      discription:
        "  Lorem ipsum dolor sit amet consectetur adipisicingelit. Vitae, repudiandae.",
        open:"/family",
        close:"handelclose1"
    },
    {
      image: "birthday.jpg",
      text: "Birthday Package",
      discription:
        "  Lorem ipsum dolor sit amet consectetur adipisicingelit. Vitae, repudiandae.",
        open:"/birthday",
        close:"handelclose2"
    },
    {
      image: "friends.jpg",
      text: "Friends Package",
      discription:
        "  Lorem ipsum dolor sit amet consectetur adipisicingelit. Vitae, repudiandae.",
        open:"/friend",
        close:"handelclose3"
    },
  ]);
 

  return (
    <React.Fragment>
      {" "}
      <Box
        sx={{
          mt: 8,
        }}
      >
        <Typography
          id="back"
          sx={{ color: "white", fontSize: "1.8rem", textAlign: "center" }}
        >
          Hello! Welcome to our Package section
        </Typography>
      </Box>
      <Container>
        
        <Grid container spacing={1} sx={{ mt: 4, mb: 4 }}>
          {data.map((data) => (
            
            <Grid item lg={4} md={4} sx={{ ml:{lg:0,xs:5,md:0} }}>
              {" "}
         <Link to={data.open} style={{ textDecoration: 'none' }}><Cards  image={data.image} text={data.text}  discription={data.discription} /></Link>
            </Grid>
          ))}
         
        </Grid>

      </Container>
    </React.Fragment>
  );
}

export default Book_A_Table;
