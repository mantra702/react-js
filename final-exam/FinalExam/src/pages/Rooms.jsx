import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/actions/hotelActions';
import { Link } from 'react-router-dom';

export default function Rooms() {
  const dispatch = useDispatch();
  const { rooms } = useSelector(state => state.hotel);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2>Rooms</h2>
      <div className="row">
        {rooms.map(room => (
          <div className="col-md-4 mb-3" key={room.id}>
            <div className="card">
              <div className="card-body">
                <h5>Room #{room.number}</h5>
                <p>Type: {room.type}</p>
                <p>Status: <span className={`badge ${room.status === 'Available' ? 'bg-success' : 'bg-danger'}`}>{room.status}</span></p>
                <Link to={`/edit-room/${room.id}`} className="btn btn-sm btn-primary">Edit</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
