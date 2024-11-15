import React from "react";
import { Button, DialogTitle, DialogContent, } from '@mui/material';
import Dialog from "@mui/material/Dialog";
import Typography from '@mui/material/Typography';



interface DialogProps {
    open: boolean,
    title: string,
    onClose: () => void,
    body: string
}
const DialogTemplate: React.FC<DialogProps> = ({ open, title, onClose, body }) => {


    return (
        <>
            <Button sx={{ width: '300px', height: '100px' }} variant="contained" onClick={OpenHandler}>

                <Typography sx={{ fontSize: '2rem', color: '#000000', textTransform: 'none' }} >{title}</Typography>

            </Button>
            <Dialog open={open} onClose={CloseHandler} maxWidth='xl' >
                <DialogTitle sx={{ fontSize: '2rem' }}>{title}</DialogTitle>
                <DialogContent>
                    {body}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DialogTemplate