import React from 'react'
import AppBar from './AppBar/AppBar'
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <AppBar/>
        <Toaster />
        <Outlet/>
    </div>
  );
};

export default Layout;
