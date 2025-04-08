import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LocalboxMinerCRUD() {
  const [subjects, setSubjects] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrUpdateSubject = () => {
    const newSubject = { title, subtitle, date, content };
    if (editingIndex !== null) {
      const updatedSubjects = [...subjects];
      updatedSubjects[editingIndex] = newSubject;
      setSubjects(updatedSubjects);
      setEditingIndex(null);
    } else {
      setSubjects([...subjects, newSubject]);
    }
    setTitle("");
    setSubtitle("");
    setDate("");
    setContent("");
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setTitle(subjects[index].title);
    setSubtitle(subjects[index].subtitle);
    setDate(subjects[index].date);
    setContent(subjects[index].content);
  };

  const handleDelete = (index) => {
    const filteredSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(filteredSubjects);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Localbox Miner - Subject Manager</h2>
      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter subject content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subtitle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddOrUpdateSubject}>
              {editingIndex !== null ? "Update Subject" : "Add Subject"}
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className="mb-3">Subjects List</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Title</th>
                <th>Content</th>
                <th>Subtitle</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{subject.title}</td>
                  <td>{subject.content}</td>
                  <td>{subject.subtitle}</td>
                  <td>{subject.date}</td>
                  <td>
                    <Button variant="warning" size="sm" className="me-2"
                    onClick={() => handleEdit(index)} >
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(index)} >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
