import { Container } from "@mui/material";
import React from "react";
import {
  Box,

  Typography,
  Grid,

  Button,
  TextField,
  Checkbox,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user1.mail.endsWith("@gmail.com")) {
      // Send the message (you can use an API call or any backend service)
      if (user1.address) {
        if (user1.number.length >= 10) {
          // Send the complete message
          enqueueSnackbar("Your Order was placed ", { variant: "success" });
          placeorder();
          navigate("/home");
          emptyCart();
        } else {
          // Send a default message
          enqueueSnackbar("plz type your number to place order! ", {
            variant: "error",
          });
        }
      } else {
        // Send a default message
        enqueueSnackbar("plz type your address to place order! ", {
          variant: "error",
        });
      }
    } else {
      enqueueSnackbar("Please fill the form completely.", { variant: "error" });
    }
  };
  const {
    items,
    cartTotal,

    emptyCart,
  } = useCart();

  const [user1, setuser1] = useState({});

  const handeleChange = (e) => {
    const { name, value } = e.target;

    setuser1({
      ...user1,
      [name]: value,
    });
  };
  const placeorder = () => {
    const orderData = {
      name: user1.name,
      mail: user1.mail,
      number: user1.number,
      address: user1.address,
      cartItems: items.map((item) => ({
        img: item.img,
        description: item.description,
        quantity: item.quantity,
        price: item.quantity * item.price,
      })),
    };

    axios.post("http://localhost:9002/checkout", orderData);
  };
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // const handleClickVariant = (variant) => () => {
  //   navigate("/order")
  //   emptyCart()
  //   // variant could be success, error, warning, info, or default
  //   enqueueSnackbar("Your order is Placed!", { variant });
  // };
  // const order=()=>{
  //   return <Box><Typography>hello</Typography></Box>
  // }  const [user, setUser] = useState(null);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("MyUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const updaterUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user));
    setUser(user);
  };
  const loginfirst = () => {
    enqueueSnackbar("Please login first.", { variant: "error" });
    navigate("/login");
  };
  return (
    <React.Fragment>
      {user && user._id ? (
        <Container updaterUser={updaterUser}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} xs={12}>
              <Typography
                sx={{ mt: 15, fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Billing Details 📰 :
              </Typography>
              <TextField
                name="name"
                value={user.name}
                onChange={handeleChange}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{ mt: 2, width: { lg: "53ch", xs: "41ch" } }}
              />
              <Typography sx={{ display: "flex" }}>
                {" "}
                <TextField
                  name="address"
                  value={user.address}
                  onChange={handeleChange}
                  sx={{
                    mt: 4,
                    mb: 2,
                    width: { xs: "19ch", md: "22ch", lg: "25ch" },
                  }}
                  id="outlined-basic"
                  label=" Address"
                  variant="outlined"
                />
                <TextField
                  name="number"
                  value={user.number}
                  onChange={handeleChange}
                  sx={{
                    mt: 4,
                    ml: 2,
                    mb: 2,
                    width: { xs: "19ch", md: "22ch", lg: "25ch" },
                  }}
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                />
              </Typography>
              <TextField
                name="mail"
                value={user.mail}
                onChange={handeleChange}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ mt: 2, width: { lg: "53ch", xs: "41ch" } }}
              />

              <Typography
                sx={{ mt: 5, fontSize: "1.5rem", fontWeight: "bold" }}
              >
                {" "}
                Payment Method:
              </Typography>
              <Box sx={{ display: "flex", mt: 4 }}>
                <Checkbox></Checkbox>
                <Box
                  component="img"
                  src="esewa.png"
                  maxWidth="150px"
                  sx={{ cursor: "pointer" }}
                />
                <Checkbox></Checkbox>
                <Box
                  component="img"
                  src="khalti.png"
                  maxWidth="150px"
                  sx={{ cursor: "pointer", ml: 2 }}
                />
              </Box>
              <Checkbox sx={{ mt: -20 }}></Checkbox>

              <Box
                component="img"
                src="ips.png"
                maxWidth="150px"
                sx={{ cursor: "pointer", mt: 2 }}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Box
                boxShadow={24}
                sx={{ mt: { lg: 15, xs: 2 }, paddingBottom: 2 }}
              >
                <Typography
                  sx={{
                    paddingLeft: "30px",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    mb: 4,
                  }}
                >
                  Cart Summary{" "}
                  <AddShoppingCartIcon
                    sx={{ marginTop: "auto", paddingTop: 5 }}
                  />{" "}
                  <Link to="/menu">
                    {" "}
                    <span style={{ fontSize: "1.2rem" }}>(Edit)</span>
                  </Link>
                </Typography>
                {items.map((item, index) => {
                  return (
                    <Box
                      display="flex"
                      minHeight={95}
                      alignItems="center"
                      key={index}
                      sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        ml: 3,
                        maxWidth: { lg: 500, md: 450, xs: 350 },
                      }}
                    >
                      <Box component="img" src={item.img} maxWidth={80} />
                      <Typography sx={{ marginLeft: "auto" }}>
                        {item.description}
                      </Typography>
                      <Typography sx={{ marginLeft: "auto" }}>
                        {item.quantity} X Rs {item.price}
                      </Typography>
                      <Typography sx={{ marginLeft: "auto" }}>
                        RS. {item.price * item.quantity}
                      </Typography>
                    </Box>
                  );
                })}{" "}
                <Typography
                  sx={{
                    textAlign: "center",
                    mt: 2,
                    paddingBottom: 1,
                    fontSize: "1.2rem",
                  }}
                >
                  Delivery Charge(🚲): {cartTotal / 100 + 100}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",

                    paddingBottom: 2,
                    fontSize: "1.2rem",
                  }}
                >
                  Sub Total:Rs {cartTotal / 100 + 100 + cartTotal}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            sx={{
              mt: 5,
              fontSize: "1.1rem",
              cursor: "pointer",
              width: { lg: "50ch", xs: "40ch" },
              bgcolor: "green",
              color: "white",
              textTransform: "none",
              padding: "10px 10px 5px 00px",
              ":hover": {
                cursor: "pointer",
                transform: "scale(1.05)",
                bgcolor: "green",
                color: "white",
                transition: "0.3s",
                textTransform: "none",
              },
            }}
          >
            Place Order
          </Button>
        </Container>
      ) : (
        <Typography sx={{ mt: 20, textAlign: "center", fontSize: "1.3rem" }}>
          Please Login First <Link to="/login"> Click here</Link>{" "}
        </Typography>
      )}
    </React.Fragment>
  );
};

export default Checkout;
