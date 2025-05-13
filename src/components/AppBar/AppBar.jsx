import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
    <header className="flex items-center justify-between p-4 bg-neutral">
        <h2 className="menu bg-neutral-400 rounded-box">Auth</h2>
        <ul className="flex gap-2 menu menu-horizontal bg-neutral-400 rounded-box">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </ul>
    </header>
    );
}