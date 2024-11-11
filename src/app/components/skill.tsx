import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

const skills = [
    { name: 'Python', level: '研究で使用', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C#', level: 'UnityC#として使用', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'JavaScript', level: 'このポートフォリオの作成に使用', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'C++', level: '', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Next.js', level: '', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'React', level: '', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },

];

const Skills: React.FC = () => {
    return (
        <Box sx={{ padding: '0 0 10vh 0' }}>
            <Typography variant="h1" sx={{ display: 'block', textAlign: 'center', userSelect: 'none' }}>
                Skill
            </Typography>
            {/* <Card sx={{ position: 'absolute', left: '0', right: '0', margin: 'auto', width: '90vw' }}>
                <CardContent style={{ height: '100%', display: 'grid', placeItems: 'center' }}> */}
            <Grid container spacing={4} justifyContent="center" sx={{ position: 'relative', left: '0', right: '0', margin: 'auto' }}>
                {skills.map((skill, index) => (
                    <Grid key={index}>
                        <Card sx={{ width: '210px', height: '100px' }}>
                            <CardContent>
                                <Grid container spacing={4}>
                                    <Grid size={6}>
                                        <Typography variant="h6" component="div">
                                            {skill.name}
                                        </Typography>
                                    </Grid>
                                    <Grid size={6}>
                                        <img src={skill.image} style={{ width: '70px' }} />
                                    </Grid>

                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                ))
                }
            </Grid >
            {/* </CardContent >
            </Card > */}
        </Box >
    );
};

export default Skills;
