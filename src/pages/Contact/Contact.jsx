import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { ContactContainer, Title, Subtitle } from './Contact.styled';
import { useSelector } from 'react-redux';
import { userSelect } from '../../redux/user/selectors';
import Loader from 'components/Loader/Loader';
import {  selectContacts } from '../../redux/contacts/selectors';

export const ContactsPersonal = () => {
  const user = useSelector(userSelect);
  const contact = useSelector(selectContacts);
  return (
    <ContactContainer>
      {contact.isLoading && <Loader />}
      <Title>{user.name}'s phonebook</Title>
      <ContactForm />
      <Filter />
      <Subtitle>Contacts</Subtitle>
      <ContactList />
    </ContactContainer>
  );
};
