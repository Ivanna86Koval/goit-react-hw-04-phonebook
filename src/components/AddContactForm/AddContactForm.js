import { useState } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import {Form, Label, FormItem, FormBtn} from './AddContactForm.styled'

export const AddContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    handleSubmit({ name: name, number: number });
    form.reset();
  };
 
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
   
     return (
      <Form onSubmit={handleFormSubmit}>
        <Label htmlFor={nameInputId}>Name</Label>
        <FormItem
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
        <Label htmlFor={numberInputId}>Number</Label>
        <FormItem
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
        />
        <FormBtn type="submit">
          Add contact
        </FormBtn>
      </Form>
    );
  }

AddContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};