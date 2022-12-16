import { configureStore } from '@reduxjs/toolkit'
import {contactsReducer} from './sliceContacts';
import { filterContactsReducer } from './sliceFilter';

export  const store = configureStore({
    reducer:  {
        contactst: contactsReducer,
        filter: filterContactsReducer,
      },
  });





