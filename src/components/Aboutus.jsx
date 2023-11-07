import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
const Aboutus = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          mt: 8,
        }}
      >
        <Typography
          sx={{
            background: `linear-gradient(#212245b2,#212245b2),url("https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?size=626&ext=jpg&ga=GA1.1.1146538064.1697478339&semt=ais")`,
            backgroundRepeat: "no-repeat",
            padding: "80px 0",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100px",
            color: "white",
            fontSize: "2.5rem",
            textAlign: "center",
          }}
        >
          Welcome to our Resturant
        </Typography>
      </Box>
      <Container>
        <Typography textAlign={"center"} mt={4} sx={{ fontSize: "1.8rem" }}>
          About Us
        </Typography>
        <Typography textAlign={"center"} mt={1} sx={{ fontSize: "1.1rem" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga porro
          sapiente itaque quam impedit, vel recusandae totam dolor delectus
          officia amet quis laudantium ea modi doloribus? Corporis quisquam
          expedita adipisci!
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: "auto" }}>
          <Grid item xs={12} lg={8} md={6}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/group-friends-eating-restaurant_23-2148006644.jpg?w=1060&t=st=1697647257~exp=1697647857~hmac=c8c3b2ab74b7a978ccc843ca15d2ab64e34330325a72af20ab90303ec178d13e"
              sx={{
                width: "100%",
                height: { lg: "80%", md: "100%", xs: "none" },
                objectFit: "cover",
                mt:{lg:8,xs:3},
                borderRadius: "35px",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} md={6}>
          
            {" "}
            <Typography sx={{mt:{lg:18,xs:5}, fontSize:"1.1rem",ml:2}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              beatae provident, laborum corrupti nulla iusto deserunt rerum
              totam repellat labore iure deleniti doloremque tempore. Ea quas
              praesentium eos ullam facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              beatae provident, laborum corrupti nulla iusto deserunt rerum
              totam repellat labore iure deleniti doloremque tempore. Ea quas
              praesentium eos ullam facere.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Aboutus;
