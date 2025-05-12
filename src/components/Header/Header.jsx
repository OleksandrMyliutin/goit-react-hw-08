import React from 'react'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
const Header = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    return (
        <header className="flex items-center justify-between p-4 bg-neutral">
            <h2 className="menu bg-neutral-400 rounded-box">Auth</h2>
            {isLoggedIn && (
                <div className="flex items-center gap-2">
                    <span className="text-neutral-content">Welcome, {user.name}</span>
                </div>
            )}
        <ul className="flex gap-0.5 menu menu-horizontal bg-neutral-400 rounded-box">
            <li >
            <NavLink to="/" >Home</NavLink>
            </li>
            <li >
            <NavLink to="/contacts" >Contacts</NavLink>
            </li>
            {isLoggedIn ? (
                <li>
                    <button onClick={() => dispatch(logoutThunk())}>Logout</button>
                </li>
            ) : (
                <>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </>
            )}
        </ul>
        </header>
    )
}

export default Header
