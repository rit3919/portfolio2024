import React from "react";
import { Button, DialogTitle, DialogContent, } from '@mui/material';
import Dialog from "@mui/material/Dialog";
import Typography from '@mui/material/Typography';

interface DialogProps {
    title: string,
    color?: "primary" | "secondary" | undefined,
    children: React.ReactNode,//React18から明示的に指定する必要がある
}

const DialogTemplate: React.FC<DialogProps> = ({ title, color, children }) => {
    if (!color) {
        color = 'secondary';
    }
    const [open, setOpen] = React.useState(false);

    const OpenHandler = () => {
        setOpen(true);
    }
    const CloseHandler = () => {
        setOpen(false);
    }

    return (
        <>
            <Button sx={{ width: '300px', height: '100px',textTransform:'none' }} variant="contained" onClick={OpenHandler} color={color}>
                <Typography variant="h6" >{title}</Typography>
            </Button>
            <Dialog open={open} onClose={CloseHandler} maxWidth='xl' >
                <DialogTitle sx={{ fontSize: '2rem' }}>{title}</DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DialogTemplate