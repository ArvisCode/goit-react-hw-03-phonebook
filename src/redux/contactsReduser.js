import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './contactsAction';

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (state.some(({ name }) => name === payload.name)) {
      alert(`This ${payload.name} already in this!`);
      return state;
    }

    return [...state, payload];
  },

  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
