import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if(isLoggedIn) {
        toast.success('You are already logged in');
        return <Navigate to={redirectTo} />
    }
    return component;
};

export default RestrictedRoute;
