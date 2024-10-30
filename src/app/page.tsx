"use client";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import Header from "./Header";
import About from './About';

// 色の設定
const theme = createTheme({
    palette: {
        primary: {
            main: '#00a3af'
        },
        secondary: {
            main: '#b9d08b'
        }
    }
});

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Typography variant='h1' className='mynameTitle' sx={{ userSelect: 'none', position: 'absolute', top: '10vh', left: '5vw' }}>Rin Takagi Portfolio</Typography>
            <About />
        </ThemeProvider>
    );
}
