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
  Container,
} from "@mui/material";
import  {roomdetail }from './Roomdetails'
import Roomitems from './Roomitems'
const Rooms = () => {
    const [search, setSearch] = useState("");
 
    const [age, setAge] = React.useState("");
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <React.Fragment>
      <Box
        sx={{
          mt: 8,
          mb: 5,
        }}
      >
        <Typography
          sx={{
            background: `linear-gradient(#212245b2,#212245b2),url("https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill")`,
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
          Hello! Please choose the Room for your comfort 🛏️ Foods
        </Typography>
      </Box>{" "}
      <Container>
        <Typography sx={{textAlign:"center",mb:2,fontSize:"1.2rem"}}>Search For Your Room</Typography>
        <TextField   sx={{mb:5,justifyContent:"center",marginLeft:{lg:45,xs:6},width:{lg:"55ch",xs:"30ch"}}}
          placeholder="Deluxe"
          onChange={(e) => setSearch(e.target.value)}
        ></TextField>
      
        <Grid container spacing={2}>
          {roomdetail
           .filter((item) => {
            const searchQuery = search.toLowerCase(); // Convert the search query to lowercase
            const itemDescription = item.description.toLowerCase(); // Convert the item's description to lowercase
        
            return searchQuery === "" || itemDescription.includes(searchQuery);
          })
            .map((item, index) => (
              <Grid item lg={4} md={6} xs={12}>
                {" "}
                <Roomitems
                  img={item.img}
                  description={item.description}
                  price={item.price}
                  text={item.text}
                  amenities={item.amenities}
                  capacity={item.capacity}
                  key={index}
                  item={item}
                  room={item.room}
                  breakfast={item.breakfast}
                  dinner={item.dinner}
                  snakes={item.snakes}
                />{" "}
              </Grid>
            ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Rooms;
