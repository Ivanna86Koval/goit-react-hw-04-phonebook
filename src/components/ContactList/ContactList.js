import propTypes from 'prop-types';
import { List, Item, ListItemBtn } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <ListItemBtn onClick={() => handleDelete(contact.id)}>Delete</ListItemBtn>
        </Item>
      ))}
      </List>
    </div>
  )
}


ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};

