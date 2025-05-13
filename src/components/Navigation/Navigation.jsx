import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
        </>
    );
}

export default Navigation
