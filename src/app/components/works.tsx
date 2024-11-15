import React from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import WorkContent from './DialogTemplate';
import worksList from './worksList';//作品一覧


const Works: React.FC = () => {
    
    return (
        <Box className="Works" sx={{ padding: '0 0 20vh 0' }}>
            <Typography variant="h1" sx={{ display: 'block', textAlign: 'center', userSelect: 'none', padding: '0 0 2vh 0' }}>
                Works
            </Typography>
            {/* <Card sx={{ position: 'absolute', left: '0', right: '0', margin: 'auto', width: '90vw' }}>
                <CardContent style={{ height: '100%', display: 'grid', placeItems: 'center' }}> */}
            <Grid container spacing={4} justifyContent="center" sx={{ position: 'relative', left: '0', right: '0', margin: 'auto' }}>
                {worksList.map((work, index) => (
                    <Grid key={index}>
                        <WorkContent title={work.name}>
                            {work.body}
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
