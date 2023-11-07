import React from 'react'
import {
    
    Paper,
    Typography,
   
    Card,
    
    CardActionArea,
    CardMedia,
    CardContent,
  
  } from "@mui/material";
const Cards = (props) => {
  return (
 <React.Fragment> 

     {" "}
     <Paper
       elevation={24}
       sx={{
         maxWidth: 280,
         borderRadius: "10px 50px 10px",
         bgcolor: "transparent",
        
       }}
     >
       {" "}
       <Card
         sx={{
           maxWidth: 280,
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
             height="280"
             image={props.image}
             alt="green iguana"
           />
           <CardContent>
             <Typography
               gutterBottom
               variant="h5"
               component="div"
               sx={{ textAlign: "center" }}
             >
               {props.text}
             </Typography>
             <Typography
               variant="body2"
               color="text.secondary"
               textAlign={"center"}
               sx={{ mb: 1 }}
             >
               {props.discription}
             </Typography>
            
            
        
           </CardContent>
         </CardActionArea>
       </Card>
     </Paper>


</React.Fragment>
  )
}

export default Cards
