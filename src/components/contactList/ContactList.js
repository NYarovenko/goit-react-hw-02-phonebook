import { ContactListItem } from 'components/contactListItem/ContactListItem';
import { StyledItemContact } from './ContactList.styled';

export const ContactList = ({ contacts, onDel }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return (
            <StyledItemContact key={contact.id}>
              <ContactListItem contact={contact} onDel={onDel} />
            </StyledItemContact>
          );
        })}
      </ul>
    </>
  );
};
