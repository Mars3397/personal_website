import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// The useColorScheme is imported but mode/setMode are unused
// import { useColorScheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// const pages = ['Home', 'Projects', 'Contact'];
const pages = ['Home', 'Contact'];
// Map of page names to their URL paths
const pageRoutes: Record<string, string> = {
    'home': '/',
    // 'projects': '/project',
    'contact': '/contact'
};

const ResponsiveAppBar = () => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    // Commenting out unused variables from useColorScheme
    // const { mode, setMode } = useColorScheme();

    const handleNavigation = (fromDrawer: boolean, page: string) => {
        setDrawerOpen(false);
        const pageLower = page.toLowerCase();
        const route = pageRoutes[pageLower] || '/';

        if (!fromDrawer) {
            navigate(route);
        }

        setTimeout(() => {
            navigate(route);
        }, 140);
    }

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        onClick={() => handleNavigation(false, 'home')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Mars Kuo
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <Typography variant="h6" sx={{ m: 2 }}>
                                    Mars Kuo
                                </Typography>
                                <Divider />
                                <List>
                                    {pages.map((page) => (
                                        <ListItem key={page} disablePadding>
                                            <ListItemButton onClick={() => handleNavigation(true, page)}>
                                                <ListItemText primary={page} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        onClick={() => handleNavigation(false, 'home')}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Mars Kuo
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleNavigation(false, page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
