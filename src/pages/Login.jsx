import React from 'react'
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const Login = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn){
        return <Navigate to="/" />;
    }
    return (
        <div>
        <LoginForm/>
        </div>
    );
};

export default Login;
