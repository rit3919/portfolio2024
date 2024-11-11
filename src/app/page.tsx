"use client";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import { autocompleteClasses, Box, Typography } from "@mui/material";
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
            <Box >
                <Typography variant='h1' className='mynameTitle' sx={{ userSelect: 'none', position: 'absolute', top: '10vh' }}>Rin Takagi Portfolio</Typography>
            </Box>
            <About />
            <Skills />
        </ThemeProvider>
    );
}
