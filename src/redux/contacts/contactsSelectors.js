import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phoneBook.contacts;
export const selectContactsIsLoading = state => state.phoneBook.isLoading;
export const selectContactsError = state => state.phoneBook.error;
export const selectContactsFilterTerm = state => state.filter.filterTerm;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilterTerm],
  (contacts, filterTerm) =>
    contacts.filter(contact => {
      const name = contact.name || ''; // перевірка, чи не є undefined чи null
      const number = contact.number || ''; // перевірка, чи не є undefined чи null

      return (
        name.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
        number.toString().includes(filterTerm.toLowerCase().trim())
      );
    })
);
