import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
        <li>
            <NavLink to="/" >
            Home
            </NavLink>
        </li>

        {isLoggedIn && (
        <li>
            <NavLink to="/contacts">
                Contacts
            </NavLink>
        </li>
        )}
    </>
    );
}
