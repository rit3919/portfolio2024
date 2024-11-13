import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

const DialogTemplate: React.FC = () => {
    const [open, setOpen] = React.useState<Boolean>(false);

    const OpenHandler = () => {
        setOpen(true);
    }
    const CloseHandler = () => {
        setOpen(false);
    }

    return (
        <>

        </>
    );
};

export default DialogTemplate