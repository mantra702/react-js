
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/notesReducer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote({ id: nanoid(), ...form }));
    navigate('/view');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        /><br />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;