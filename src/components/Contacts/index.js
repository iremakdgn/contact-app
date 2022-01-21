import {useState, useEffect} from 'react';

import List from './List';
import './styles.css'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts]= useState([{
        fullname:"Mehmet",
        phone_number:"123"
    },
    {
        fullname:"Ayşe",
        phone_number:"555"
    },
    {
        fullname:"İrem",
        phone_number:"4444"

    }
]);

    useEffect(()=>{
        console.log(contacts)

    }, [contacts])
  return <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}></List>
      <Form addContact={setContacts} contacts={contacts}></Form>
      </div>;
}

export default Contacts;
