import { useCart } from "react-use-cart";
import React,{useState} from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import {  useSnackbar } from "notistack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Cart = ({user}) => {const [cart, setCart] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    emptyCart();
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("Your Cart is Cleared!", { variant });
  };
  const handleClickVariant2 = (variant,id,description) => () => {
    removeItem(id)
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${description} was deleted from the cart.`, { variant });
  };
  const navigate = useNavigate();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <Typography>
        <Typography
          sx={{
            mt: 15,
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Your Cart Is Empty
        </Typography>{" "}
        <Link to="/menu">
          {" "}
          <Typography
            sx={{
              mt: 2,
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            Add Item <AddShoppingCartIcon></AddShoppingCartIcon>
          </Typography>
        </Link>
      </Typography>
    );
  return (
    <>
      {" "}
      <React.Fragment>
        {" "}
        <Container>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}
          >
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

            <Badge
              sx={{ mt: 16, marginLeft: "auto" }}
              color="error"
              badgeContent={totalUniqueItems}
            >
              {" "}
              <AddShoppingCartIcon
                sx={{ marginLeft: "auto", fontSize: "1.8rem" }}
              />
            </Badge>
          </Box>

          <Typography sx={{ fontSize: "1.5rem", mt: 4 }}>
            Ordered Items
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "0.9rem", mb: 4 }}>
            You have order ({totalUniqueItems}) Items
          </Typography>
          {items.map((item, index) => {
            return (
              <Box
                display="flex"
                maxWidth={800}
                minHeight={90}
                alignItems="center"
                key={index}
                sx={{ borderBottom: 1, borderColor: "divider" }}
              >
                <Box component="img" src={item.img} maxWidth={100} />
                <Typography sx={{ marginLeft: "auto" }}>
                  {item.description}
                </Typography>
                <Typography sx={{ marginLeft: "auto" }}>
                  Rs {item.price}
                </Typography>
                <Typography sx={{ marginLeft: "auto" }}>
                  Quantity({item.quantity})
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "auto",
                    cursor: "pointer",
                    display: "flex",
                  }}
                >
                  <Typography sx={{ mr: 1 }}>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                  </Typography>
                  {item.quantity}
                  <Typography sx={{ ml: 1 }}>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </Typography>
                </Typography>
                <DeleteIcon  sx={{cursor:"pointer",ml:"auto",color:"red"}} onClick={handleClickVariant2("error",item.id,item.description)}/>
                
              </Box>
            );
          })}

          <Box sx={{ marginLeft: "auto" }} maxWidth={800}>
            {" "}
            <Typography sx={{ mt: 2 }}>Total Amount: Rs {cartTotal}</Typography>
            <Button
              onClick={handleClickVariant("error")}
              sx={{
                bgcolor: "red",
                color: "white",
                mr: "20px",

                ":hover": {
                  bgcolor: "red",
                  color: "white",
                  transform: "scale(1.08)",
                },
                mt: 2,
                textTransform: "none",
                fontSize: "1.1rem",
              }}
            >
              Clear Cart
            </Button>
            
            
              <Button
                onClick={() => navigate("/checkout")}
                sx={{
                  bgcolor: "green",
                  color: "white",

                  ":hover": {
                    bgcolor: "green",
                    color: "white",
                    transform: "scale(1.08)",
                  },
                  mt: 2,
                  textTransform: "none",
                  fontSize: "1.1rem",
                }}
              >
                Check Out
              </Button>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default Cart;
