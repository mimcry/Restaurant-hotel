import React from 'react'
import {
  
    Paper,
    Typography,

    Card,
    
    CardActionArea,
    CardMedia,
    CardContent,
    Button,

  } from "@mui/material";
  import { useCart } from 'react-use-cart';
  import { useSnackbar } from 'notistack';
const Cardforpackage = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant,item,description) => () => {
    
     addItem(item)
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${description} was added to the cart.`, { variant });
  };
  const {addItem}= useCart();
  return (
 <React.Fragment>

<Paper
       elevation={24}
       sx={{
         maxWidth:300,
         borderRadius: "10px 50px 10px",
         bgcolor: "transparent",
        
       }}
     >
       {" "}
       <Card
         sx={{
           maxWidth: 350,
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
             height="300"
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
               variant="body2"
               color="text.secondary"
               sx={{ mb: 1,textAlign:"center" }}
             >
               {props.text}
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
                              ml: "45px",
                            }}
                          >
                           Book This Table
                          </Button>
        
           </CardContent>
         </CardActionArea>
       </Card>
     </Paper>

 </React.Fragment>
  )
}

export default Cardforpackage
