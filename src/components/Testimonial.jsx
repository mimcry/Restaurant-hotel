import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Avatar } from "@mui/material";
import { useState } from "react";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} autoPlaySpeed={4000} infinite={true} 

    autoPlay={true}
   >
     <div>
        <Box
          sx={{boxShadow:5,
            width: { lg: "350px", xs: "350px" },
            background: "radial-gradient(circle,#fde4e4,#fde4e4,#e6bbb5)",
            borderRadius: "50px 10px 50px",mb:10
          }}
        >
          {" "}
          <Avatar
            alt="Remy Sharp"
            src="pppp.jpg"
            sx={{boxShadow:24,
              width: 56,
              height: 56,
              alignItems: "center",
              ml: { lg: "160px",xs:"150px" },
            }}
          />
          <Typography sx={{ padding: "2px 5px 8px", mt: 3,textAlign:"center" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            cupiditate veniam, aspernatur
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold",pb:2,textAlign:"center"  }}>
            Salon Gautam
          </Typography>
        </Box>
      </div>
      <div>
        <Box 
          sx={{boxShadow:5,
            width: { lg: "350px", xs: "350px" },
            background: "radial-gradient(circle,#fde4e4,#fde4e4,#e6bbb5)",
            borderRadius: "50px 10px 50px",
          }}
        >
          {" "}
          <Avatar
            alt="Remy Sharp"
            src="pppp.jpg"
            sx={{boxShadow:24,
              width: 56,
              height: 56,
              alignItems: "center",
              ml: { lg: "160px",xs:"150px" },
            }}
          />
          <Typography sx={{ padding: "2px 5px 8px", mt: 3,textAlign:"center" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            cupiditate veniam, aspernatur
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold",pb:2,textAlign:"center"  }}>
            Salon Gautam
          </Typography>
        </Box>
      </div>
      <div>
        <Box
          sx={{boxShadow:5,
            width: { lg: "350px", xs: "350px" },
            background: "radial-gradient(circle,#fde4e4,#fde4e4,#e6bbb5)",
            borderRadius: "50px 10px 50px",
          }}
        >
          {" "}
          <Avatar
            alt="Remy Sharp"
            src="pppp.jpg"
            sx={{boxShadow:24,
              width: 56,
              height: 56,
              alignItems: "center",
              ml: { lg: "160px",xs:"150px" },
            }}
          />
          <Typography sx={{ padding: "2px 5px 8px", mt: 3,textAlign:"center" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            cupiditate veniam, aspernatur
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold",pb:2,textAlign:"center"  }}>
            Salon Gautam
          </Typography>
        </Box>
      </div>
     
    </Carousel>
  );
};

export default Testimonial;
