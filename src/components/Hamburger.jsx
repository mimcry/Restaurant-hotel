import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  IconButton,useMediaQuery,useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
function Hamburger() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const list =["Home","About us","Contact us","Menu","Room"];
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}  >
        <List >
         {list.map((page,index)=>(
           <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
           <ListItemIcon>
             <Link to={page} style={{ textDecoration: 'none' }}><ListItemText  sx={{color:"#a33307",textDecoration:"none"}}>{page}</ListItemText></Link>
           </ListItemIcon>
         </ListItemButton>
         ))}
        </List>
      </Drawer>
      <IconButton sx={{marginLeft:"auto",color:"#a33307"}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>
    </React.Fragment>
  );
}

export default Hamburger;
