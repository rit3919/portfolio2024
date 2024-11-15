import { Box, Typography } from '@mui/material';

const works = [
    {
        name: 'PreSkate -仮想スケート体験システム-',
        body: (
            <Box>
                <Typography variant="body1" sx={{ padding: '0 0 2vh 0' }}>
                    技術:
                </Typography>
                <Typography variant="body1" sx={{ padding: '0 0 2vh 0' }}>
                    このシステムでは，Unityを用いて作成しました．
                </Typography>
                <Typography variant="body1" sx={{ padding: '0 0 2vh 0' }}>
                    また，スケートをする際の動きを検知するために，Kinectを使用しています．
                </Typography>
                <Typography variant="body1" sx={{ padding: '0 0 2vh 0' }}>
                    このシステムは，スケートをしたことがない人でも，スケートを体験できるように作成しました．
                </Typography>
            </Box>
        )
    },
    { name: 'LocationDraw', level: 'UnityC#として使用', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Regeno', level: 'このポートフォリオの作成に使用', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
];

export default works;