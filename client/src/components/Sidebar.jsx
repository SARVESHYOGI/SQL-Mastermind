import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from 'react-router-dom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import QuizIcon from '@mui/icons-material/Quiz';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function Sidebar() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');  // Check if the user is logged in

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const logout = async () => {
        await localStorage.removeItem('token');
    };
    navigate('/auth/login');

    const listItems = [
        { text: 'Home', icon: <HomeIcon />, href: "/" },
        !isLoggedIn && { text: 'login', icon: <LoginIcon />, href: "/auth/login" },
        !isLoggedIn && { text: 'register', icon: <AppRegistrationIcon />, href: "/auth/register" },
        isLoggedIn && { text: 'dashboard', icon: <DashboardIcon />, href: "/dashboard" },
        isLoggedIn && { text: 'generate plan', icon: <QuizIcon />, href: "/questionnaire" },
        isLoggedIn && { text: 'generated plans', icon: <TipsAndUpdatesIcon />, href: "/generatedplans" },
        isLoggedIn && { text: 'logout', icon: <LogoutIcon />, onClick: logout },
    ];

    const filteredListItems = listItems.filter(Boolean);

    const DrawerList = (
        <Box sx={{
            // backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background with slight opacity
            backdropFilter: 'blur(100px)', // Frosted glass effect
            borderRight: '1px solid rgba(255, 255, 255, 0.3)', // Light border
            borderRadius: '0.375rem', // Rounded corners
            color: 'white',
            height: '100%',
            padding: '16px', // Add space at the top
            background: 'transparent',
            overflowY: 'hidden', // Ensures the background is fully transparent
        }} role="presentation" onClick={toggleDrawer(false)}>
            <List sx={{
                width: 250,
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
                padding: '0', // Remove default padding
                justifyContent: 'center', // Space between items
                height: '100%', // Full height
                overflowY: 'hidden', // Allow scrolling
            }}>
                {filteredListItems.map((item, index) => (
                    <Link to={item.href ? item.href : "#"} key={index}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={item.onClick} sx={{
                                background: 'rgba(255, 255, 255, 0.15)', // Slightly transparent button background
                                borderRadius: '8px', // Rounded corners for the button
                                margin: '8px 0', // Space between buttons
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.3)', // On hover, increase opacity
                                },
                                backdropFilter: 'blur(5px)', // Apply a blur effect to the button
                                transition: 'background 0.3s ease', // Smooth transition effect
                            }}>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div className="absolute top-0 left-0 bg-gray-800 text-white">
            <Button onClick={toggleDrawer(true)}>
                <MenuOpenIcon className="text-white" />
            </Button>
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        backgroundColor: "transparent", // Transparent background for the drawer
                        boxShadow: "none", // Remove shadow for a cleaner look
                    },
                }}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}
