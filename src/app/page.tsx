"use client";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";
import Header from "./components/Header";
import About from './components/About';
import Skills from './components/skill';

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
            <Box sx={{ padding: '0 0 10vh 0', position: 'relative', height: '100vh', top: '30vh' }}>
                <Typography variant='h1' sx={{ userSelect: 'none', position: 'absolute', left: '3vw' }}>Rin Takagi Portfolio</Typography>
            </Box>
            <About />
            <Skills />
        </ThemeProvider >
    );
}
