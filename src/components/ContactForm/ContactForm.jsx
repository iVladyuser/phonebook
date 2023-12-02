import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormInput, Form, FormButton, FormLabel } from './ContactForm.styled';
import { contactsSelectors } from 'redux/contacts';
import { contactsThunk } from 'services';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.selectContacts);

  const onSubmitAddContact = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.contactName.value;
    const number = e.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };

    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === formData.name.toLowerCase()
    );

    if (isExist) {
      alert(`Oops, contact '${formData.name}' is already in contacts!`);
      return;
    }

    dispatch(contactsThunk.addContact(formData))
      .unwrap()
      .then(() => e.target.reset);
  };

  return (
    <Form onSubmit={onSubmitAddContact}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput
        type="text"
        name="contactName"
        placeholder="Jacob Mercer"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />

      <FormLabel htmlFor="number">Number</FormLabel>
      <FormInput
        type="tel"
        name="contactNumber"
        placeholder="761-23-96"
        minLength={3}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
      />

      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};

export default ContactForm;
