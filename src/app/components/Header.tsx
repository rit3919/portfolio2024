import { AppBar, Toolbar, Typography, Button } from '@mui/material';


const HeaderButton = {
    fontSize: '2rem',
    fontFamily: 'Arial',
    textDecorationLine: 'underline',
    textTransform: 'none',//全部大文字にするのを避ける．
    margin: '0 5px 0 0'
}

// function ScrollButton(props) {
//     document.getElementById(props.wrap)[0]
// }
// Header
const Header: React.FC = () => {

    //各カテゴリーへのスクロール
    const scrollAbout = () => {


        document.getElementsByClassName("About")[0].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };
    const scrollSkills = () => {


        document.getElementsByClassName("Skill")[0].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };
    const scrollWorks = () => {


        document.getElementsByClassName("Works")[0].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };

    return (
        <AppBar color="primary">
            <Toolbar>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    Rin Takagi Portfolio
                </Typography>

                <Button color="inherit" sx={HeaderButton} onClick={scrollAbout}>About</Button>
                <Button color="inherit" sx={HeaderButton} onClick={scrollSkills}>Skill</Button>
                <Button color="inherit" sx={HeaderButton} onClick={scrollWorks}>Works</Button>

            </Toolbar>
        </AppBar >
    );
};

export default Header;
