/**
 * App.jsx — FIXED version.
 *
 * Owns all the state (the task list and the current filter) and passes
 * data down to child components as props, and callbacks for children
 * to change that state.
 *
 * Every fix is marked with "FIX #n" and matches a section in DEBUGGING.md.
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';
import Stats from './components/Stats';
import './App.css';

const initialTasks = [
  { id: 1, title: 'Install React Developer Tools', done: true },
  { id: 2, title: 'Inspect the component tree', done: false },
  { id: 3, title: 'Fix the bugs', done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');

  // FIX #6: `tasks` is now in the dependency array, so the effect re-runs
  // (and the browser tab title updates) every time the task list changes.
  useEffect(() => {
    const remaining = tasks.filter((t) => !t.done).length;
    document.title = `${remaining} ${remaining === 1 ? 'task' : 'tasks'} left`;
  }, [tasks]);

  // FIX #1: build a NEW array instead of mutating the old one with push().
  // React compares state by reference; a new array means "state changed",
  // so the component re-renders and the new task appears.
  const addTask = (title) => {
    setTasks((prev) => [...prev, { id: Date.now(), title, done: false }]);
  };

  // Uses the functional updater so it always works on the latest state.
  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const visibleTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'done') return t.done;
    return filter === 'all';
  });

  return (
    <div className="app">
      {/* FIX #2: Header expects a prop called `count`, not `taskCount` */}
      <Header count={tasks.length} />

      <AddTaskForm onAdd={addTask} />

      <FilterBar filter={filter} onChange={setFilter} />

      {/* FIX #3: TaskList expects `onToggle`, not `onToggleTask` */}
      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />

      <Stats tasks={tasks} />
    </div>
  );
}
