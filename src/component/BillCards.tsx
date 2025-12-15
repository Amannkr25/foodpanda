import { Box, Button, Input, TextField, Typography } from '@mui/material'
import React from 'react'
import AddedItems from './AddedItems'
import { count, log } from 'console';
import { useMemo } from 'react';

export default function BillCards({ itemlist ,setItemlist,setEditId}: any) {



  const totalPrice = useMemo(() => {

    return itemlist?.reduce((total: any, item: any) => {


      const qty = item.count ?? 1;


      const sidersTotal =item.extra?.reduce((s: any, i: any) => s + i.price, 0) ?? 0;

        return total + (item.price + sidersTotal) * qty;

    }, 0) ?? 0;

  }, [itemlist]);
  console.log(totalPrice);



  return (
    <Box sx={{ p: 1, height: "100%", display: "grid", gridTemplateRows: "3fr 7fr", gap: 1 }}>
      <Box sx={{
        p: 1, height: "100%", width: "100%", bgcolor: "white",
        borderRadius: 3
      }}>

        <Typography variant='h6' sx={{ fontWeight: "bold", ml: 2, color: "#b991c8ff" }}>Total Bill</Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 500, borderRadius: 4 }}>

          <Box
            sx={{
              height: 120,
              width:248,
              borderRadius: 4,
              bgcolor: "#d2aac0ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 3
            }}
          >
            <Typography variant="h5" fontWeight="bold" color='white'sx={{p:2,height:"full"}}>
              ₹ {totalPrice}
            </Typography>
          </Box>

          <Button variant="contained" sx={{ height: 60, borderRadius: 4 }}>Print Bill</Button>
        </Box>

      </Box  >

      <Box sx={{ height: "100%", bgcolor: "#c2acd1ff", borderRadius: 3, p: 1, display: "flex", flexDirection: "column" }}>

        <AddedItems itemlist={itemlist} setItemlist={setItemlist} setEditId={setEditId} />

      </Box>

    </Box>
  )
}
