/**
 * Stats — completed / remaining counts and a progress bar.
 *
 * Props:
 *   tasks (array) — the full task list
 */
export default function Stats({ tasks }) {
  const completed = tasks.filter((t) => (t.done = true)).length;
  const remaining = tasks.length - completed;
  const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  return (
    <section className="stats">
      <p>
        Completed: <strong>{completed}</strong> / {tasks.length}
      </p>
      <p>
        Remaining: <strong>{remaining}</strong>
      </p>
      <div className="progress" aria-label={`${percent}% complete`}>
        <div className="progress-bar" style={{ width: `${percent}%` }} />
      </div>
    </section>
  );
}
