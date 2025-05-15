import { useState, useEffect } from "react";
import BusForm from "./components/BusForm";

const App = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("busRoutines")) || [];
    setRoutines(saved);
  }, []);

  const handleAddRoutine = (routine) => {
    const updated = [...routines, routine];
    setRoutines(updated);
    localStorage.setItem("busRoutines", JSON.stringify(updated));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Bus Routine Manager</h1>
      <BusForm onAdd={handleAddRoutine} />

      {routines.length === 0 ? (
        <p className="text-center text-gray-600">No routines added yet.</p>
      ) : (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white border rounded shadow">
            <thead className="bg-blue-100 text-left">
              <tr>
                <th className="p-3 border">Route</th> &nbsp; &nbsp; &nbsp; 
                <th className="p-3 border">Number</th> &nbsp; &nbsp; &nbsp; 
                <th className="p-3 border">Driver Enrollment</th> &nbsp; &nbsp; &nbsp; 
                <th className="p-3 border">Distance (km)</th> &nbsp; &nbsp; &nbsp; 
                <th className="p-3 border">Money (Rs)</th> &nbsp; &nbsp; &nbsp; 
              </tr>
            </thead>
            <tbody>
              {routines.map((r, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-3 border">{r.route}</td> &nbsp; &nbsp; &nbsp;
                  <td className="p-3 border">{r.number}</td> &nbsp; &nbsp; &nbsp;
                  <td className="p-3 border">{r.driver}</td> &nbsp; &nbsp; &nbsp;
                  <td className="p-3 border">{r.distance}</td> &nbsp; &nbsp; &nbsp;
                  <td className="p-3 border">{r.money}</td> &nbsp; &nbsp; &nbsp; 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
