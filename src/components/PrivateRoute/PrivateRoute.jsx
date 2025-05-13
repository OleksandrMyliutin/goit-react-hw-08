import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if(!isLoggedIn) {
        toast.error('You need to log in to access this page');
        return <Navigate to='/login' />
    }

    return children;
};

export default PrivateRoute;
