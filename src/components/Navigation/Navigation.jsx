import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
        Home
        </NavLink>

        {isLoggedIn && (
        <NavLink to="/contacts" className="btn btn-ghost normal-case text-xl">
            Contacts
        </NavLink>
        )}
    </>
    );
}
