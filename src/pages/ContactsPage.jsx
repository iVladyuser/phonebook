import { ContactForm, ContactList, Filter } from 'components';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';

const ContactsPage = () => {
  const isLoading = useSelector(contactsSelectors.selectContactsIsLoading);
  const error = useSelector(contactsSelectors.selectContactsError);
  const contacts = useSelector(contactsSelectors.selectContacts);

  const isContacts = contacts.length === 0 && !error && !isLoading;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        margin: '0 auto',
        padding: '30px',
      }}
    >
      <h1 style={{ color: '#3645ab', marginTop: '50px' }}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isContacts ? "You don't have any contacts yet" : <Filter />}
      {error ? <Error /> : <ContactList />}
      {isLoading && <Loader />}
    </div>
  );
};

export default ContactsPage;
