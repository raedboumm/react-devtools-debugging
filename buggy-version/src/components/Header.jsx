/**
 * Header — app title and the total number of tasks.
 *
 * Props:
 *   count (number) — total number of tasks
 */
export default function Header({ count }) {
  return (
    <header className="header">
      <h1>Task Manager</h1>
      <p className="subtitle">
        You have {count} {count === 1 ? 'task' : 'tasks'}
      </p>
    </header>
  );
}
