import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, updateNote } from '../features/notes/notesReducer';
import { useState } from 'react';

function View() {
  const notes = useSelector(state => state);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', content: '' });

  const handleEdit = (note) => {
    setEditId(note.id);
    setEditForm({ title: note.title, content: note.content });
  };

  const handleUpdate = (id) => {
    dispatch(updateNote({ id, ...editForm }));
    setEditId(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>View Users</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {editId === note.id ? (
              <>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                />
                <textarea
                  value={editForm.content}
                  onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                />
                <button onClick={() => handleUpdate(note.id)}>Update</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <button onClick={() => handleEdit(note)}>Edit</button>
                <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default View;
