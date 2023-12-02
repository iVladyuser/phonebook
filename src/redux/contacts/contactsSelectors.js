import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phoneBook.contacts;
export const selectContactsIsLoading = state => state.phoneBook.isLoading;
export const selectContactsError = state => state.phoneBook.error;
export const selectContactsFilterTerm = state => state.filter.filterTerm;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilterTerm],
  (contacts, filterTerm) =>
    contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
        contact.number.toString().includes(filterTerm.toLowerCase().trim())
    )
);
