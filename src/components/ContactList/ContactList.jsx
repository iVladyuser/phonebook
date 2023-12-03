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
import { SpinerDel } from 'components/Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.selectFilteredContacts);
  const isLoading = useSelector(contactsSelectors.selectContactsIsLoading);

  useEffect(() => {
    dispatch(contactsThunk.getContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(contactsThunk.deleteContact(contactId));
  };

  const showContacts =
    Array.isArray(visibleContacts) && visibleContacts.length > 0;

  return (
    <List>
      {showContacts &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <CardWrapper>
                <Info>{name}</Info>
                <Info>{number}</Info>
                <ButtonDelete
                  disabled={isLoading}
                  onClick={() => handleDeleteContact(id)}
                >
                  {isLoading ? <SpinerDel /> : 'Delete'}
                </ButtonDelete>
              </CardWrapper>
            </ContactItem>
          );
        })}
    </List>
  );
};

export default ContactList;
