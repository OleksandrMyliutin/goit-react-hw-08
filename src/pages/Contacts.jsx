import React from 'react'
import ContactList from '../components/ContactList/ContactList'
import ContactForm from '../components/ContactForm/ContactForm'
import SearchBox from '../components/SearchBox/SearchBox'

const Contacts = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-primary">PhoneBook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList/>
        </div>
    )
}

export default Contacts
