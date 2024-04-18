import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Item, ItemName, DeleteBtn } from './ContactList.styled';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import {
  deleteContact,
  fetchAllContacts,
} from '../../redux/contacts/contactApi';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  let normalizedFilter = filter ? filter.toLowerCase() : '';
  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDeleteContact = contactId => {
    console.log(contactId);
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact._id}>
          <ItemName>{contact.name}</ItemName>
          <span>{contact.number}</span>
          <DeleteBtn onClick={() => handleDeleteContact(contact._id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};
