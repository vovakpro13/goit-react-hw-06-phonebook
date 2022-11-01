import { createSlice } from '@reduxjs/toolkit';
import {defaultContacts} from "constants/defaultContacts";

const initialState = {
  contacts: defaultContacts,
  filter: '',
};

const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addNewContact(state, { payload }) {
      state.contacts.push(payload);
    },

    deleteContact(state, { payload: deleteId }) {
      state.contacts = state.contacts.filter(({ id }) => deleteId !== id);
    },

    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addNewContact, deleteContact, setFilter } = counterSlice.actions;

export const selectContacts = state => state.app.contacts;
export const selectFilter = state => state.app.filter;

export default counterSlice;
