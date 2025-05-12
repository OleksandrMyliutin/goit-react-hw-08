import { useDispatch } from 'react-redux';
// import './App.css'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import { useEffect } from 'react';
import { fetchDataThunk } from '../redux/contacts/contactsOps.js';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import NotFound from '../pages/NotFound.jsx';
import Contacts from '../pages/Contacts.jsx';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout.jsx';



function App() {
  const dispatch =  useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk())
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
