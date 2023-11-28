import { useSelector } from 'react-redux';
import { WrapperError } from './Error.styled';
// import { selectContactsError } from 'redux/contacts/contactsSelectors';
import { contactsSelectors } from 'redux/contacts';

export const Error = () => {
  const error = useSelector(contactsSelectors.selectContactsError);

  return (
    <WrapperError>
      <p>We're sorry, {error}</p>
    </WrapperError>
  );
};
