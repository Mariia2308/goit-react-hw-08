import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import {
  selectPhonebookIsLoading,
  selectPhonebookIsError,
} from '../../redux/contacts/selectors.js';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import { selectFilteredContacts } from '../../redux/filters/selectors.js';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectPhonebookIsLoading);
  const isError = useSelector(selectPhonebookIsError);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {contacts &&
        contacts !== null &&
        contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
    </>
  );
};

export default ContactList;
