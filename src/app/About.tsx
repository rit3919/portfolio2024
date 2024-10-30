import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

const About: React.FC = () => {
    return (
        <>
            <Typography variant="h1" sx={{ display: 'block', textAlign: 'center' }}>About</Typography >
            <Card>
                <CardContent>
                    <Box className="Name">
                        <Typography variant='h4' sx={{ textAlign: 'center' }}>自己紹介</Typography>
                        <Typography>新しいことに目がない人間です．ゲーム制作やサーバー構築などエンジニア的な技術を中心に楽しいと思えることを自由にしています．Linuxやネットワーク周りを整備することが楽しく，仮想サーバやコンテナなどのインフラの勉強を始めました．</Typography>
                    </Box>
                    <Box className="Belong">
                        <Typography variant='h4' sx={{ textAlign: 'center' }}>経歴</Typography>
                        <Typography>- 香川高等専門学校 電気情報工学科</Typography>
                        <Typography>- 島根大学 総合理工学部 知能情報デザイン</Typography>
                        <Typography>- 島根大学 大学院 自然科学研究科</Typography>
                    </Box>
                    <Box className="background">
                        <Typography variant='h4' sx={{ textAlign: 'center' }}>資格</Typography>
                        <Typography>- 基本情報技術者試験</Typography>
                        <Typography>- TOEIC 620点</Typography>
                    </Box>

                </CardContent>

            </Card>
        </>

    );
};

export default About;
