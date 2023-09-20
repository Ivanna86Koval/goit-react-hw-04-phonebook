import propTypes from 'prop-types';
import { ContactListItemBtn } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <ContactListItemBtn
            type="button"
            onChange={() => handleDelete(contact.id)}
          >
            Delete
          </ContactListItemBtn>
        </li>
      ))}
    </ul>
  </div>
);


ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};

