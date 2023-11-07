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
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useCart } from "react-use-cart";
import Container from "@mui/material/Container";
const Items = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant,item,description) => () => {
    
     addItem(item)
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${description} was added to the cart.`, { variant });
  };
  const { addItem } = useCart();
  return (
    <Container>
      {" "}
      <Card
        sx={{
          bgcolor: "transparent",
          mb: 4,
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              "&:hover": {
                transform: "scale(0.95)",
                opacity: [0.9, 0.8, 1.7],
              },
            }}
            component="img"
            height="150"
           
            image={props.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {props.description}
            </Typography>
            <Typography
              gutterBottom
              v
              component="div"
              sx={{ textAlign: "center" }}
            >
              {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>

        <Typography
          sx={{
            color: "red",
            textDecoration: "none",

          
            mb: 1,
            textAlign: "center",
          }}
        >
          Rs {props.price}
        </Typography>
        <Button
          onClick={handleClickVariant("success",props.item,props.description)}
          sx={{
            boxShadow: 24,
            textTransform: "none",
            border: "2px solid transparent",
            bgcolor: "#a33307",
            borderRadius: "25px",
            color: "white",
            mt: 1,
            fontSize: "1.1rem",
            "&:hover": { bgcolor: "green" },
            padding: "5px 20px 5px",

            mb: 3,
            ml: {lg:10.8,xs:16},
          }}
        >
          Add
        </Button>
      </Card>
    </Container>
  );
};

export default Items;
