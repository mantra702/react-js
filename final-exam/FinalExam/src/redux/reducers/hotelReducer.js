const initialState = {
  rooms: [],
  customers: [],
  bookings: []
};

export const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ROOMS_SUCCESS':
      return { ...state, rooms: action.payload };
    case 'FETCH_CUSTOMERS_SUCCESS':
      return { ...state, customers: action.payload };
    case 'FETCH_BOOKINGS_SUCCESS':
      return { ...state, bookings: action.payload };
    default:
      return state;
  }
};