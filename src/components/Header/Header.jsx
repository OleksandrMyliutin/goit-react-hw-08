import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-neutral">
            <h2 className="menu bg-neutral-400 rounded-box">Auth</h2>
        <ul className="flex gap-0.5 menu menu-horizontal bg-neutral-400 rounded-box">
            <li >
            <NavLink to="/" >Home</NavLink>
            </li>
            <li >
            <NavLink to="/contacts" >Contacts</NavLink>
            </li>
            <li >
            <NavLink to="/login" >Login</NavLink>
            </li>
            <li >
            <NavLink to="/register" >Register</NavLink>
            </li>
        </ul>
        </header>
    )
}

export default Header
