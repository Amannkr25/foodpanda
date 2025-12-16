import { Box, AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import React, { use, useState } from 'react'
import BillCards from './BillCards'
import ItemCards from './ItemCards'
import MenuIcon from '@mui/icons-material/Menu'
import { food } from './ItemCards'
import { log } from 'console'

export default function Index() {

  
  const[itemlist,setitemlist]=useState<food | null>(null)
  const [edit,setEdit]=useState<food | null>(null)

  console.log(itemlist);
  

  

      
  return (
     <Box sx={{bgcolor:"#e8cfecff",width:"100vw",height:"100vh", display:"grid", gridTemplateRows:"1fr 10fr",gap:1}}>

   <Box sx={{ flexGrow: 1,m:.5,height:"100%" }}>
      <AppBar position="static" sx={{bgcolor:"#8e6588ff",borderRadius:3}}>
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FoodPanda
          </Typography>
          <Button color="inherit">Login</Button>
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>

    <Box sx={{height:"100%",display:"grid",gridTemplateColumns:"7fr 3fr",gap:.5}}>
      <Box sx={{height:"100%", width:"100%",bgcolor:"#beb5daff", borderRadius:3}} ><ItemCards  setItemlist={setitemlist} itemlist={itemlist} setEdit={setEdit} editItem={edit}/></Box>
      <Box sx={{height:"100%",width:"100%",bgcolor:"#a994c1ff",borderRadius:3}}><BillCards setItemlist={setitemlist}  itemlist={itemlist}  setEdit={setEdit}/></Box>

    </Box>

   </Box>
  )
}
