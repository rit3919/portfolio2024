import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import nextConfig from "../../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

const works = [
    {
        name: 'PreSkate -仮想スケート体験システム-',
        body: (
            <Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        概要:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        高専時代に参加した第32回高専プログラミングコンテスト課題部門での作品です。HMDをかぶり、スケートを体験できるプロダクトです。コンテストの本戦に進むことができ、敢闘賞を受賞することができました。
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        期間:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        5ヶ月
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        開発環境:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        C#,unity,javascript,Git
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        人数、自分の役割:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        5人、プロジェクトリーダーとバックエンドを努めました。
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        学び・得たこと:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        プロジェクトリーダーとして、複数人で同じプロジェクトを管理する方法を学ぶことができました。開発については、研究室内で管理するプロジェクトだったため、GitHubを使うことができず、オンプレミス環境でのリモートリポジトリ環境の構築を学ぶことができました。
                    </Typography>
                </Box>

                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        困難だったこと:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        進捗をうまく管理することができず、プログラミングが苦手な人の進捗を管理することが大変でした。解決方法としては、マネジメントの一部を変わってもらい、開発系を私が専念することにしました。
                    </Typography>
                </Box>
            </Box>
        )
    },
    {
        name: 'LocationDraw',
        body: (
            <Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        概要:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        大学3年次の授業、システム創生プロジェクトで取り組んだプロジェクトです。歩いた道のりを地図に自動で書いて絵を描くことをコンセプトに作成したプロジェクトでした。
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        期間:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        2ヶ月
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        開発環境:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        Ruby,Rails,javascript
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        人数、自分の役割:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        10人、GPSから地図を書くという機能の根幹の開発を行いました。
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        学び・得たこと:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        WebAPIなどのwebアプリ開発に関する知識を知ることができました。
                    </Typography>
                </Box>

                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        困難だったこと:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        デプロイをする際に、位置情報を使うアプリケーションを使うためにはhttpsである必要があります。そこに気づくまでに時間がかかってしまいました。デジタル証明書を発行することはできないので、デバッグモードでhttpで実行できるようにすることで解決しました。
                    </Typography>
                </Box>
            </Box>
        )
    },
    {
        name: 'Regeno',
        body: (
            <Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        概要:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                            大学4年次の授業、システム創生プロジェクトで取り組んだプロジェクトです。私の大学の履修登録や履修確認をわかりやすくできるようにするプロジェクトでした。
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        期間:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        2ヶ月
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        開発環境: 
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                            Ruby,Rails,javascript,React,Git
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 0 1vh 0' }}>
                    <Typography variant='h6' >
                        人数、自分の役割:
                    </Typography>
                    <Typography sx={{ padding: '0 0 0 2vw' }}>
                        9人、フロントエンドのマネジメント、チームのサブリーダーを努めました。
                    </Typography>
                </Box>
                <Typography variant='h5' sx={{padding:'2vh 0 1vh 0'}}>
                    実装例
                </Typography>
                <Box sx={{ padding: '5vh 0 1vh 0' }}>
                    <Typography variant='h6' >
                        画面例①：時間割表の切り替え
                    </Typography>
                    <Box>
                        <Image src={`${BASE_PATH}/image/regeno/changeTable.gif`} alt='changeTable' width={1000} height={300} style={{ pointerEvents: 'none', userSelect: 'none' }} />
                    </Box>
                </Box>
                <Box sx={{ padding: '5vh 0 1vh 0' }}>
                    <Typography variant='h6' >
                        画面例②：履修登録画面
                    </Typography>
                    <Box>
                        <Image src={`${BASE_PATH}/image/regeno/reg.gif`} alt='Search and Register' width={1000} height={300} style={{ pointerEvents: 'none', userSelect: 'none' }} />
                    </Box>
                </Box>
            </Box>
        )
    }
];

export default works;