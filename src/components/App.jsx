import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataThunk } from '../redux/contacts/operations.js';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import NotFound from '../pages/NotFound.jsx';
import Contacts from '../pages/Contacts.jsx';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import { refreshThunk } from '../redux/auth/operations.js';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors.js';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute.jsx';

const App = () => {
  const dispatch =  useDispatch();
  const  isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch]);

  useEffect(() => {
  if (isLoggedIn) {
    dispatch(fetchDataThunk());
  }
}, [dispatch, isLoggedIn]);

  return isRefreshing ? null : (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/contacts' element={
            <PrivateRoute>
              <Contacts/>
            </PrivateRoute>
            }
          />
        </Route>
        <Route path='/login' element={<RestrictedRoute component ={<Login />} redirectTo= '/contacts'/>} />
        <Route path='/register' element={<RestrictedRoute component ={<Register />} redirectTo= '/contacts'/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
