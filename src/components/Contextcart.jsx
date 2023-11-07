import React, { createContext, useContext, useState } from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Items from "./Products";
import { product } from "./Products";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "./Cart";
const Contextcart = () => {

  return (
    <React.Fragment>
    {" "}
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
        <Link to="/menu" style={{ textDecoration: "none" }}>
          {" "}
          <Typography
            sx={{
              mt: 15,
              cursor: "pointer",
              fontSize: "1.5rem",
              color: "black",
            }}
          >
            {" "}
            <ArrowBackIcon></ArrowBackIcon> Continue Odering
          </Typography>
        </Link>

        <AddShoppingCartIcon
          sx={{ mt: 16, marginLeft: "auto", fontSize: "1.8rem" }}
        ></AddShoppingCartIcon>
      </Box>

      <Typography sx={{ fontSize: "1.5rem", mt: 4 }}>
        Ordered Items
      </Typography>
      <Typography sx={{ color: "gray", fontSize: "0.9rem" }}>
        You have order <span>7</span> Items
      </Typography> 
{product.map((product=>(<Items price={product.price}img={product.img} description={product.description}/>)))}
    <Box sx={{marginLeft:{lg:"700px",md:"700px",xs:"200px"}}}>  <Typography sx={{ mt: 2,  }}>
        Total Amount: Rs 250
      </Typography>
      <Button
        sx={{
          bgcolor: "blue",
          color: "white",
       
          ":hover": {
            bgcolor: "blue",
            color: "white",
            transform: "scale(1.08)",
          },
          mt: 2,
          textTransform: "none",
          fontSize: "1.1rem",
        }}
      >
        Check Out
      </Button></Box>
    </Container>
  </React.Fragment>
  )
}

export default Contextcart
