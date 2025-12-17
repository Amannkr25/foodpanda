"use client"
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment';
import React, { useEffect, useState } from 'react'
import SubitemCards from './SubitemCards';

export type food = {
  id:string,
  name: string,
  price: number
}

export default function ItemCards({setItemlist,itemlist,setEdit,editItem}
  :{setItemlist:any,itemlist:any,setEdit:any,editItem:any}) {

  const [count, setCount] = useState<number>(0)
  const [picked, setPicked] = useState<food | null>(null)

  const storeItem=(item:any)=>{

    setPicked(item);
    setCount(1)
  }

useEffect(()=>{console.log("picked",picked)},[picked])
  
  const fooditems: food[] = [
    {
      id:"Bu",
      name: "Burger",
      price: 40
    },
    {
      id:"Za",
      name: "Pizza",
      price: 140
    },
    {
      id:"Eg",
      name: "Egg Roll",
      price: 45
    },
    {
      id:"San",
      name: "Sandwitch",
      price: 80
    },
    {
      id:"Ic",
      name: "IceCream",
      price: 39                                                                                                                        
    },
    {
      id:"Co",
      name: "Cofee",
      price: 20
    },
    {
      id:"T",
      name: "Tea",
      price: 10
    },
 ]
return (
    <>
      <Box sx={{height:"fit-c", p: 1, display: "flex", justifyContent: "space-between", flexFlow: "wrap", gap: 1 }}>
        {
          fooditems?.map((item, key) => <Button key={key} variant="contained"
            sx={{
              p: 2, fontSize: "30px", height: "100px", width: "333px",
              bgcolor: `${picked?.name === item.name ? "#4a2b61ff" : "#8861a4ff"}`, borderRadius: 5
            }}

            onClick={(e) => storeItem(item)}

          >{item.name}</Button>)
        }
      </Box> 

      <Box>
        <FormControl sx={{ p: 1, px: 2, width: "60%", fontSize: 40 }}>
          <FormLabel sx={{ mb: 2, fontSize: 20 }} id="demo-row-radio-buttons-group-label">No.of items:</FormLabel>
          <RadioGroup
          value={count}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{
              display: "flex", width: "100%", justifyContent: "flex-start", fontSize: 40, gap: 6
            }}
            onChange={(_, newValue) => setCount(Number(newValue))}

          >
            {/* const arr = [...Array(10)].map((_, i) => i + 1); */}
            {[...Array(4)].map((_, i) =>
              <FormControlLabel key={i}
                sx={{
                  ml: 0,
                  "& .MuiFormControlLabel-label": {
                    fontSize: 20, color: "white", // change as needed
                  }, border: "solid #51405dff", px: 2, borderRadius: 4, bgcolor: `${count === i + 1 ? "#4e3561ff" : "#996fb8ff"}`

                }}
                value={(i + 1)}
                control={<Radio sx={{ display: "none" }} />}
                label={i + 1}
              />)}

          </RadioGroup>
        </FormControl>
      </Box>

      <SubitemCards setItemlist={setItemlist} itemlist={itemlist} picked={picked} count={count} setCount={setCount} setEdit={setEdit} editItem={editItem} setPicked={setPicked}/>
     
    </>

  )
}
