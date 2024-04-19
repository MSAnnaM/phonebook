import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

export const api = axios.create({
  baseURL: 'https://phonebook-api-4ks1.onrender.com',
});

const makeApiRequest = async (config, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.registration.token;

    const response = await api({
      ...config,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    Notiflix.Notify.warning('Oooops, something goes wrong');
    return thunkAPI.rejectWithValue(error);
  }
};

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    return makeApiRequest({ method: 'get', url: '/api/contacts' }, thunkAPI);
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    return makeApiRequest(
      { method: 'post', url: '/api/contacts', data: newContact },
      thunkAPI
    );
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    return makeApiRequest(
      { method: 'delete', url: `/api/contacts/${id}` },
      thunkAPI
    );
  }
);
