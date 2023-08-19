import { BtnDelete } from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, number }, onDel }) => {
  return (
    <>
      {name}: {number} <BtnDelete onClick={() => onDel(id)}>Delete</BtnDelete>
    </>
  );
};
