import React from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { ContactContainer, Title, Subtitle } from './Contact.styled';
import { useSelector } from 'react-redux';
import { userSelect } from '../../redux/user/selectors';

export const ContactsPersonal = () => {
  const user = useSelector(userSelect);
  return (
    <ContactContainer>
      <Title>{user.name}'s phonebook</Title>
      <ContactForm />
      <Filter />
      <Subtitle>Contacts</Subtitle>
      <ContactList />
    </ContactContainer>
  );
};
