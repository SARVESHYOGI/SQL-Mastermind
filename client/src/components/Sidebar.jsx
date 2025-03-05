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

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/auth/login');
    };

    const listItems = [
        !isLoggedIn && { text: 'login', icon: <LoginIcon />, href: "/auth/login" },
        !isLoggedIn && { text: 'register', icon: <AppRegistrationIcon />, href: "/auth/register" },

        { text: 'questionnaire', icon: <QuizIcon />, href: "/questionnaire" },
        { text: 'generated plans', icon: <TipsAndUpdatesIcon />, href: "/generatedplans" },
        { text: 'Home', icon: <HomeIcon />, href: "/" },
        { text: 'dashboard', icon: <DashboardIcon />, href: "/dashboard" },

        isLoggedIn && { text: 'logout', icon: <LogoutIcon />, onClick: logout },
    ];

    const filteredListItems = listItems.filter(Boolean);

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {filteredListItems.map((item, index) => (
                    <Link to={item.href ? item.href : "#"} key={index}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={item.onClick}>
                                <ListItemIcon>
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
        <div className='absolute top-0 left-0  bg-gray-800 text-white'>
            <Button onClick={toggleDrawer(true)} ><MenuOpenIcon className='text-white' /></Button>
            <Drawer
                open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
