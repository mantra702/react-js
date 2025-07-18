import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../redux/actions/hotelActions';

export default function Customers() {
  const dispatch = useDispatch();
  const { customers } = useSelector(state => state.hotel);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2>Customers</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}