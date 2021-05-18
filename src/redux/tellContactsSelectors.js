import { createSelector } from "@reduxjs/toolkit";

const getContactsSelector = state => state.items;
const errorContactsSelector = state => state.error;
const loaderContactsSelector = state => state.isContactLoding;
const filterContactsSelector = state => state.filter;

const getFilterContacts = createSelector(
  [getContactsSelector, filterContactsSelector],
  (contacts, filter) => {
    return contacts.filter(
      contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter)
    );
  }
);

export { getContactsSelector, errorContactsSelector, loaderContactsSelector, filterContactsSelector, getFilterContacts};
