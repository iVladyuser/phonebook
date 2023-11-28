import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { FormInput, Form, FormButton, FormLabel } from './ContactForm.styled';
// import { addContact } from 'redux/contacts/phoneBookSlice';
// import { selectContacts } from 'redux/contacts/contactsSelectors';
import { contactsSelectors, contactsSlices } from 'redux/contacts';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.selectContacts);

  const onSubmitAddContact = e => {
    e.preventDefault();
    const data = {
      name,
      number: Number.parseFloat(number) || alert(`Number is not correct`),
    };
    const newContact = { ...data, id: nanoid() };

    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExist) {
      alert(`Oops, contact '${newContact.name}' is already in contacts!`);
      return;
    }

    dispatch(contactsSlices.addContact(newContact));
    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <Form onSubmit={onSubmitAddContact}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput
        type="text"
        name="name"
        onChange={handleInputChange}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />

      <FormLabel htmlFor="number">Number</FormLabel>
      <FormInput
        type="tel"
        name="number"
        value={number}
        onChange={handleInputChange}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
      />

      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};

export default ContactForm;
