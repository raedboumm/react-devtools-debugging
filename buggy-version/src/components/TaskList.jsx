/**
 * TaskList — renders one TaskItem per task.
 *
 * Props:
 *   tasks (array)  — the tasks to show (already filtered by App)
 *   onToggle(id)   — mark a task done / not done
 *   onDelete(id)   — remove a task
 */
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks to show.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        // A stable, unique `key` lets React track each item between renders
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
