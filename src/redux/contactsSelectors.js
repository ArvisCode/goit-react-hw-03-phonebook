import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const visibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => items.filter(item => item.name.includes(filter))
);
