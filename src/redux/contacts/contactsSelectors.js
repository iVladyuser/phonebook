import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsStore.contacts;
export const selectContactsIsLoading = state => state.contactsStore.isLoading;
export const selectContactsError = state => state.contactsStore.error;
export const selectContactsFilterTerm = state => state.filterStore.filterTerm;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilterTerm],
  (contacts, filterTerm) =>
    contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
        contact.phone.toString().includes(filterTerm.toLowerCase().trim())
    )
);
