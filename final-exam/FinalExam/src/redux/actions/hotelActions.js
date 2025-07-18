import axios from 'axios';
const API = 'http://localhost:3001';

export const fetchRooms = () => async dispatch => {
  const res = await axios.get(`${API}/rooms`);
  dispatch({ type: 'FETCH_ROOMS_SUCCESS', payload: res.data });
};

export const fetchCustomers = () => async dispatch => {
  const res = await axios.get(`${API}/customers`);
  dispatch({ type: 'FETCH_CUSTOMERS_SUCCESS', payload: res.data });
};

export const fetchBookings = () => async dispatch => {
  const res = await axios.get(`${API}/bookings`);
  dispatch({ type: 'FETCH_BOOKINGS_SUCCESS', payload: res.data });
};