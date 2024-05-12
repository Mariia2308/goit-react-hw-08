import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://660e52936ddfa2943b3663ff.mockapi.io/contacts'
  );
  return data;
};

export const addContact = async contactData => {
  const { data } = await axios.post(
    'https://660e52936ddfa2943b3663ff.mockapi.io/contacts',
    contactData
  );
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(
    `https://660e52936ddfa2943b3663ff.mockapi.io/contacts/${contactId}`
  );
  return data;
};
