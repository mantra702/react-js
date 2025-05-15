import React, { useState } from "react";

const BusForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    route: "",
    number: "",
    driver: "",
    distance: "",
    money: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      route: "",
      number: "",
      driver: "",
      distance: "",
      money: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md p-6 max-w-lg mx-auto"
    >
      <h2 className="text-xl font-semibold text-center text-blue-600 mb-6">
        Add Bus Routine
      </h2>

      {/* Input group */}
      {[
        { label: "Bus Route", name: "route", type: "text", placeholder: "e.g. Route A" },
        { label: "Bus Number", name: "number", type: "text", placeholder: "e.g. 1234" },
        { label: "Driver Enrollment", name: "driver", type: "text", placeholder: "e.g. D-4567" },
        { label: "Distance (km)", name: "distance", type: "number", placeholder: "e.g. 15" },
        { label: "Money (Rs)", name: "money", type: "number", placeholder: "e.g. 250" },
      ].map(({ label, name, type, placeholder }) => (
        <div className="mb-4" key={name}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <input
            type={type}
            name={name}
            value={form[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
      ))}

      <div className="text-center mt-6">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
        >
          Add Routine
        </button>
      </div>
    </form>
  );
};

export default BusForm;
