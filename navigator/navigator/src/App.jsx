import React, { useState, useEffect } from 'react';
import { FaBook, FaEdit } from 'react-icons/fa';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Load from localStorage or use default list
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem('items');
    return stored ? JSON.parse(stored) : [
      { id: 1, title: "JavaScript", description: "JavaScript is among..." },
      { id: 2, title: "Sass", description: "Learn from" },
      { id: 3, title: "React", description: "Learn from react.js" },
      { id: 4, title: "Node", description: "Nodejs documentation" },
      { id: 5, title: "EcmaScript", description: "Learn from es6.org" },
      { id: 6, title: "Angular", description: "One framework Mobile..." },
    ];
  });

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({ title: '', description: '' });

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setForm({ title: '', description: '' });
    setEditIndex(null);
    setShow(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.title || !form.description) return;

    if (editIndex !== null) {
      const updated = items.map((item, idx) =>
        idx === editIndex ? { ...item, ...form } : item
      );
      setItems(updated);
    } else {
      const newItem = {
        id: Date.now(), // unique id using timestamp
        title: form.title,
        description: form.description
      };
      setItems([...items, newItem]);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(items[index]);
    handleShow();
  };

  const handleDelete = (index) => {
    const filtered = items.filter((_, idx) => idx !== index);
    setItems(filtered);
  };

  return (
    <div className="bg-primary vh-100 p-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="text-white d-flex align-items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="50" height="50" className="me-2" />
          <h3>REACT CRUD</h3>
        </div>
        <Button variant="warning" onClick={handleShow}>Add</Button>
      </div>

      <div className="bg-white rounded p-3">
        <Table bordered hover>
          <thead className="table-light">
            <tr>
              <th><FaBook /></th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td><FaBook /></td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant="outline-success" size="sm" className="me-2" onClick={() => handleEdit(index)}>
                    <FaEdit />
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)}>🗑️</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal for Add/Edit */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? "Edit Item" : "Add Item"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={form.title} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" value={form.description} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
