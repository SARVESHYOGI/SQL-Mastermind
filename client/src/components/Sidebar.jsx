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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/auth/login');
    }

    const listItems = [
        { text: 'login', icon: <InboxIcon />, href: "/auth/login" },
        { text: 'register', icon: <MailIcon />, href: "/auth/register" },
        { text: 'qestionnaire', icon: <MailIcon />, href: "/questionnaire" },
        { text: 'sql-kit', icon: <MailIcon />, href: "/sql-kit" },
        { text: 'Home', icon: <MailIcon />, href: "/" },
        { text: 'dashboard', icon: <MailIcon />, href: "/dashboard" },
    ];

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {listItems.map((item, index) => (
                    <Link to={item.href} key={index}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
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
            <Button onClick={logout}>
                Logout
            </Button>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)} sx={{ marginLeft: '20px' }}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
