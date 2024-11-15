import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import WorkContent from './DialogTemplate';

const works = [
    { name: 'PreSkate -仮想スケート体験システム-', level: '研究で使用', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'LocationDraw', level: 'UnityC#として使用', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Regeno', level: 'このポートフォリオの作成に使用', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
];

const Works: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const OpenHandler = () => {
        setOpen(true);
    }
    const CloseHandler = () => {
        setOpen(false);
    }
    return (
        <Box className="Works" sx={{ padding: '0 0 20vh 0' }}>
            <Typography variant="h1" sx={{ display: 'block', textAlign: 'center', userSelect: 'none', padding: '0 0 2vh 0' }}>
                Works
            </Typography>
            {/* <Card sx={{ position: 'absolute', left: '0', right: '0', margin: 'auto', width: '90vw' }}>
                <CardContent style={{ height: '100%', display: 'grid', placeItems: 'center' }}> */}
            <Grid container spacing={4} justifyContent="center" sx={{ position: 'relative', left: '0', right: '0', margin: 'auto' }}>
                {works.map((work, index) => (
                    <Grid key={index}>
                        <WorkContent title={work.name}>
                            {work.level}
                        </WorkContent>
                    </Grid>
                ))
                }
            </Grid >
            {/* </CardContent >
            </Card > */}
        </Box >
    );
};

export default Works;
