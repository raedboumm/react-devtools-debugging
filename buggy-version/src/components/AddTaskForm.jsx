/**
 * AddTaskForm — a controlled input for adding a new task.
 *
 * Local state:
 *   title (string) — what the user is typing
 * Props:
 *   onAdd(title) — called with the trimmed title when the form is submitted
 */
import { useState } from 'react';

export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // don't reload the page
    const trimmed = title.trim();
    if (!trimmed) return; // ignore empty tasks
    onAdd(trimmed);
    setTitle(''); // clear the input
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        aria-label="New task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
