import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const requestSignUp = async formData => {
  const { data } = await instance.post('/users/signup', formData);
  setToken(data.token);

  return data;
};

export const requestSignIn = async formData => {
  const { data } = await instance.post('/users/login', formData);
  setToken(data.token);

  return data;
};

export const requestGetCurrentUser = async () => {
  const { data } = await instance.get('/users/current');

  return data;
};

export const requestLogOut = async () => {
  const { data } = await instance.post('/users/logout');

  return data;
};

export const requestGetContacts = async () => {
  const { data } = await instance.get('/contacts');

  return data;
};

export const requestAddContact = async formData => {
  const { data } = await instance.post('/contacts', formData);

  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);

  return data;
};
