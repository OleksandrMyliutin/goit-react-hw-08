import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

export default function UserMenu() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
    <>
        <li><span className="text-neutral-content font-bold from-neutral-500">Welcome, {user.name}</span></li>
        <li><button onClick={() => dispatch(logoutThunk())}>Logout</button></li>
    </>
    );
};