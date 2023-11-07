import React, { useState } from "react";
import { Box, TextField, Typography, Grid } from "@mui/material";
import Items from "./Items";
import Container from "@mui/material/Container";
import { product } from "./Products";

const Menu = () => {
  
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
            background: `linear-gradient(#212245b2,#212245b2),url("https://d1ralsognjng37.cloudfront.net/5e4f8638-e245-44df-937f-28522210515a.jpeg")`,
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
          Hello! Please choose your Delicious🍕 Foods
        </Typography>
      </Box>{" "}
      <Container>
        <Typography sx={{textAlign:"center",mb:2,fontSize:"1.2rem"}}>Search For Your Food</Typography>
        <TextField   sx={{mb:5,justifyContent:"center",marginLeft:{lg:45,xs:6},width:{lg:"55ch",xs:"30ch"}}}
          placeholder="pizza"
          onChange={(e) => setSearch(e.target.value)}
        ></TextField>
      
        <Grid container spacing={2}>
          {product
           .filter((item) => {
    const searchQuery = search.toLowerCase(); // Convert the search query to lowercase
    const itemDescription = item.description.toLowerCase(); // Convert the item's description to lowercase

    return searchQuery === "" || itemDescription.includes(searchQuery);
  })
            .map((item, index) => (
              <Grid item lg={3} md={4} xs={12}>
                {" "}
                <Items
                  img={item.img}
                  description={item.description}
                  price={item.price}
                  text={item.text}
                  key={index}
                  item={item}
                />{" "}
              </Grid>
            ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Menu;
