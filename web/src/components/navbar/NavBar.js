import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './NavBar.css';
import navOptions from './NavOptions';

function NavBar() {
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    
    const handleOpenNavMenu = (event) =>
    setAnchorElMenu(event.currentTarget);

    const handleCloseNavMenu = () =>
        setAnchorElMenu(null);

        
    // Generates the components for the nav bar when the screen
    // size is large.
    const generateExpandedNavBarOptions = () =>
        navOptions.map((option) => ( 
            <Button 
                key={option.displayName}
                sx={{ marginY: 2, color: 'white', display: 'block', textTransform: 'none' }}
                href={option.url}>
                    {option.displayName}
            </Button>
        ));

    const generateMenuItemOptions = () => navOptions.map((option) => (
        <Link href={option.url} sx={{ textDecoration: 'none' }}>
            <MenuItem key={option.displayName} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{option.displayName}</Typography>
            </MenuItem>
        </Link>
    ));

    return (
        <AppBar position="static" id="NavBar">
            <Container maxWidth="null">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flex: 1 }}
                    >
                        Do Your Own Swing
                    </Typography>
                    { /* Nav bar options for large screens */ }
                    <Box sx={{ flex: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly', maxWidth: '1000px'}}>
                        {generateExpandedNavBarOptions()}
                    </Box>

                    { /* Menu with options for small screens */ }
                    <IconButton
                     sx={{ display: { sm: 'flex', md: 'none' }, justifyContent: 'flex-end'}}
                        size="large"
                        aria-label="Open menu"
                        edge="end"
                        color="inherit"
                        onClick={handleOpenNavMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElMenu)}
                        onClose={handleCloseNavMenu}
                        >
                            {generateMenuItemOptions()}
                        </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;