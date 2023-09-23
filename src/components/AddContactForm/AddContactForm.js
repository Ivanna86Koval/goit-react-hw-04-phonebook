import { useState } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import {Form, Label, FormItem, FormBtn} from './AddContactForm.styled'

export const AddContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

      const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                return setName(e.currentTarget.value)
            case "number":
                return setNumber(e.currentTarget.value)
            default:
                break;
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit({ id: nanoid(5), name, number });
        setName("");
        setNumber("");
    }
   
     return (
      <Form onSubmit={handleFormSubmit}>
        <Label>Name</Label>
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
        <Label>Number</Label>
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