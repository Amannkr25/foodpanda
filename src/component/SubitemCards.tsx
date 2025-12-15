import { Box, List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText, Button } from '@mui/material'
import React, { useState } from 'react'
import { food } from './ItemCards';
import { log } from 'node:console';

export default function SubitemCards({picked,count,setItemlist,setCount,itemlist}:{picked:food | null,count:number,setItemlist:any,setCount:any,itemlist:any}) {

  const [checked, setChecked] = useState<string[]>([]);


  const handleToggle = (value: string) => {
    setChecked((prev: string[]) =>
      prev.includes(value)
        ? prev.filter((item: string) => item !== value) // remove
        : [...prev, value] // add
    );
  };

  const addItems=( )=>{
     
     if (!picked) return;

     const existedItem=itemlist?.find((list:any)=>list.id===picked.id)
     console.log(existedItem);
     

     if(existedItem)
     {
      alert("Alredy added!")
      return;
     }

     const SelecteSider=Sider.filter(s=>checked.includes(s.info))

     const FullItemList={
      ...picked,count,extra:SelecteSider
     }

     setItemlist((prev:food[]|null)=>[...(prev || []),FullItemList])
    
  }
  const clearRecord=()=>{
    setItemlist(null)
    setChecked([])
    setCount(0)
   
    
  }
  const Sider=[
              {
                info: "Extra Cheese",
                price: 20
              }, {
                info: "Packing",
                price: 10
              }, {
                info: "Extra Dip",
                price: 25

              }]
  return (
    <Box sx={{ height: "27%", width: "100%", display: "grid", gridTemplateColumns: "2fr 1fr", gap: .5 }}>

      <Box sx={{ height: "100%", bgcolor: "#beb5daff", borderRadius: 3 }}>

        <List sx={{ width: "100%", ml: 1 }}>
          {
            Sider.map((value) => (
                <ListItem key={value.info} disablePadding >
                  <ListItemButton sx={{":hover":{bgcolor:"#4a2b61ff"}, width: "100%", bgcolor: `${checked.includes(value.info)?"#4a2b61ff": "#996fb8ff"}`, mb: .2, borderRadius: 3 }} onClick={() => handleToggle(value.info)} dense>
                    <ListItemIcon>
                      <Checkbox checked={checked.includes(value.info)}  />
                    </ListItemIcon>
                    <ListItemText primary={value.info}
                     sx={{color:"#dacbe4ff", 
                      "& .MuiFormControlLabel-label": {
                    fontSize: 20 ,fontWeight:"bold"
                  },
                     }} />
                  </ListItemButton>
                </ListItem>
              ))}
        </List>



      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", m: 1, bgcolor: "#beb5daff", borderRadius: 3, gap: 1 }}>

        <Button variant="contained" color="success"
             onClick={(e)=>addItems()}
          sx={{ ml: 3, px: 3, py: 2.5, borderRadius: 4, fontSize: "20px" }}
        >   Add</Button>
        <Button variant="contained" color="error"
          sx={{ ml: 3, px: 3, py: 1.5, borderRadius: 4, fontSize: "20px" }}
          onClick={()=>clearRecord()}
        >  Cancel</Button>
      </Box>

    </Box>
  )
}


