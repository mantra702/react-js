import React from 'react';
export default function HotelCard({ title, value, icon }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <div className="fs-1 mb-3">{icon}</div>
          <h5 className="card-title">{title}</h5>
          <h3>{value}</h3>
        </div>
      </div>
    </div>
  );
}
