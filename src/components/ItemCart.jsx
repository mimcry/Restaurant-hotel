import React from 'react'
import { Box,Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
const ItemCart = () => {
  return (
 <>
<Box display="flex" maxWidth={800} alignItems="center"><Box component="img"
src="burger.png"
maxWidth={100}/>
<Typography sx={{marginLeft:"auto"}}>Amount</Typography>
<Typography sx={{marginLeft:"auto"}}>Item</Typography>
<Typography sx={{marginLeft:"auto",cursor:"pointer"}}><button>+</button>
<button>-</button></Typography>
<Typography sx={{marginLeft:"auto",cursor:"pointer"}}><DeleteIcon/></Typography>

</Box>


 </>
  )
}

export default ItemCart
