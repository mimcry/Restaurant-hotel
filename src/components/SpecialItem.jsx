import React from 'react'
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
  import { useCart } from 'react-use-cart';
const SpecialItem = (props) => {
    const {addItem}=useCart();
  return (

                
                  <Paper
                    elevation={24}
                    sx={{alignItems:"center",
                      maxWidth: 250,
                      borderRadius: "10px 50px 10px",
                      bgcolor: "transparent",
                      ml: { xs: "50px", lg: "5px" },
                    }}
                  >
                    {" "}
                    <Card
                      sx={{
                        maxWidth: 250,
                        bgcolor: "transparent",
                        mb: 4,
                        borderRadius: " 10px 50px 10px",
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          sx={{
                            "&:hover": {
                              transform: "scale(1.09)",
                              opacity: [0.9, 0.8, 1.7],
                            },
                          }}
                          component="img"
                          height="160"
                          image={props.img}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ textAlign: "center" }}
                          >  {props.description}
                           
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                            textAlign="center"
                          >
                           {props.text}
                          </Typography>
                          <Button
                            sx={{
                              color: "red",
                              fontSize: "1.2rem",
                              textDecoration: "none",
                              textTransform: "none",
                              bgcolor: "transparent",
                              "&:hover": {
                                color: "gray",
                                bgcolor: "transparent",
                              },
                              ml: 5,
                            }}
                            href=""
                           
                          >
                            View details
                          </Button>{" "}
                          <Typography
                            sx={{
                              color: "red",
                              textDecoration: "none",
                              marginRight: "40px",
                              mt: 1,
                              mb: 1,
                              ml: 6,
                            }}
                          >
                            {" "}
                            <span
                              style={{
                                color: "gray",
                                marginRight: "20px",
                                textDecoration: "line-through",
                              }}
                            >RS {props.deduction}
                             
                            </span>
                            Rs {props.price}
                          </Typography>
                          <Button
                             onClick={()=>addItem(props.item)}
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
                              ml: "70px",
                            }}
                          >
                            Add
                          </Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Paper>
            
  )
}

export default SpecialItem
