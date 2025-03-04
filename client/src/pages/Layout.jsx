// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';  // This will render the child routes
import Sidebar from '../components/Sidebar';

const Layout = () => {
    return (
        <div className="flex">
            {/* Sidebar (You can customize this as needed) */}
            <div>
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6">
                {/* The Outlet will render the nested routes here */}
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
