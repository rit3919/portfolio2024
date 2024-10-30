import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import Link from 'next/link';

const HeaderButton = {
    fontSize: '2rem',
    fontFamily: 'Arial',
    textDecorationLine: 'underline',
    textTransform: 'none',//全部大文字にするのを避ける．
    margin: '0 5px 0 0'
}

// function ScrollButton(props) {
//     document.getElementById(props.wrap)[0]
// }
// Header
function Header() {

    useEffect(() => {

    });
    return (
        <AppBar position="static" color="primary">
            <Toolbar>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    Rin Takagi Portfolio
                </Typography>

                <Button color="inherit" sx={HeaderButton}>About</Button>
                <Button color="inherit" sx={HeaderButton}>Skill</Button>
                <Button color="inherit" sx={HeaderButton}>Works</Button>

            </Toolbar>
        </AppBar >
    );
};

export default Header;
