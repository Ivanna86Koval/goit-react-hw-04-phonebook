import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
//import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {Container, Title, SubTitle } from './App.styled'
import {AddContactForm} from './AddContactForm/AddContactForm';
import {Filter} from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";

const phoneContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

export const App = () => {
 const [contacts, setContacts] = useState (() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? phoneContacts; 
   });

  const [filter, setFilter] = useState ('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  /*const handleSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
*/
    const handleSubmit = contact => {
    const isInContacts = contacts.some(
    ({ name }) => name.toLowerCase().trim() === contact.name.toLowerCase().trim()
      );

      if (isInContacts) {
        alert(`${contact.name} is already in contacts`);
        return;
      }

      setContacts(prevContacts => [
        ...prevContacts,
        { id: nanoid(), ...contact },
      ]);
    };
 
     const handleChange = e => {
        setFilter(e.target.value.trim());
      };

      // Отримання відфільтрованих контактів.

   const getFilteredContacts = () => {

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };

    const handleDelete = e => {
        setContacts(prevContacts => 
          prevContacts.filter(contact => contact.id !== e),
        );
      };

    const visibleContacts = getFilteredContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <AddContactForm handleSubmit={handleSubmit} />
        <SubTitle>Contacts</SubTitle>
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList 
        contacts={visibleContacts}
        handleDelete={handleDelete}/>
      </Container>
    );
};

