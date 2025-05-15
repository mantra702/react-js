import React from "react";

const BusList = ({ routines }) => {
  if (routines.length === 0) {
    return <p className="text-center text-gray-500">No routines added yet.</p>;
  }

  return (
    <div className="grid gap-4">
      {routines.map((r, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow">
          <p><strong>Route:</strong> {r.route}</p>
          <p><strong>Number:</strong> {r.number}</p>
          <p><strong>Driver Enrollment:</strong> {r.driver}</p>
          <p><strong>Distance:</strong> {r.distance} km</p>
          <p><strong>Money:</strong> ${r.money}</p>
        </div>
      ))}
    </div>
  );
};

export default BusList;
