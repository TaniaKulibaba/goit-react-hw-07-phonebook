import axios from 'axios';
import {
  addContactsRequest,
  addContactSuccess,
  addContactsError,
  removeContactsRequest,
  removeContactSuccess,
  removeContactsError,
  fetchContactsRequest,
  fetchContactSuccess,
  fetchContactsError,
} from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4040';


const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = ({ name, number }) => dispatch => {
  const contact = ({ name, number });

  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

const removeContact = contactId => dispatch => {
  dispatch(removeContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(removeContactSuccess(contactId)))
    .catch(error => dispatch(removeContactsError(error)));

}



export default {
  addContact,
  removeContact,
  fetchContacts
};