import { Box, List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText, Button, Alert, Snackbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { food } from './ItemCards';
import { log } from 'node:console';

type setState=()=>void;
export default function SubitemCards({
  picked,
  count,
  setItemlist,
  setCount,
  itemlist,
  setEdit, editItem,
  setPicked
}
  : { picked: food | null, count: number, setItemlist: any, setCount: any, itemlist: any, setEdit: any, editItem: any,setPicked:any }) {

    const Sider = [
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
//HOOKS :
  const [checked, setChecked] = useState<string[]>([]);
    const [snack, setSnack] = useState<{
    open: boolean
    message: string
    severity: 'success' | 'info' | 'warning' | 'error'
  }>({
    open: false,
    message: '',
    severity: 'info',
  })

//FUNCTIONALITY:
  const handleToggle = (value: string) => {
    setChecked((prev: string[]) =>
      prev.includes(value)
        ? prev.filter((item: string) => item !== value) // remove
        : [...prev, value] // add
    );
  };

    const openSnack = (
    message: string,
    severity: 'success' | 'info' | 'warning' | 'error' = 'info'
  ) => {
    setSnack({ open: true, message, severity })
  }

  const closeSnack = () => {
    setSnack(prev => ({ ...prev, open: false }))
  }

  useEffect(() => {

    if (editItem) {
      setCount(editItem.count)
      setChecked(editItem.extra?.map((e: any) => e.info) || [])
      setPicked({id:editItem.id,name:editItem.name,price:editItem.price})

        openSnack('Editing item', 'info')
      
    }
  }, [editItem])

  const addItems = () => {

    if (!picked) {
      openSnack('Add item First','warning')
      return};

    const existedItem = itemlist?.find((list: any) => list.id === picked.id)
    console.log(existedItem);

    const SelecteSider = Sider.filter(s => checked.includes(s.info))

     if (editItem) {
      setItemlist((prev: food[]) =>
        prev.map(item =>
          item.id === picked.id
            ? { ...item,name:picked.id, count, extra: SelecteSider }
            : item
        )
      )
       setEdit(null)
      setChecked([])
      setCount(1)

           openSnack('Item updated successfully', 'success')

      return
    }


    if (existedItem) {
      openSnack('Item already added!', 'warning')
      return;
    }

    

    const FullItemList = {
      ...picked, count, extra: SelecteSider
    }
           
    setItemlist((prev: food[] | null) => [...(prev || []), FullItemList])

      setChecked([])
    setCount(1)
     openSnack('Item added successfully', 'success')

  }
  const clearRecord = () => {
    setItemlist(null)
    setChecked([])
    setCount(0)
     openSnack('Selection cleared', 'info')


  }
  
  return (
    <Box sx={{ height: "27%", width: "100%", display: "grid", gridTemplateColumns: "2fr 1fr", gap: .5 }}>

      <Box sx={{ p:1,height: "100%",width:"100%" ,bgcolor:"transparent", borderRadius: 3 }}>

        <List sx={{ width:"100%" }}>
          {
            Sider.map((value) => (
              <ListItem key={value.info} disablePadding >
                <ListItemButton sx={{ ":hover": { bgcolor: "#826018ff"  },
                 bgcolor: `${checked.includes(value.info) ? "#826018ff"  : "#b37838ff"}`,
                  mb: .2, borderRadius: 3 }} onClick={() => handleToggle(value.info)} dense>
                  <ListItemIcon>
                    <Checkbox checked={checked.includes(value.info)} />
                  </ListItemIcon>
                  <ListItemText primary={value.info}
                    sx={{
                      color: "#dacbe4ff",
                      "& .MuiFormControlLabel-label": {
                        fontSize: 20, fontWeight: "bold"
                      },
                    }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>



      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", m: 1, bgcolor:"transparent", borderRadius: 3, gap: 1 }}>

        <Button variant="contained" color="success"
          onClick={(e) => addItems()}
          sx={{ ml: 3, px: 3, py: 2.5, borderRadius: 4, fontSize: "20px" }}
        >   Add</Button>
        <Button variant="contained" color="error"
          sx={{ ml: 3, px: 3, py: 1.5, borderRadius: 4, fontSize: "20px" }}
          onClick={() => clearRecord()}
        >  Cancel</Button>
      </Box>
           <Snackbar
        open={snack.open}
        autoHideDuration={2500}
        onClose={closeSnack}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          severity={snack.severity}
          variant="filled"
          onClose={closeSnack}
          sx={{ width: '100%' }}
        >
          {snack.message}
        </Alert>
      </Snackbar>

    </Box>
  )
}


