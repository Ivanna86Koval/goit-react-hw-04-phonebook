import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {Container, Title, SubTitle } from './App.styled'
import {AddContactForm} from './AddContactForm/AddContactForm';
import {Filter} from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  const phoneContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? phoneContacts
  )
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = contact => {
    const isInContacts = contacts.some(el => {
      return el.name.trim() === contact.name.trim();
    })

    if (isInContacts) {
      Notify.failure(`${contact.name} is already in contacts`);
      return;
    }

    setContacts([...contacts, contact]);
  };

 
     const handleChange = e => {
        setFilter(e.target.value);
      };

      // Отримання відфільтрованих контактів. Краще писати коментарі на англійський 

   const getFilteredContacts = () => {

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };

  const handleDelete = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

    return (
      <Container>
        <Title>Phonebook</Title>
        <AddContactForm handleSubmit={handleSubmit} />
        <SubTitle>Contacts</SubTitle>
        <Filter filter={handleChange} />
        <ContactList 
        contacts={getFilteredContacts()}
        handleDelete={handleDelete}/>
      </Container>
    );
};

