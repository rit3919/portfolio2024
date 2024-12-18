"use client";
import { useEffect, useState } from 'react';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import Header from "./components/Header";
import About from './components/About';
import Skills from './components/skill';
import Works from './components/works';

import basePath from "../../next.config.mjs";
const BASE_PATH = basePath ? basePath : "";


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

    //ダークモードのロゴ変更
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const darkmode = window.matchMedia("(prefers-color-scheme: dark)");

        const changeDarkModeImg = (event: MediaQueryListEvent) => {
            setIsDark(event.matches);
        };
        setIsDark(darkmode.matches);

        darkmode.addEventListener('change', changeDarkModeImg)
        return () => {
            darkmode.removeEventListener('change', changeDarkModeImg);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Box sx={{ padding: '0 0 10vh 0', position: 'relative', height: '100vh', top: '30vh' }}>
                <Box sx={{ position: 'relative', left: '3vw' }}>
                    <Image src={
                        isDark ? `${BASE_PATH}/image/Logo/Rit_Logo_dark.png` : `${BASE_PATH}/image/Logo/Rit_Logo_light.png`
                    } alt={isDark ? 'Dark Logo' : 'Light Logo'} width={300} height={150} style={{ pointerEvents: 'none', userSelect: 'none' }} />
                </Box>
                <Typography variant='h1' sx={{ userSelect: 'none', position: 'relative', left: '3vw' }}>Rin Takagi Portfolio</Typography>
            </Box>
            <About />
            <Skills />
            <Works />
            <footer className='Copyright'>

                <Typography sx={{ display: 'block', textAlign: 'center', }}>&copy;2022-2025 Rin Takagi All rights reserved.</Typography>


            </footer>
        </ThemeProvider >
    );
}


