import React, { useState } from "react";
import {
  Box,

  Typography,
  
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Modal,
} from "@mui/material";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Container from "@mui/material/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Items = (props) => {
  const [bookedRoom, setBookedRoom] = useState(null);
    const navigate=useNavigate()
  const [open, setOpen] = React.useState(false);
  const [selectedRoom, setSelectedRoom] = useState({});
  const handleOpen = (props) => {
    setOpen(true);
    setSelectedRoom(props);
  };
  const handleClose = () => setOpen(false);
  const closeModal = () => {
    setOpen(false);
  };


  
  const handleClickVariant = (variant, item, description) => () => {
    // Set the booked room details
    setBookedRoom(item);
    
    // Navigate to the "Book Room" form route and pass the selected room as state
    navigate("/bookroom", { state: { selectedRoom: item } });

    
  };

  return (
    <Container>
      {" "}
      <Card
        sx={{
          mb: 4,
        }}
      >
        <CardActionArea onClick={() => handleOpen(props)}>
          <CardMedia
            sx={{
              "&:hover": {
                transition: "0.5s",
                transform: "scale(1.1)",
                opacity: [0.9, 0.8, 1.7],
              },
            }}
            component="img"
            height="250"
            image={props.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ display: "flex" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {props.description}{" "}
              <Typography sx={{ marginLeft: "auto", fontWeight: "bold" }}>
                <PersonIcon />
                {props.capacity}
              </Typography>
            </Typography>
            <Box sx={{ display: "flex" }}>
              {" "}
              <Box
                sx={{
                  mt: 1,
                  mb: 1,
                  border: "2px solid white",
                  bgcolor: "#c0f0cf",
                  color: "#034518",
                  width: "120px",
                  textAlign: "center",
                  padding: "8px 8px 8px 8px",
                }}
              >
                {props.breakfast}
              </Box>
              <Box
                sx={{
                  mt: 1,
                  mb: 1,
                  border: "2px solid white",
                  bgcolor: "#c0f0cf",
                  color: "#034518",
                  width: "120px",
                  textAlign: "center",
                  padding: "8px 8px 8px 8px",
                }}
              >
                {props.dinner}
              </Box>
            </Box>
            <Box
              sx={{
                mt: 1,
                mb: 1,
                border: "2px solid white",
                bgcolor: "#c0f0cf",
                color: "#034518",
                width: "120px",
                textAlign: "center",
                padding: "8px 8px 8px 8px",
              }}
            >
              {props.snakes}
            </Box>
            <Typography
              gutterBottom
              component="div"
              sx={{ textAlign: "center" }}
            >
             Total Room available: {props.room}
            </Typography>
            <Typography
              gutterBottom
              component="div"
              sx={{ textAlign: "center" }}
            >
              {props.text}
            </Typography>
            <Typography
              gutterBottom
              v
              component="div"
              sx={{ textAlign: "center" }}
            >
              <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                {" "}
                Rs {props.price}
              </span>
              /night
            </Typography>
          </CardContent>
        </CardActionArea>

        <Button
        onClick={handleClickVariant("success",props.item,props.description)}
          sx={{
            textTransform: "none",

            bgcolor: "#a33307",

            color: "white",
            mt: 1,
            fontSize: "1.1rem",
            "&:hover": { bgcolor: "green" },
            padding: "5px 20px 5px",

            mb: 3,
            ml: { lg: 10.8, xs: 20, md: 2 },
          }}
        >
          Book Room <ArrowForwardIosIcon />
        </Button>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, maxWidth: { xs: 300, lg: 600, md: 500 } }}>
          <Typography sx={{ display: "flex" }}>
            <Typography variant="h5" fontWeight="bold" fontStyle="italic">
              {selectedRoom.description}
            </Typography>
            <Typography
              onClick={closeModal}
              sx={{ cursor: "pointer", marginLeft: "auto" }}
            >
              <CloseIcon />
            </Typography>
          </Typography>

          <ImageList
            sx={{
              width: { xs: 300, lg: 400, md: 400 },
              height: { xs: 150, lg: 250, md: 250 },
            }}
            variant="woven"
            cols={{lg:4}}
            gap={8}
          >
            <ImageListItem key={props.img}>
              <img
                srcSet={`${props.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${props.img}?w=161&fit=crop&auto=format`}
                alt={props.title}
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
          <p id="parent-modal-description">{selectedRoom.text}</p>
          <li> {selectedRoom.amenities}</li>

          <li style={{ marginTop: 5 }}>
            {" "}
            Max {props.capacity} Persons can use the room
          </li>
          <li style={{ marginTop: 5 }}>
            {" "}
            You should cheackout the hotel by 12:00 AM
          </li>
          <li style={{ marginTop: 5 }}> Free Games</li>

          <li style={{ marginTop: 5 }}> Free Club</li>
          <Box
            sx={{ maxWidth: { lg: 150, xs: 100, marginTop: 20 } }}
            component="img"
            src="birthday.jpg"
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default Items;
