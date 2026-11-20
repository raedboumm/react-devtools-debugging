/**
 * TaskItem — a single task row with a checkbox and a delete button.
 *
 * Props:
 *   task ({ id, title, done })
 *   onToggle(id)
 *   onDelete(id)
 */
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.done ? 'task done' : 'task'}>
      <label>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        <span>{task.title}</span>
      </label>
      <button className="delete" onClick={() => onDelete(task.id)} aria-label={`Delete ${task.title}`}>
        ✕
      </button>
    </li>
  );
}
