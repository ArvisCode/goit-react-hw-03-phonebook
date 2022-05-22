import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/addContact', contact => ({
  payload: {
    ...contact,
    id: nanoid(),
  },
}));

export const deleteContact = createAction('contacts/deleteContact');

export const changeFilter = createAction('contacts/changeFilter');
