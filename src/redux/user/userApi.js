import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../contacts/contactApi';
import Notiflix from 'notiflix';

const setToken = token => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const offToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

const registration = async user => {
  const { data } = await api.post(`/api/users/register`, user);
  setToken(data.token);
  return data;
};

const login = async user => {
  const { data } = await api.post(`/api/users/login`, user);
  setToken(data.token);
  return data;
};

const logout = async user => {
  const { data } = await api.post(`/api/users/logout`, user);
  offToken();
  return data;
};

const refresh = async () => {
  const { data } = await api.get(`/api/users/current`);
  return data;
};

export const registerUser = createAsyncThunk(
  'authorization/register',
  async (user, thunkAPI) => {
    try {
      const response = await registration(user);
      return response;
    } catch (error) {
      Notiflix.Notify.warning(error.response.data.message);
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  'authorization/login',
  async (user, thunkAPI) => {
    try {
      const response = await login(user);
      return response;
    } catch (error) {
      Notiflix.Notify.warning(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'authorization/logout',
  async (user, thunkAPI) => {
    try {
      const response = await logout(user);
      return response;
    } catch (error) {
      Notiflix.Notify.warning(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'authorization/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const savedToken = state.registration.token;

      if (!savedToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setToken(savedToken);
      const response = await refresh();
      return response;
    } catch (error) {
      Notiflix.Notify.warning(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
