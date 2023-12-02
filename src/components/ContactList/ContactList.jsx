import { useEffect } from 'react';
import {
  List,
  ContactItem,
  CardWrapper,
  ButtonDelete,
  Info,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { contactsThunk } from 'services';
import { Loader } from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.selectContacts);
  const isLoading = useSelector(contactsSelectors.selectContactsIsLoading);

  useEffect(() => {
    dispatch(contactsThunk.getContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(contactsThunk.deleteContact(contactId));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <List>
      {isLoading && <Loader />}
      {showContacts &&
        contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <CardWrapper>
                <Info>{name}</Info>
                <Info>{number}</Info>
                <ButtonDelete
                  disabled={isLoading}
                  onClick={() => handleDeleteContact(id)}
                >
                  Delete
                </ButtonDelete>
              </CardWrapper>
            </ContactItem>
          );
        })}
    </List>
  );
};

export default ContactList;
