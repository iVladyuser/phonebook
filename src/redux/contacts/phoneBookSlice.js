import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from 'services/fetchContacts';

const contactInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,

  extraReducers: builder =>
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = [...state.contacts, payload];
      })
      .addMatcher(
        isAnyOf(getContacts.pending, deleteContact.pending, addContact.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const contactsReducer = phoneBookSlice.reducer;
