/**
 * Stats — completed / remaining counts and a progress bar.
 *
 * Props:
 *   tasks (array) — the full task list (read-only!)
 */
export default function Stats({ tasks }) {
  // FIX #4: compare with `t.done` instead of assigning `t.done = true`.
  // The assignment silently marked every task as done (mutating state).
  const completed = tasks.filter((t) => t.done).length;
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
