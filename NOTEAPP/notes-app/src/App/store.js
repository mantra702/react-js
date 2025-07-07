import { createStore } from 'redux';
import notesReducer from '../features/notes/notesSlice ';

export const store = createStore(notesReducer);
