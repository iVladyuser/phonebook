import { ContactForm, ContactList, Filter } from 'components';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { useSelector } from 'react-redux';
// import {
//   selectContactsError,
//   selectContactsIsLoading,
//   selectContacts,
// } from '../redux/contacts/contactsSelectors';
import { contactsSelectors } from 'redux/contacts';
const App = () => {
  const isLoading = useSelector(contactsSelectors.selectContactsIsLoading);
  const error = useSelector(contactsSelectors.selectContactsError);
  const phoneBook = useSelector(contactsSelectors.selectContacts);
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
      <h1 style={{ color: '#3645ab' }}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {phoneBook.length === 0 && !error && !isLoading ? (
        "You don't have any contacts yet"
      ) : (
        <Filter />
      )}
      {error ? <Error /> : <ContactList />}
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
