import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Plus, PencilSquare, Trash, CheckSquare } from 'react-bootstrap-icons';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [task, setTask] = useState({ title: '', date: '', description: '', completed: false });
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!task.title || !task.date || !task.description) return;

    const updatedTasks = [...tasks];
    if (editIndex !== null) {
      updatedTasks[editIndex] = task;
      setEditIndex(null);
    } else {
      updatedTasks.push({ ...task, completed: false });
    }

    setTasks(updatedTasks);
    setTask({ title: '', date: '', description: '', completed: false });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setEditIndex(null);
  };

  const handleNewTaskClick = () => {
    setTask({ title: '', date: '', description: '', completed: false });
    setEditIndex(null);
    setShowForm(true);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#e6e6e6' }} className="d-flex justify-content-center align-items-start py-5">
      <div className="w-100" style={{ maxWidth: '800px' }}>
        <div className="bg-white p-4 rounded mb-4" style={{ border: '3px solid #a5d6a7' }}>
          <h3 className="text-center mb-3">TODO App</h3>

          <div className="d-flex align-items-center bg-success bg-opacity-25 p-2 rounded mb-3">
            <input
              type="text"
              className="form-control border-0 bg-transparent"
              placeholder="Add New Task"
              disabled
            />
            <button className="btn btn-success ms-2" onClick={handleNewTaskClick}>
              <Plus size={20} />
            </button>
          </div>

          {showForm && (
            <div className="mb-4">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
              />
              <input
                type="date"
                className="form-control mb-2"
                value={task.date}
                onChange={(e) => setTask({ ...task, date: e.target.value })}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Task Description"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
              />
              <button className="btn btn-success w-100" onClick={handleAddTask}>
                {editIndex !== null ? 'Update Task' : 'Add Task'}
              </button>
            </div>
          )}

          <div className="row">
            <div className="col-md-6">
              <h5 className="text-center mb-3">Incomplete Tasks</h5>
              {incompleteTasks.length === 0 && (
                <div className="text-muted text-center">No tasks yet.</div>
              )}
              {incompleteTasks.map((t, index) => {
                const realIndex = tasks.findIndex(task => task === t);
                return (
                  <div key={index} className="bg-success bg-opacity-25 p-3 rounded mb-3" style={{ border: '2px solid #a5d6a7' }}>
                    <div className="fw-bold">{t.title}</div>
                    <div className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>{t.date}</div>
                    <div>{t.description}</div>
                    <div className="mt-2 d-flex justify-content-end gap-3">
                      <CheckSquare role="button" onClick={() => toggleCompletion(realIndex)} />
                      <PencilSquare role="button" onClick={() => handleEdit(realIndex)} />
                      <Trash role="button" onClick={() => handleDelete(realIndex)} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col-md-6">
              <h5 className="text-center mb-3">Completed Tasks</h5>
              {completedTasks.length === 0 && (
                <div className="text-muted text-center">No completed tasks yet.</div>
              )}
              {completedTasks.map((t, index) => {
                const realIndex = tasks.findIndex(task => task === t);
                return (
                  <div key={index} className="bg-light p-3 rounded mb-3" style={{ border: '2px solid #c5e1a5' }}>
                    <div className="fw-bold">{t.title}</div>
                    <div className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>{t.date}</div>
                    <div>{t.description}</div>
                    <div className="mt-2 d-flex justify-content-end gap-3">
                      <CheckSquare role="button" onClick={() => toggleCompletion(realIndex)} />
                      <PencilSquare role="button" onClick={() => handleEdit(realIndex)} />
                      <Trash role="button" onClick={() => handleDelete(realIndex)} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
