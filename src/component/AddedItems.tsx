import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    ListItem,
    ListItemText,
    Typography
} from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import BorderColorIcon from '@mui/icons-material/BorderColor'

export default function AddedItems({ itemlist, setItemlist,setEdit}: any) {
    const [open, setOpen] = useState(false)
    const [selectedId, setSelectedId] = useState<number | null>(null)
const existedItem=itemlist?.find((list:any)=>list.id===selectedId)

    const Warning = (id: number) => {
        setSelectedId(id)
        setOpen(true)
    }
   const handelCancel=()=>{
    setOpen(false)
   }

    const handleAgree = () => {
        setItemlist((prev: any[]) =>
            prev.filter(item => item.id !== selectedId)
        )
        handelCancel()
        setSelectedId(null)
    }


    const handleDisagree = () => {
      handelCancel()
        setSelectedId(null)
    }

    return (
        <>
            <Box sx={{ mb: 1, height: 40, width: "100%", bgcolor: "#9b7744ff", borderRadius: 2 }}>
                <Typography variant="h6" sx={{ color: "#554110ff", fontWeight: "bold",display:"flex",justifyContent:"center",alignContent:"center" }}>
                    Item List
                </Typography>

                <Box
                    sx={{
                        height: 355,
                        mt: 1,
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        overflow: "auto",
                        scrollbarWidth: "none",
                        '&::-webkit-scrollbar': { display: 'none' }
                    }}
                >
                    {itemlist?.map((list: any) => (
                        <ListItem
                            key={list.id}
                            sx={{ p: 2, bgcolor: "#a58354ff", borderRadius: 2, display: "flex" }}
                        >
                            <ListItemText sx={{ color: "white", fontWeight: "bold" }}>
                                {list.name}: {list.count}
                            </ListItemText>
                            <ListItemText sx={{ color: "white", fontWeight: "bold" }}>
                                ₹{list.price}
                            </ListItemText>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <IconButton onClick={() => Warning(list.id)}>
                                    <DeleteIcon sx={{ color: "#8e0e0eff" }} />
                                </IconButton>

                                <IconButton onClick={() => setEdit(list)}>
                                    <BorderColorIcon sx={{ color: "#444345ff", "&:hover": { color: "#0da229ff" } }} />
                                </IconButton>
                            </Box>
                        </ListItem>
                    ))}

                    <Dialog open={open} onClose={handelCancel}>
                        <DialogTitle>Delete Item?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to delete this{existedItem?.name}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDisagree}>disagree</Button>
                            <Button onClick={handleAgree} autoFocus>
                                agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Box>
        </>
    )
}
