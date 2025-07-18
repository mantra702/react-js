import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hotelReducer } from './reducers/hotelReducer';

const rootReducer = combineReducers({
  hotel: hotelReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))